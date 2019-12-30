/// @file:      HomeHeader.js
/// @author:    John Ed Quinn
// @desc:       Navigation Bar

/* IMPORTS */
import React from 'react';
import NavBar from './NavBar';

/* NAVBAR */
const HomeHeader = () => {
    return (
        <header className="header index-header">
            <div className="overlay"></div>
            <NavBar/>
            <div className="container mobile-center">
                <div className="description">
                    <h1>JOHN</h1>
                    <h1>ED QUINN</h1>
                    <h3>Computer Science student at the University of Notre Dame.</h3>
                    <h5>Really just someone who is fascinated by what's possible.</h5>
                </div>
            </div>
        </header>
    );
}

/* EXPORTS */
export default HomeHeader;