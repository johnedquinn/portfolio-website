/// @file:      Footer.js
/// @author:    John Ed Quinn
// @desc:       Footer

/* IMPORTS */
import React from 'react';
import LinkedIn from '../icons/LinkedIn.svg';
import Github from '../icons/Github.svg';
import Instagram from '../icons/Instagram.svg';
import Twitter from '../icons/Twitter.svg';
import Spotify from '../icons/Spotify.svg';
import Snapchat from '../icons/Snapchat.svg';

/* NAVBAR */
const Footer = () => {
    return (
        <div class="col footer">
            <div class="row py-5"></div>
            <div class="row justify-content-center">
                <h2 class="text-light">Stay along for the ride</h2>
            </div>
            <div class="row">
                <div class="col">
                    <nav class="navbar navbar-expand-lg bg-transparent justify-content-center">
                        <ul class="navbar-nav">
                            <li><a href="https://www.linkedin.com/in/johnedquinn/" rel="noopener noreferrer" target="_blank"><img className="footer-icon" alt="LinkedIn Icon" src={LinkedIn}/></a></li>
                            <li><a href="https://gitlab.com/johnedquinn" rel="noopener noreferrer" target="_blank"><img className="footer-icon" alt="Git Icon" src={Github}/></a></li>
                            <li><a href="https://open.spotify.com/user/johnedquinn" rel="noopener noreferrer" target="_blank"><img className="footer-icon" alt="Spotify Icon" src={Spotify}/></a></li>
                            <li><a href="https://www.instagram.com/johnedquinn/" rel="noopener noreferrer" target="_blank"><img className="footer-icon" alt="Instagram Icon" src={Instagram}/></a></li>
                            <li><a href="https://www.snapchat.com/add/johnquinnn" rel="noopener noreferrer" target="_blank"><img className="footer-icon" alt="Snapchat Icon" src={Snapchat}/></a></li>
                            <li><a href="https://twitter.com/johnedquinn" rel="noopener noreferrer" target="_blank"><img className="footer-icon" alt="Twitter Icon" src={Twitter}/></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="row py-4"></div>
                <p className="text-center"><small className="text-center text-white">&copy; 2019 John Ed Quinn</small></p>
            <div class="row py-2"></div>
        </div>
    );
}

/* EXPORTS */
export default Footer;