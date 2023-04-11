import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        
        <nav className='d-flex justify-content-between container mt-3'>
            <h1>CareerHub</h1>
            <div className='link-container mt-1'>
            <Link to="/">Home</Link>
            <Link to="/">Statistics</Link>
            <Link to="/">Applied Jobs</Link>
            <Link to="/">Blog</Link>
            </div>
            <button className='btn'>Start Applying</button>
            
        </nav>
      
    );
};

export default Header;