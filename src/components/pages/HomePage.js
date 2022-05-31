/// @file:      HomePage.js
/// @author:    John Ed Quinn
/// @desc:       Pieces together the Home Page for the website using smaller components

/* IMPORTS */
import React, { Fragment } from 'react';
import HomeHeader from '../layout/HomeHeader';
import Footer from '../layout/Footer';
import AboutMeSection from '../layout/AboutMeSection';
import TimelineSection from '../layout/TimelineSection';
import HomeBreakSection from '../layout/HomeBreakSection';

/* NAVBAR */
const HomePage = () => {
    return (
        <Fragment>
            <HomeHeader/>
            <AboutMeSection/>
            <HomeBreakSection/>
            <Footer/>
                    <iframe className="floatingBottomRight" src="https://open.spotify.com/embed/track/3VHFkxbekZQF7xLRd7KjgL?utm_source=generator" width="50%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </Fragment>
    );
}

/* EXPORTS */
export default HomePage;
