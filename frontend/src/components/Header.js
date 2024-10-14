import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const MyNavbar = () => {
    const location = useLocation()
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        // Set the active tab based on the current pathname
        const path = location.pathname;
        switch (path) {
            case '/about':
                setActiveTab('about');
                break;
            case '/ourwork':
                setActiveTab('ourwork');
                break;
            case '/services':
                setActiveTab('services');
                break;
            case '/contact':
                setActiveTab('contact');
                break;
            default:
                setActiveTab('home');
                break;
        }
    }, [location.pathname]); // Trigger when pathname changes

    const handleClick = (tab) => {
        console.log(tab, 'tab')
        setActiveTab(tab);
    };



    return (

        <Navbar bg="light" variant="light" expand="lg" fixed="top" className="navbar-custom">
            <Container className="navbar-container">
                <Navbar.Brand as={Link} to="/" className="navbar-logo">
                    <img
                        src="/logo.png"  // Replace with your logo path
                        width="150"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleClick('home')}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" className={`nav-item ${activeTab === 'about' ? 'active' : ''}`} onClick={() => handleClick('about')}>
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/ourwork" className={`nav-item ${activeTab === 'ourwork' ? 'active' : ''}`} onClick={() => handleClick('ourwork')}>
                            Our Work
                        </Nav.Link>
                        <Nav.Link as={Link} to="/services" className={`nav-item ${activeTab === 'services' ? 'active' : ''}`} onClick={() => handleClick('services')}>
                            Services
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" className={`nav-item ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => handleClick('contact')}>
                            Contact
                        </Nav.Link>
                        {console.log(activeTab, 'tabbbb')},
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
