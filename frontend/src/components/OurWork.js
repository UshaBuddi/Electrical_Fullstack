import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Footer from '../components/Footer';

const OurWork = () => {
    const [currentImage, setCurrentImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const images = [
        // Replace these with your actual image URLs
        '/about.png',
        '/about_content.png',
        '/gardening.jpg',
        '/hair.jpg',
        '/human.jpg',
        '/image1.jpg',
        '/image2.jpg',
        '/image3.jpg',
        '/realestate.jpg',
        '/restaurants.jpg',
        '/retail.jpg',
        '/service.jpg',
    ];

    const openModal = (index) => {
        setCurrentImage(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleNext = () => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="our-work-container">
            {/* Header Section with Background Image and "Our Work" Text */}
            <div className="header-section">
                <img src="/about.png" alt="Header" className="header-image" />
                <div className="header-text">Our Work</div>
            </div>
            <h2>A Sample of Our Work</h2>
            {/* Image Gallery Section */}
            <div className="gallery-container">
                {images.map((image, index) => (
                    <div className="gallery-item" key={index} onClick={() => openModal(index)}>
                        <img src={image} alt={`Gallery ${index}`} />
                        <div className="hover-overlay">
                            <FaSearch className="search-icon" />
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="modal">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <span className="prev" onClick={handlePrev}>&#10094;</span>
                    <img className="modal-content" src={images[currentImage]} alt={`work-${currentImage}`} />
                    <span className="next" onClick={handleNext}>&#10095;</span>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default OurWork;
