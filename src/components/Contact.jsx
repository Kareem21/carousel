import React from 'react';
import '../styles/Contact.css';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
    return (
        <div className="contact-page">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-copy">
                Send us a form with the item you are inquiring about or any other questions.
            </p>
            <div className="contact-container">
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" name="message" placeholder="Enter your message" rows="6" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
                <div className="contact-info-card">
                    <h2>Get in Touch</h2>
                    <div className="info-item">
                        <PhoneIcon /> <span>(123) 456-7890</span>
                    </div>
                    <div className="info-item">
                        <EmailIcon /> <span>info@carouselworld.com</span>
                    </div>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;