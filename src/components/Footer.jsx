import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-section contact-info">
                <h3>Contact</h3>
                <p>973-452-5127</p>
                <p>Email: carouselworld@gmail.com</p>
                <div className="social-icons">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                </div>
            </div>
            <div className="footer-section logo-section">
                <h2 className="logo">Carousel World</h2>
            </div>
            <div className="footer-section links">
                <h3>Links</h3>
                <a href="/about">About us</a>
                <a href="/collection">Our collection</a>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2024, Carousel World</p>
        </div>
    </footer>
);

export default Footer;