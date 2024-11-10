import React from 'react';

const PortfolioSection = () => {
    const clients = [
        { id: 1, image: '/retail.jpg', category: 'Retail' },
        { id: 2, image: '/restaurants.jpg', category: 'Restaurants' },
        { id: 3, image: '/hair.jpg', category: 'Hair Salon' },
        { id: 4, image: '/gardening.jpg', category: 'Gardening' },
        { id: 5, image: '/realestate.jpg', category: 'Real Estate' },
    ];

    return (
        <div className="portfolio-section">
            <h2>A Selection of Our Clients</h2>

            <div className="portfolio-grid">
                {clients.map(client => (
                    <div className="portfolio-item" key={client.id}>
                        <div className="portfolio-image-container">
                            <img src={client.image} alt={client.category} />
                            <div className="portfolio-category">
                                {client.category}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioSection;
