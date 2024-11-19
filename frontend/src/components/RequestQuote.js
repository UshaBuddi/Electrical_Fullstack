import React, { useState, useRef } from 'react';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';


const RequestQuote = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        jobAddress: '',
        jobDescription: '',
    });
    const [files, setFiles] = useState([]);
    const [fileList, setFileList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
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
        const backendUrl = process.env.REACT_APP_BACKEND_URL;
        setLoading(true); // Show loading spinner
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
                // await axios.post('http://localhost:8000/send-email', data, {
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
        <div className="quote-section">
            <div className="quote-form-container">
                <h2>Request a Free Quote</h2>
                <form className="quote-form" onSubmit={handleSubmit} encType="multipart/form-data">
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
                            autoComplete="off"
                            onChange={handleFileChange}
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

            <div className="quote-image-container">
                <img src="/human.jpg" alt="Request a quote" />
            </div>
        </div>
    );
};

export default RequestQuote;
