/// @file:      ProjectsPage.js
/// @author:    John Ed Quinn
// @desc:       Pieces together the Projects Page for the website by using smaller components

/* IMPORTS */
import React, { Fragment } from 'react';
import ProjectsHeader from '../layout/ProjectsHeader';
import Footer from '../layout/Footer';
import ProjectsContent from '../layout/ProjectsContent';

/* NAVBAR */
const ProjectsPage = () => {
    return (
        <Fragment>
            <ProjectsHeader />
            <ProjectsContent />
            <Footer />
        </Fragment>
    );
}

/* EXPORTS */
export default ProjectsPage;