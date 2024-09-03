import React from 'react';
import '../styles/Footer.css';
import { Facebook, Instagram, Email } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-section contact-info">
                <h3>CONTACT</h3>
                <p>973-452-5127</p>
                <p>Email: carouselworld@gmail.com</p>
                <div className="social-icons">
                    <IconButton
                        aria-label="Facebook"
                        size="small"
                        style={{ color: 'inherit' }}
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Facebook fontSize="small" />
                    </IconButton>
                    <IconButton
                        aria-label="Instagram"
                        size="small"
                        style={{ color: 'inherit' }}
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Instagram fontSize="small" />
                    </IconButton>
                    <IconButton
                        aria-label="Email"
                        size="small"
                        style={{ color: 'inherit' }}
                        href="mailto:carouselworld@gmail.com"
                    >
                        <Email fontSize="small" />
                    </IconButton>
                </div>
            </div>
            <div className="footer-section logo-section">
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h2 className="logo">CarouselWorld</h2>
                </Link>
            </div>
            <div className="footer-section links">
                <h3>LINKS</h3>
                <Link to="/about">About us</Link>
                <Link to="/collection">Our collection</Link>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2024, Carouselworld</p>
        </div>
    </footer>
);

export default Footer;