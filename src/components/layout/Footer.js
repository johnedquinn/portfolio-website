/// @file:      Footer.js
/// @author:    John Ed Quinn
/// @desc:       Footer

/* IMPORTS */
import React from 'react';
import LinkedIn from '../icons/LinkedIn.svg';
import Github from '../icons/Github.svg';
import Spotify from '../icons/Spotify.svg';
import Gitlab from '../icons/GitLab.png';
import Resume from '../icons/Resume.png';
import Email from '../icons/Email.png';

/// @func: Footer
/// @desc: Returns the footer for the website
const Footer = () => {
    return (
        <div className="col footer">
            <div className="row py-5"></div>
            <div className="row text-center justify-content-center">
                <h2 className="text-light">Stay along for the ride</h2>
            </div>
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand bg-transparent justify-content-center">
                        <ul className="navbar-nav">
                            <li><a href="mailto: johnedquinn@gmail.com" rel="noopener noreferrer" target="_blank"><img className="footer-icon" alt="Email Icon" src={Email}/></a></li>
                            <li><a href="https://www.linkedin.com/in/johnedquinn/" rel="noopener noreferrer" target="_blank"><img className="footer-icon" alt="LinkedIn Icon" src={LinkedIn}/></a></li>
                            <li><a href="https://github.com/johnedquinn" rel="noopener noreferrer" target="_blank"><img className="footer-icon" alt="Git Icon" src={Github}/></a></li>
							<li><a href="https://gitlab.com/johnedquinn" rel="noopener noreferrer" target="_blank"><img className="footer-icon" alt="GitLab Icon" src={Gitlab}/></a></li>
							<li><a href="https://drive.google.com/file/d/1rvOeW0j6wid5laUgBwpAPukAx5KJy5hN/view?usp=sharing" rel="noopener noreferrer" target="_blank"><img className="footer-icon" alt="Resume Icon" src={Resume}/></a></li>
                            <li><a href="https://open.spotify.com/user/johnedquinn" rel="noopener noreferrer" target="_blank"><img className="footer-icon" alt="Spotify Icon" src={Spotify}/></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="row py-4"></div>
                <p className="text-center"><small className="text-center text-white">&copy; 2021 John Ed Quinn</small></p>
            <div className="row py-2"></div>
        </div>
    );
}

/* EXPORTS */
export default Footer;
