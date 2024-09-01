import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import '../styles/Header.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <Link to="/" className="navbar-logo">
                        Carousel World
                    </Link>
                    <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                        <li className="navbar-item">
                            <Link to="/" className="navbar-link">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/about" className="navbar-link">About</Link>
                        </li>
                        <li className="navbar-item dropdown"
                            onMouseEnter={toggleDropdown}
                            onMouseLeave={toggleDropdown}>
                            <Link to="/collection" className="navbar-link">
                                Collection
                            </Link>

                        </li>
                        <li className="navbar-item">
                            <Link to="/misc" className="navbar-link">Miscellaneous</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/foreign" className="navbar-link">Foreign</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/events" className="navbar-link">Events</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <div className="navbar-contact-info">
                        <Phone size={20} />
                        <span>(514) 358-5519</span>
                    </div>
                    <Link to="/book" className="navbar-book">
                        <Calendar size={20} />
                        <span>Place an order</span>
                    </Link>
                </div>
                <button className="navbar-toggle" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
