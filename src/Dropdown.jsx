import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css'; // You can define your dropdown styles in Dropdown.css

const Dropdown = ({ label, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const isPhoneDisplay = window.innerWidth <= 768; // Adjust the breakpoint according to your design

    return (
        <div className={`nav-item navds`} ref={dropdownRef}>
            <a
                className={`nav-item dropds ${isPhoneDisplay ? 'unclickable' : ''}`}
                onClick={isPhoneDisplay ? null : toggleDropdown}
            >
                {label}
            </a>
            <div className={`dropdown-content ${isOpen && !isPhoneDisplay ? 'show' : ''}`}>
                {options.map((option, index) => (
                    <Link
                        key={index}
                        to={option.to}
                        className={`dropdown-item nav-item ${isOpen && !isPhoneDisplay ? 'show' : ''}`}
                    >
                        {option.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
