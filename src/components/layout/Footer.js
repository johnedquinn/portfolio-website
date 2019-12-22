/// @file:      Footer.js
/// @author:    John Ed Quinn
// @desc:       Footer

/* IMPORTS */
import React from 'react';
import { Link } from 'react-router-dom';

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
                            <li class="nav-item px-2">
                                <a class="nav-link text-light" rel="noopener noreferrer" target="_blank"
                                    href="https://www.linkedin.com/in/johnedquinn/">LinkedIn</a>
                            </li>
                            <li class="nav-item px-2">
                                <a class="nav-link text-light" rel="noopener noreferrer" target="_blank"
                                    href="https://gitlab.com/johnedquinn">GitLab</a>
                            </li>
                            <li class="nav-item px-2">
                                <a class="nav-link text-light" rel="noopener noreferrer" target="_blank"
                                    href="johnedquinn@gmail.com">Email</a>
                            </li>
                            <li class="nav-item px-2">
                                <a class="nav-link text-light" rel="noopener noreferrer" target="_blank"
                                    href="https://www.instagram.com/johnedquinn/">Instagram</a>
                            </li>
                            <li class="nav-item px-2">
                                <a class="nav-link text-light" rel="noopener noreferrer" target="_blank"
                                    href="https://www.snapchat.com/add/johnquinnn">Snapchat</a>
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