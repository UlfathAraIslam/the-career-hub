import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Header = () => {
    return (
        <header className=' container bg-light'>
            <nav className='d-flex justify-content-between mt-3'>
                <h1>CareerHub</h1>
                <div className='link-container mt-1'>
                    <Link to="/">Home</Link>
                    <Link to="/">Statistics</Link>
                    <Link to="/">Applied Jobs</Link>
                </div>
                <button className='btn'>Start Applying</button>

            </nav>
            <section className='mt-3 grid '>
                <Row className='g-3'>
                    <Col><h3>One Step <br /> Closer To Your <br /><span className='text-color'>Dream Job</span></h3>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn'>Get Started</button></Col>
                    
                    <Col><img src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG" alt="" /></Col>
                </Row>
                <div>
                    
                </div>
                <div>

                </div>
            </section>
        </header>


    );
};

export default Header;