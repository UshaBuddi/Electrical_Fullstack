import React from 'react';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="our-work-container">
            {/* Header Section with Background Image and "Our Work" Text */}
            <div className="header-section">
                <img src="/about.png" alt="Header" className="header-image" />
                <div className="header-text">About</div>
            </div>

            {/* Content Section with 50% width text and 50% image */}
            <div className="about-content-section">
                <div className="about-content">
                    <h2>About Our Electrical Services</h2>
                    <p>
                        Our team of licensed electricians provides a full range of electrical services
                        across Auckland. From simple home repairs to complex commercial installations,
                        we ensure quality workmanship, reliability, and safety.
                    </p>
                    <p>
                        We are passionate about what we do and take pride in delivering excellent customer service.
                        Our expertise ranges from residential electrical repairs, new installations, and smart home
                        wiring to commercial electrical systems, ensuring that our clients’ needs are met with precision.
                    </p>
                    <p>
                        Electricity is a type of energy that consists of the movement of electrons between two points when there is a potential difference between them, making it possible to generate what is known as an electric current.

                        Let’s see a practical example to understand it better. What happens when we turn on the light switch? The electrical circuit is closed, connecting the first point to the second. The electrons start to move through the metallic copper wire (the conductive element), and we immediately have light. The circulation of electrons through the conductor wire is transformed into electric light.

                        As we will see below, electricity is practically essential in our day-to-day lives thanks to its amazing versatility and high level of convenience:
                    </p>
                </div>

                {/* Image on the right side */}
                <div className="about-image-container">
                    <img
                        src="/about_content.png"
                        alt="Electrician at Work"
                    />
                </div>
            </div>
            <Portfolio />
            <Footer />
        </div>

    );
}

export default About;
