/// @file:      HomeContent.js
/// @author:    John Ed Quinn
// @desc:       Content for Home Page

/* IMPORTS */
import React, { Fragment } from 'react';
import GitLab_Favicon from '../img/GitLab_Favicon.png';

/* NAVBAR */
const ProjectsContent = () => {
    return (
        <Fragment>
            <div class="col bg-dark">
                <div class="row py-5"></div>
                <h1 class="text-light text-center">This Project</h1>
                <div class="row py-4">
                    <div class="col-1"></div>
                    <div class="col-10">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title text-dark"><a class="text-dark" rel="noopener noreferrer" target="_blank"
                                    href="https://gitlab.com/johnedquinn/discreet-octupus">DiscreetOctupus: This Server and
								Website</a></h5>
                                <p>This server was part of the <a
                                    href="https://www3.nd.edu/~pbui/teaching/cse.20289.sp19/project.html"
                                    rel="noopener noreferrer" target="_blank">Final Project</a> for <a
                                        href="https://www3.nd.edu/~pbui/teaching/cse.20289.sp19/" rel="noopener noreferrer"
                                        target="_blank">CSE 20289</a>. My
							partners -- <a href="https://gitlab.com/skeene" rel="noopener noreferrer"
                                        target="_blank">Stephanie Keene</a> and <a href="https://gitlab.com/emmaascolese"
                                            rel="noopener noreferrer" target="_blank">Emma Ascolese</a> -- and I were
                                tasked with creating an HTTP server
                                that supports directory listings, static files, and CGI scripts. That project, upon
							completion, was forked from its <a
                                        href="https://gitlab.com/johnedquinn/cse-20289-sp19-project" rel="noopener noreferrer"
                                        target="_blank">original GitLab project</a> to serve as a basis
                                for the
                                server that is feeding your requests right now. Minor modifications have been made (such as
                                more intense error-checking), but the basis remains the same. You can view the current
							project by clicking the title above.</p>
                            </div>
                            <div class="card-footer">
                                <img style={{maxHeight: '5rem', maxWidth: '1.5rem'}} src={GitLab_Favicon}
                                    alt="GitLab Project"></img>
                                <p class="card-text"><small class="text-muted">GitLab Project | C | Bash | HTML | JS</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-1"></div>
                </div>
                <div class="row py-5"></div>
            </div>
        </Fragment>
    );
}

/* EXPORTS */
export default ProjectsContent;