/// @file:      CoursesPage.js
/// @author:    John Ed Quinn
/// @desc:      Pieces together the Courses Page for the website by using smaller components

/* IMPORTS */
import React, { Fragment } from 'react';
import Footer from '../layout/Footer';
import CoursesHeader from '../layout/CoursesHeader';

/* NAVBAR */
const CoursesPage = () => {
    return (
        <Fragment>
            <CoursesHeader/>
            <Footer/>
        </Fragment>
    );
}

/* EXPORTS */
export default CoursesPage;