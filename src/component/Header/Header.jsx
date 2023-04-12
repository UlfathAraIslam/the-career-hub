import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from '../Navigation/Navigation';
const Header = () => {
    return (
        <header className=' container bg-light'>
            <section className='mt-3'>
                <Row className='g-3'>
                    <Col className='gt-4'><h3>One Step <br /> Closer To Your <br /><span className='text-color'>Dream Job</span></h3>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn'>Get Started</button></Col>
                    
                    <Col className='img-fluid'><img src="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/9.JPG" alt="" /></Col>
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