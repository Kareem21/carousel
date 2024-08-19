import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import "@fontsource/great-vibes"; // Importing the Great Vibes font

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <header className="navbar">
            <nav className="nav-container">
                <div className="menu-icon" onClick={toggleMenu}>
                    <span>&#9776;</span>
                </div>
                <ul className={`nav-links left ${menuActive ? 'active' : ''}`}>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                    <li><Link to="/collection" onClick={toggleMenu}>Collection</Link></li>
                </ul>
                <div className="logo-container">
                    <Link to="/" className="logo">Carousel World</Link>
                </div>
                <ul className={`nav-links right ${menuActive ? 'active' : ''}`}>
                    <li><Link to="/miscellaneous" onClick={toggleMenu}>Miscellaneous</Link></li>
                    <li><Link to="/foreign" onClick={toggleMenu}>Foreign</Link></li>
                    <li><Link to="/events" onClick={toggleMenu}>Events</Link></li>
                </ul>
                <Link to="/contact" className="contact-us">Contact us</Link>
            </nav>
        </header>
    );
};

export default Header;