import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselSection = () => {
    return (
        <div className="carousel-section">
            <Carousel>
                <Carousel.Item>
                    <div className="carousel-image-container">
                        <img
                            className="d-block w-100"
                            src="/image1.jpg"
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="carousel-image-container">
                        <img
                            className="d-block w-100"
                            src="/image2.jpg"
                            alt="Second slide"
                        />
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="carousel-image-container">
                        <img
                            className="d-block w-100"
                            src="/image3.jpg"
                            alt="Third slide"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselSection;
