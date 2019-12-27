/// @file:      HomePage.js
/// @author:    John Ed Quinn
// @desc:       Pieces together the Home Page for the website using smaller components

/* IMPORTS */
import React, { Fragment } from 'react';
import HomeHeader from '../layout/HomeHeader';
import Footer from '../layout/Footer';
import HomeContent from '../layout/HomeContent';
import AboutMeSection from '../layout/AboutMeSection';
import WantToDoSection from '../layout/WantToDoSection';

/* NAVBAR */
const HomePage = () => {
    return (
        <Fragment>
            <HomeHeader/>
            <AboutMeSection/>
            <WantToDoSection/>
            <HomeContent/>
            <Footer/>
        </Fragment>
    );
}

/* EXPORTS */
export default HomePage;