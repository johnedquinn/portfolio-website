/// @file:      HomePage.js
/// @author:    John Ed Quinn
/// @desc:       Pieces together the Home Page for the website using smaller components

/* IMPORTS */
import React, { Fragment } from 'react';
import HomeHeader from '../layout/HomeHeader';
import Footer from '../layout/Footer';
import AboutMeSection from '../layout/AboutMeSection';
import HomeBreakSection from '../layout/HomeBreakSection';
import SpotifySection from '../layout/SpotifySection';

/* NAVBAR */
const HomePage = () => {
    return (
        <Fragment>
            <HomeHeader/>
            <AboutMeSection/>
            <HomeBreakSection/>
            <SpotifySection/>
            <Footer/>
        </Fragment>
    );
}

/* EXPORTS */
export default HomePage;
