/// @file:      ProjectsPage.js
/// @author:    John Ed Quinn
/// @desc:       Pieces together the Projects Page for the website by using smaller components

/* IMPORTS */
import React, { Fragment } from 'react';
import ProjectsHeader from '../layout/ProjectsHeader';
import ThisProjectSection from '../layout/ThisProjectSection';
import MoreProjectsSection from '../layout/MoreProjectsSection';
import Footer from '../layout/Footer';

/* NAVBAR */
const ProjectsPage = () => {
    return (
        <Fragment>
            <ProjectsHeader/>
            <ThisProjectSection/>
            <MoreProjectsSection/>
            <Footer />
        </Fragment>
    );
}

/* EXPORTS */
export default ProjectsPage;