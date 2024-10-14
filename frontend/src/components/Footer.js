import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center p-3 mt-1">
            <div className="container">
                <p>&copy; 2024 My Website. All Rights Reserved.</p>
                <ul className="footer-links">
                    <li><a href="/terms">Terms and Conditions</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/returns">Returns Policy</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
