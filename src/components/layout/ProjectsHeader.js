/// @file:      ProjectsHeader.js
/// @author:    John Ed Quinn
// @desc:       Header for Projects Page

/* IMPORTS */
import React from 'react';
import NavBar from './NavBar';

/* NAVBAR */
const HomeHeader = () => {
    return (
        <header className="header work-header">
            <div className="overlay"></div>
            <NavBar/>
            <div className="container">
			    <div className="thoughtsDescription">
				    <h1 className="text-light">What I've Worked on</h1>
				    <p className="text-light">Here you can find my projects, articles, playlists -- basically anything that I
					think is worth looking at. I'd add me on Spotify if I were you, but that's just me.</p>
			    </div>
		    </div>
        </header>
    );
}

/* EXPORTS */
export default HomeHeader;