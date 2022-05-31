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
        </Fragment>
    );
}

/* EXPORTS */
export default HomePage;
