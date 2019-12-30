/// @file:      Navbar.js
/// @author:    John Ed Quinn
// @desc:       Navigation Bar

/* IMPORTS */
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

/* NAVBAR */
const NavBar = () => {
    return (
        <Navbar className="navbar-dark" bg="transparent" expand="lg">
            <Navbar.Brand href="/">John Ed Quinn</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse className="justify-content-end">
                <Nav className="mr-auto justify-content-end">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

/* EXPORTS */
export default NavBar;