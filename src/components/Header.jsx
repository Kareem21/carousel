import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import '../styles/Header.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleNavigation = (path) => {
        closeMenu();
        navigate(path);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar" ref={menuRef}>
            <div className="navbar-container">
                <div className="navbar-left">
                    <Link to="/" className="navbar-logo" onClick={() => handleNavigation('/')}>
                        Carousel World
                    </Link>
                    <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                        <li className="navbar-item">
                            <Link to="/" className="navbar-link" onClick={() => handleNavigation('/')}>Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/about" className="navbar-link" onClick={() => handleNavigation('/about')}>About</Link>
                        </li>
                        <li className="navbar-item dropdown"
                            onMouseEnter={toggleDropdown}
                            onMouseLeave={toggleDropdown}>
                            <Link to="/collection" className="navbar-link" onClick={() => handleNavigation('/collection')}>
                                Collection
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/misc" className="navbar-link" onClick={() => handleNavigation('/misc')}>Miscellaneous</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/Foreign" className="navbar-link" onClick={() => handleNavigation('/Foreign')}>Foreign</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/events" className="navbar-link" onClick={() => handleNavigation('/events')}>Events</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <div className="navbar-contact-info">
                        <Phone size={20} />
                        <span>(514) 358-5519</span>
                    </div>
                    <Link to="/Contact" className="navbar-book" onClick={() => handleNavigation('/Contact')}>
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