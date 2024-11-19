import React, { useState, useRef } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import { FaTimes } from 'react-icons/fa';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        jobAddress: '',
        jobDescription: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    const [files, setFiles] = useState([]);
    const [fileList, setFileList] = useState([]);
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef(null);
    const maxFileSize = 2 * 1024 * 1024;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const uploadedFiles = Array.from(e.target.files);
        let validFiles = [];
        let error = '';

        uploadedFiles.forEach(file => {
            if (file.size > maxFileSize) {
                error = `File ${file.name} exceeds the maximum size of 2MB.`;
            } else {
                validFiles.push(file); // Add valid file to the list
            }
        });

        if (error) {
            setErrorMessage(error); // Set error message if any file is too large
        } else {
            setErrorMessage(''); // Clear any error message
            setFiles([...files, ...validFiles]);
            setFileList([...fileList, ...validFiles.map((file) => file.name)]);
        }
        fileInputRef.current.value = "";
    };

    const removeFile = (index) => {
        const updatedFiles = fileList.filter((_, i) => i !== index); // Remove file by index
        setFileList(updatedFiles); // Update file list
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show loading spinner
        const backendUrl = process.env.REACT_APP_BACKEND_URL;
        setFormData({
            name: '',
            email: '',
            phone: '',
            jobAddress: '',
            jobDescription: ''
        });
        setFiles([]);
        setFileList([]);
        // Reset file input element
        document.getElementById('fileInput').value = '';
        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        data.append('jobAddress', formData.jobAddress);
        data.append('jobDescription', formData.jobDescription);
        for (let i = 0; i < files.length; i++) {
            data.append('files', files[i]);
        }

        try {
            await axios.post(`${backendUrl}/send-email`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        } catch (error) {
            console.error('Error submitting the quote request:', error);
            setLoading(false); // Hide loading spinner
        } finally {
            setLoading(false); // Hide loading indicator
        }
    };

    return (
        <div className="contact-page">
            {/* Header Section with Image and Contact Text */}
            <div className="contact-header">
                <img src="/about.png" alt="Contact Header" className="header-image" />
                <div className="header-text">Contact</div>
            </div>

            {/* Contact Info and Form Section */}
            <div className="contact-section">
                {/* Contact Details */}
                <div className="contact-details">
                    <h2>Contact Information</h2>
                    <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                    <p><strong>Email:</strong> electrical.business@outlook.com</p>
                    <p><strong>Address:</strong> 12345 Electric Ave, Auckland, NZ</p>
                    <p><strong>Business Hours:</strong> Mon-Fri: 9am - 5pm</p>
                </div>

                {/* Quote Submission Form */}
                <div className="quote-form">
                    <h2>Request a Quote</h2>
                    <form className="form-section" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input type="text" id="name" name="name" value={formData.name} autoComplete="off" onChange={handleInputChange} required />
                        </div>
                        <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input type="tel" 
                        // pattern="[0-9]"
                        //     maxLength="10" 
                            id="phone" name="phone" value={formData.phone} autoComplete="off" onChange={handleInputChange} required />
                    </div>
                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input type="email" id="email" name="email" value={formData.email} autoComplete="off" onChange={handleInputChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="jobAddress">Address</label>
                            <input type="jobAddress" id="jobAddress" name="jobAddress" value={formData.jobAddress} autoComplete="off" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="jobDescription">Description</label>
                            <textarea id="jobDescription" name="jobDescription" value={formData.jobDescription} autoComplete="off" onChange={handleInputChange} ></textarea>
                        </div>

                        <div className="form-group">
                            <label>Upload Files:</label>
                            <input
                                id="fileInput"
                                type="file"
                                ref={fileInputRef}
                                multiple
                                onChange={handleFileChange}
                                autoComplete="off"
                            />
                        </div>

                        {/* Display uploaded files */}
                        <div className="file-list">
                            <h4>Files Uploaded:</h4>
                            <ul>
                                {fileList.map((file, index) => (
                                    <div key={index} className="file-item">

                                        <li key={index}>{file}  <FaTimes className="remove-icon" onClick={() => removeFile(index)} /></li>

                                    </div>
                                ))}
                            </ul>
                            {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}
                        </div>



                        <button type="submit" className='submit-button' disabled={errorMessage !== '' || loading}>
                            {loading ? 'Sending request...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
