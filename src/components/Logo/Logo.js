import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';

const Logo = ({ className = "" }) => {
    return (
        <Link to='/' className={`Logo ${className}`}>Mimini</Link>
    )
};

export default Logo;