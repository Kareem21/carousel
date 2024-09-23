import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';
import '../styles/Header.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
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

    useEffect(() => {
        closeMenu();
    }, [location]);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/collection', label: 'Collection' },
        { path: '/misc', label: 'Miscellaneous' },
        { path: '/Foreign', label: 'Foreign' },
        { path: '/events', label: 'Events' },
    ];

    const leftNavItems = navItems.slice(0, 4); // Include up to Miscellaneous
    const rightNavItems = navItems.slice(4);   // Start from Foreign

    return (
        <nav className="navbar" ref={menuRef}>
            <div className="navbar-container">
                <div className="navbar-mobile-header">
                    <Link to="/" className="navbar-logo navbar-logo-mobile" onClick={closeMenu}>
                        Carousel World
                    </Link>
                    <button
                        className="navbar-toggle"
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="navbar-list navbar-list-left">
                        {leftNavItems.map((item) => (
                            <li key={item.path} className="navbar-item">
                                <Link
                                    to={item.path}
                                    className={`navbar-link ${location.pathname === item.path ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to="/" className="navbar-logo navbar-logo-desktop" onClick={closeMenu}>
                        Carousel World
                    </Link>
                    <ul className="navbar-list navbar-list-right">
                        {rightNavItems.map((item) => (
                            <li key={item.path} className="navbar-item">
                                <Link
                                    to={item.path}
                                    className={`navbar-link ${location.pathname === item.path ? 'active' : ''}`}
                                    onClick={closeMenu}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="navbar-contact">
                        <div className="navbar-contact-info">
                            <Phone size={20} aria-hidden="true" />
                            <a href="tel:+15143585519" className="navbar-phone">(514) 358-5519</a>
                        </div>
                        <Link to="/Contact" className="navbar-book" onClick={closeMenu}>
                            <ShoppingCart size={20} aria-hidden="true" />
                            <span>Place an order</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Phone, Calendar } from 'lucide-react';
// import '../styles/Header.css';
//
// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const menuRef = useRef(null);
//     const location = useLocation();
//
//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };
//
//     const closeMenu = () => {
//         setIsMenuOpen(false);
//     };
//
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (menuRef.current && !menuRef.current.contains(event.target)) {
//                 closeMenu();
//             }
//         };
//
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);
//
//     useEffect(() => {
//         closeMenu();
//     }, [location]);
//
//     const navItems = [
//         { path: '/', label: 'Home' },
//         { path: '/about', label: 'About' },
//         { path: '/collection', label: 'Collection' },
//         { path: '/misc', label: 'Miscellaneous' },
//         { path: '/Foreign', label: 'Foreign' },
//         { path: '/events', label: 'Events' },
//     ];
//
//     return (
//         <nav className="navbar" ref={menuRef}>
//             <div className="navbar-container">
//                 <Link to="/" className="navbar-logo" onClick={closeMenu}>
//                     Carousel World
//                 </Link>
//                 <button
//                     className="navbar-toggle"
//                     onClick={toggleMenu}
//                     aria-expanded={isMenuOpen}
//                     aria-label="Toggle navigation menu"
//                 >
//                     {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                 </button>
//                 <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
//                     <ul className="navbar-list">
//                         {navItems.map((item) => (
//                             <li key={item.path} className="navbar-item">
//                                 <Link
//                                     to={item.path}
//                                     className={`navbar-link ${location.pathname === item.path ? 'active' : ''}`}
//                                     onClick={closeMenu}
//                                 >
//                                     {item.label}
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>
//                     <div className="navbar-contact">
//                         <div className="navbar-contact-info">
//                             <Phone size={20} aria-hidden="true" />
//                             <a href="tel:+15143585519" className="navbar-phone">(514) 358-5519</a>
//                         </div>
//                         <Link to="/Contact" className="navbar-book" onClick={closeMenu}>
//                             <Calendar size={20} aria-hidden="true" />
//                             <span>Place an order</span>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };
//
// export default Navbar;


