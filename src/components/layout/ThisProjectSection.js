/// @file:      ThisProjectSection.js
/// @author:    John Ed Quinn
/// @desc:      Shows the current project information

/* IMPORTS */
import React, { Fragment } from 'react';
import GitLab_Favicon from '../img/GitLab_Favicon.png';

/// @func: ThisProjectSection
/// @desc: N/A
const ThisProjectSection = () => {
	return (
		<Fragment>
			<div>
				<div className="container">
					<div className="row py-5"></div>
					<div className="col">
						<h1 className="text-center text-dark">This Project</h1>
						<div className="row py-3"></div>
						<div className="row py-3 mobile-center">
							<div className="col col-4 text-center mobile-empty">
                                <img className="project-image" src="https://assets.gitlab-static.net/uploads/-/system/project/avatar/15991469/BG.jpeg?width=40"
                                    alt="GitLab Project"></img>
							</div>
							<div className="col col-7 mobile-center">
								<h3 className="card-title text-dark"><a className="text-dark" rel="noopener noreferrer" target="_blank" href="https://gitlab.com/johnedquinn/portfolio-website">Portfolio Website</a> <img style={{maxHeight: '3rem', maxWidth: '1.5rem'}} src={GitLab_Favicon}
                                    alt="GitLab Project"></img></h3>
                                <h6 className="card-text"><span className="badge badge-dark">GitLab Project</span> <span className="badge badge-dark">React | HTML | CSS | JS</span></h6>
								<p className="text-dark">This website uses NodeJS, React, HTML, CSS, JS, and Bootstrap to present to you the content that you are viewing at this very moment. The original website ran on a server (see DiscreetOctupus below), but was transferred to the current framework as part of a spur of curiosity mixed with freshly brewed coffee. Feel free to access the source code by clicking on the title above.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

/* EXPORTS */
export default ThisProjectSection;