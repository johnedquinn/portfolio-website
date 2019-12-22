/// @file:      Navbar.js
/// @author:    John Ed Quinn
// @desc:       Navigation Bar

/* IMPORTS */
import React from 'react';
import { Link } from 'react-router-dom';

/* NAVBAR */
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <Link className="navbar-brand col-2" to="/">John Ed Quinn</Link>
            <ul className="navbar-nav justify-content-end col-10">
                <li className="nav-item px-2">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item px-2">
                    <Link className="nav-link" to="/projects">My Work</Link>
                </li>
                <li className="nav-item px-2">
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

/* EXPORTS */
export default Navbar;