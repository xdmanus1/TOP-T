import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css'; // You can define your dropdown styles in Dropdown.css

const Dropdown = ({ label, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`nav-item navds `} onClick={toggleDropdown}>
            <a className="nav-item dropds">
                {label}
            </a>
            <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                {options.map((option, index) => (
                    <Link
                        key={index}
                        to={option.to}
                        className={`dropdown-item nav-item ${isOpen ? 'show' : ''}`}
                    >
                        {option.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
