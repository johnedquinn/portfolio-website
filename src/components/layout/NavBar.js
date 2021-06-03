/// @file:      Navbar.js
/// @author:    John Ed Quinn
//. @desc:       Navigation Bar

/* IMPORTS */
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

/// @func: NavBar
/// @desc: Navbar for website
const NavBar = () => {
    return (
        <Navbar className="navbar-dark" bg="transparent" expand="lg">
            <Navbar.Brand href="/" className="mobile-empty">John Ed Quinn</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        </Navbar>
    );
}

/* EXPORTS */
export default NavBar;
