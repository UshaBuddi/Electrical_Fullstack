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
                    {/* <Carousel.Caption>
            <h3>First Slide Title</h3>
            <p>First Slide Description goes here.</p>
          </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item>
                    <div className="carousel-image-container">
                        <img
                            className="d-block w-100"
                            src="/image2.jpg"
                            alt="Second slide"
                        />
                    </div>
                    {/* <Carousel.Caption>
            <h3>Second Slide Title</h3>
            <p>Second Slide Description goes here.</p>
          </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item>
                    <div className="carousel-image-container">
                        <img
                            className="d-block w-100"
                            src="/image3.jpg"
                            alt="Third slide"
                        />
                    </div>
                    {/* <Carousel.Caption>
            <h3>Third Slide Title</h3>
            <p>Third Slide Description goes here.</p>
          </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselSection;
