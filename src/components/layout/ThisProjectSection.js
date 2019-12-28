/// @file:      ThisProjectSection.js
/// @author:    John Ed Quinn
/// @desc:      Shows the current project information

/* IMPORTS */
import React, { Fragment } from 'react';
import GitLab_Favicon from '../img/GitLab_Favicon.png';
import Library from '../img/library.jpg'

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
						<div class="row py-3">
							<div className="col col-4 text-center">
                                <img className="project-image" src={Library}
                                    alt="GitLab Project"></img>
							</div>
							<div className="col col-7">
								<h3 class="card-title text-dark">Portfolio Website <img style={{maxHeight: '3rem', maxWidth: '1.5rem'}} src={GitLab_Favicon}
                                    alt="GitLab Project"></img></h3>
                                <h6 class="card-text"><span className="badge badge-dark">GitLab Project | C | Bash | HTML | JS</span></h6>
								<p className="text-dark">My passion is building beautiful things from makefiles
									to compilers to servers or even mobile applications. In university, I'm learning the
									complexity behind computers and
									computer networks. On my own, however, is where I do a
									large portion of my learning. I'm currently learning how to quickly make apps for
									future hackathons using Google's SDK, Flutter. I'm building a compiler proper in my
									Compilers and Language Design course, and I'm on the executive board for CS For Good, a
									club that organizes several
							non-profit projects to serve the needs of the community.</p>
							</div>
						</div>
					</div>
					<div className="row py-5"></div>
				</div>
			</div>
		</Fragment>
	);
}

/* EXPORTS */
export default ThisProjectSection;