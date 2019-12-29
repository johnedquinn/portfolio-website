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

                            <li><a href="https://www.linkedin.com/in/johnedquinn/"><img className="footer-icon" src={LinkedIn}/></a></li>
                            <li><a href="https://gitlab.com/johnedquinn"><img className="footer-icon" src={Github}/></a></li>
                            <li><a href="https://gitlab.com/johnedquinn"><img className="footer-icon" src={Spotify}/></a></li>
                            <li><a href="https://www.instagram.com/johnedquinn/"><img className="footer-icon" src={Instagram}/></a></li>
                            <li><a href="https://www.snapchat.com/add/johnquinnn"><img className="footer-icon" src={Snapchat}/></a></li>
                            <li><a href="https://twitter.com/johnedquinn"><img className="footer-icon" src={Twitter}/></a></li>
                            <li class="nav-item px-2">
                                <a class="nav-link text-light" rel="noopener noreferrer" target="_blank"
                                    href="johnedquinn@gmail.com">Email</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="row py-5"></div>
        </div>
    );
}

/* EXPORTS */
export default Footer;