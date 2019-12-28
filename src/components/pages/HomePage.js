/// @file:      HomePage.js
/// @author:    John Ed Quinn
/// @desc:       Pieces together the Home Page for the website using smaller components

/* IMPORTS */
import React, { Fragment } from 'react';
import HomeHeader from '../layout/HomeHeader';
import Footer from '../layout/Footer';
import HomeContent from '../layout/HomeContent';
import AboutMeSection from '../layout/AboutMeSection';
import WantToDoSection from '../layout/WantToDoSection';
import HistorySection from '../layout/HistorySection';
import HomeBreakSection from '../layout/HomeBreakSection';

/* NAVBAR */
const HomePage = () => {
    return (
        <Fragment>
            <HomeHeader/>
            <AboutMeSection/>
            <WantToDoSection/>
            <HomeBreakSection/>
            <HomeContent/>
            <HistorySection/>
            <Footer/>
        </Fragment>
    );
}

/* EXPORTS */
export default HomePage;