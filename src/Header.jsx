// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [theme, setTheme] = useState('light');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleItemClick = (index) => {
        setActiveIndex(index);
        closeMenu();
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(`${newTheme}-theme`);
        document.documentElement.style.setProperty('--navbar-bg-light', newTheme === 'light' ? '#1a1a1a' : '#565656');
        document.documentElement.style.setProperty('--navbar-bg-dark', newTheme === 'light' ? '#565656' : '#1a1a1a');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className='base'>
            <nav className={`navbar ${theme}`}>
                <Link to="/" className="navbar-left">Top T</Link>
                <div className="navbar-right">
                    <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <div className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
                        <NavItem
                            label="Főoldal"
                            index={0}
                            activeIndex={activeIndex}
                            onClick={handleItemClick}
                            to="/" // Updated to="/" as it corresponds to the LandingPage route
                        />
                        <NavItem
                            label="Rólunk"
                            index={1}
                            activeIndex={activeIndex}
                            onClick={handleItemClick}
                            to="/About"
                        />
                        <NavItem
                            label="Chat"
                            index={1}
                            activeIndex={activeIndex}
                            onClick={handleItemClick}
                            to="/PortfolioPage"
                        />
                    </div>
                    <button className="theme-switch" onClick={toggleTheme}>
                        {theme === 'light' ? (
                            <FontAwesomeIcon icon={faMoon} />
                        ) : (
                            <FontAwesomeIcon icon={faSun} />
                        )}
                    </button>
                </div>
            </nav>
            <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}></div>
        </div>
    );
};

const NavItem = ({ label, index, activeIndex, onClick, to }) => {
    const isActive = activeIndex === index;

    return (
        <Link
            to={to}
            className={`nav-item ${isActive ? 'active' : ''}`}
            onClick={() => onClick(index)}
        >
            {label}
            {isActive && <div className="underline" />}
        </Link>
    );
};

export default Navbar;
