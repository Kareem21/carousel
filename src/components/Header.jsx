import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import '../styles/Header.css';
import "@fontsource/great-vibes";

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">
                <Link to="/" className="logo">Carousel World</Link>
                <nav className={`nav-menu ${menuActive ? 'active' : ''}`}>
                    <ul className="nav-links">
                        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                        <li><Link to="/collection" onClick={toggleMenu}>Collection</Link></li>
                        <li><Link to="/miscellaneous" onClick={toggleMenu}>Miscellaneous</Link></li>
                        <li><Link to="/foreign" onClick={toggleMenu}>Foreign</Link></li>
                        <li><Link to="/events" onClick={toggleMenu}>Events</Link></li>
                    </ul>
                    <Link to="/contact" className="contact-us">Contact us</Link>
                </nav>
                <button className="menu-icon" onClick={toggleMenu}>
                    <Menu size={24} />
                </button>
            </div>
        </header>
    );
};

export default Header;