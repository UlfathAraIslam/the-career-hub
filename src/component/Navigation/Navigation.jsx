import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar className='container link-container'  bg="light" expand="lg">
            <Navbar.Brand href="/">CareerHub</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/statistics">Statistics</Nav.Link>
                    <Nav.Link href="/">Applied Jobs</Nav.Link>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                </Nav>
                <Button className="ml-3" variant="primary">Start Applying</Button>
            </Navbar>
        </Navbar>
    );
};

export default Navigation;

