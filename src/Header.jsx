import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Login from './GoogleLogin.jsx';
import Dropdown from './Dropdown.jsx';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [theme, setTheme] = useState('light');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isDev, setIsDev] = useState(false);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            setIsLoggedIn(!!user);
            if (user) {
                firebase.firestore().collection('admins').doc(user.uid).get()
                    .then(doc => {
                        if (doc.exists) {
                            setIsAdmin(true);
                            console.log('User is an admin');
                        } else {
                            setIsAdmin(false);
                            console.log('User is not an admin');
                        }
                    })
                    .catch(error => {
                        console.error('Error checking admin status:', error);
                    });

                firebase.firestore().collection('users').doc(user.uid).get()
                    .then(doc => {
                        if (doc.exists) {
                            setIsDev(true);
                            console.log('User is a developer');
                        } else {
                            setIsDev(false);
                            console.log('User is not a developer');
                        }
                    })
                    .catch(error => {
                        console.error('Error checking developer status:', error);
                    });
            }
        });

        return () => unsubscribe();
    }, []);

    const handleItemClick = (index) => {
        setActiveIndex(index);
        closeMenu();
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(`${newTheme}-theme`);
        document.documentElement.style.setProperty('--navbar-bg-light', newTheme === 'light' ? '#000000' : '#565656');
        document.documentElement.style.setProperty('--navbar-bg-dark', newTheme === 'light' ? '#565656' : '#000000');
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
                            to="/"
                        />

                        <Dropdown label="Menü" options={[
                            { label: "Rólunk", to: "/About" },
                            { label: "Portfólió", to: "/PortfolioPage" },
                            { label: "Devlog", to: "/DevlogPage" }
                        ]} />
                        <NavItem
                            label="Szolgáltatásaink"
                            index={3}
                            activeIndex={activeIndex}
                            onClick={handleItemClick}
                            to="/OrderPage"
                        />


                        {/* <Dropdown className="adminas" label="Admin" index={4}> */}
                        {isLoggedIn && (
                            <>
                                {isAdmin && <NavItem label="Admin Panel" index={4} to="/AdminPanel" />}
                                {(isAdmin || isDev) && <NavItem label="Todo Lista" index={5} to="/TodoList" />}
                            </>
                        )}





                        {/* </Dropdown> */}


                        {isLoggedIn ? (
                            <>
                                <NavItem
                                    label={<FontAwesomeIcon icon={faSignOutAlt} />}
                                    index={6}
                                    onClick={() => firebase.auth().signOut()}
                                    to="/"
                                />
                            </>
                        ) : (
                            <NavItem
                                label={<FontAwesomeIcon icon={faSignInAlt} />}
                                index={7}
                                activeIndex={activeIndex}
                                onClick={handleItemClick}
                                to="/login"
                            />
                        )}

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
