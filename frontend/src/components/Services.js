import React from 'react';
import Footer from './Footer';
import Testimonials from './Testimonials';
import RequestQuote from './RequestQuote';
// import './Services.css';

const Services = () => {
  const electricalServices = [
    {
      title: "Heat Pump Installations",
      description: "As specialists in our field, we make installing heat pump a lot easier for you. Optimize your home’s heating and cooling from your mobile device. We provide installation, maintenance, and repairs to ensure efficient and reliable climate control year-round. Enjoy energy savings and comfort with our professional solutions. Contact us today for all your heat pump needs!",
      image: "https://exoticelectrical.co.nz/wp-content/uploads/2024/06/Image-1.jpg", // Replace with actual image URL
    },
    {
      title: "Ventilation",
      description: "We provide a one-stop solution for Ventilation options for kitchens and Bathrooms. If you need a solid solution for your extraction, or ventilation systems, you have come to the perfect place.",
      image: "https://exoticelectrical.co.nz/wp-content/uploads/2024/06/Image-8-1.jpg", // Replace with actual image URL
    },
    {
      title: "LED lighting",
      description: "Transform your home with our expert LED downlight services. We offer consultation, design, installation, retrofitting, smart lighting integration, maintenance, and energy audits. Enhance efficiency, aesthetics, and sustainability with our high-quality solutions. Contact us today for a brighter, smarter environment!",
      image: "https://exoticelectrical.co.nz/wp-content/uploads/2024/06/Image-55.jpg", // Replace with actual image URL
    },
    {
      title: "LED Security Sensor Lighting",
      description: "Enhance your property’s safety with our professional security sensor light installation services. We offer expert placement, installation, and maintenance to ensure your lights activate precisely when needed, deterring intruders and providing peace of mind. Contact us today for reliable and efficient security lighting solutions!",
      image: "https://exoticelectrical.co.nz/wp-content/uploads/2024/06/Image-7.jpg", // Replace with actual image URL
    },
    {
      title: "CCTV Installations",
      description: "High Resolution CCTV systems enhance security and peace of mind. Protect what matters most from easy operation from a smart phone. We have all your needs completely covered right here in Exotic Electrical NZ. Call us to get started!",
      image: "https://exoticelectrical.co.nz/wp-content/uploads/2024/06/Image-2.jpg", // Replace with actual image URL
    },
    {
      title: "Residential Security Alarm Installations",
      description: "We are specialists in security solutions for the residential sector. Using cutting-edge and state-of-the-art products, we’re at the forefront of keeping Auckland safe.",
      image: "https://exoticelectrical.co.nz/wp-content/uploads/2024/06/Image-3.jpg", // Replace with actual image URL
    },
    {
      title: "Electrical Repairs and Renovations",
      description: "Expert electrical repairs and renovations for homes. From troubleshooting and fixing faults to complete electrical upgrades and remodels, our certified electricians ensure safety, efficiency, and compliance with all standards. Contact us today for reliable, high-quality electrical solutions!",
      image: "https://exoticelectrical.co.nz/wp-content/uploads/2024/06/Image-4.jpg", // Replace with actual image URL
    },
    {
      title: "Switchboard Upgrades",
      description: "We provide full electrical switchboard upgrade and installation service. Switchboards are the heart of any electrical installation, they protect the circuits within the property and act as a central point for fault finding.",
      image: "https://exoticelectrical.co.nz/wp-content/uploads/2024/06/Image-5.jpg", // Replace with actual image URL
    },
    {
      title: "Hot Water Heat Pumps",
      description: "Upgrade to our hot water heat pump for energy-efficient, eco-friendly heating. Save on energy bills while enjoying consistent hot water. Easy to install and perfect for any home, it’s the smarter choice for sustainable living.",
      image: "https://exoticelectrical.co.nz/wp-content/uploads/2024/06/haier-home_04_HP250M1_34_au-nz_2900x1037.jpg", // Replace with actual image URL
    },
  ];

  return (
    <div className="services-container">
      {/* Services Header */}
      <div className="header-section">
        <img src="/about.png" alt="Header" className="header-image" />
        <div className="header-text">Services</div>
      </div>

      {/* Our Electrical Services Section */}
      <div className="electrical-services">
        <div className="content">
          <h2>Our Electrical Services in Auckland, NZ</h2>
          <p>
            Electricity is more than simply turning on the lights. Electricians could help you with many different tasks, such as installing heating and cooling systems, CCTV installations, residential alarm installations, electrical repairs and renovations, electrical inspections, and so much more.

            Do not risk your family’s safety by hiring an amateur electrician, or worse, by trying to solve your electricity issues by yourself. It is important to hire an accredited electrician from Exotic Electrical NZ.

            We are an Auckland-based electrical service provider and pride ourselves on bringing a helpful and friendly hand to the electrical sector. We offer professional and top-notch electrical services for homes, offices, and buildings in Auckland, NZ.

            From sudden breakdowns to pre-emptive maintenance, Exotic Electrical NZ has got you covered. Check out the wide array of services we offer and call us now to avail these services. Our licensed electricians are just one phone call away.
          </p>
        </div>
        <div className="image">
          <img src="https://exoticelectrical.co.nz/wp-content/uploads/2022/03/Rectangle-331.jpg" alt="Electrical Services" />
        </div>
      </div>

      {/* Electrical Products Section */}
      <div className="products-section">
        <h2>Electrical Products</h2>
        <div className="product-cards">
          {electricalServices.map((service, index) => (
            <div key={index} className="product-card">
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Testimonials />
      <RequestQuote />
      <Footer />
    </div>
  );
};

export default Services;
