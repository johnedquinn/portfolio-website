/// @file:      MoreProjectsSection.js
/// @author:    John Ed Quinn
/// @desc:      Shows the current project information

/* IMPORTS */
import React, { Fragment } from 'react';
import GitLab_Favicon from '../img/GitLab_Favicon.png';
import Spotify_Favicon from '../img/Spotify_Favicon.png';
import Projects from '../../assets/projects.json';


const createProjectItem = (project) => {
	var icon;
	switch (project['type']) {
		case 'gitlab': icon = GitLab_Favicon; break;
		case 'spotify': icon = Spotify_Favicon; break;
		default: icon = GitLab_Favicon; break;
	}
	if (!project['valid']) return (<div></div>);
	return (
		<div class="row py-4">
			<div className="col col-4 text-center">
				<img className="project-image" src={project['imageURL']}
					alt="GitLab Project"></img>
			</div>
			<div className="col col-8">
				<h3 class="card-title text-dark"><a class="text-dark" rel="noopener noreferrer" target="_blank" href={project['link']}>{project['title']}</a>
					<img style={{ maxHeight: '3rem', maxWidth: '1.5rem', marginLeft: "10px" }} src={icon}
						alt="GitLab Project"></img>
				</h3>
				<h6 class="card-text"><span className="badge badge-dark">{project['subtitle']}</span></h6>
				<p className="text-dark">{project['description']}</p>
			</div>
		</div>
	);
}


const ProjectsColumn = () => {
	var items = Projects['projects'].map(function (project) {
		return createProjectItem(project);
	});
	return items;
}

/// @func: MoreProjectsSection
/// @desc: N/A
const MoreProjectsSection = () => {
	return (
		<Fragment>
			<div>
				<div className="container">
					<div className="row py-5"></div>
					<h1 className="text-center text-dark">More Projects</h1>
					<p class="text-dark text-center"><small class="text-muted">And <em>maybe</em> some playlists</small></p>
					<div className="row py-2"></div>
					<ProjectsColumn />
					<div className="row py-5"></div>
				</div>
			</div>
		</Fragment>
	);
}

/*
<div className="col" id="projects-column">
						<h1 className="text-center text-dark">More Projects</h1>
						<p class="text-dark text-center"><small class="text-muted">And <em>maybe</em> some playlists</small></p>
						<div className="row py-2"></div>
						<div class="row py-3">
							<div className="col col-4 text-center">
								<img className="project-image" src={Library}
									alt="GitLab Project"></img>
							</div>
							<div className="col col-7">
								<h3 class="card-title text-dark">Portfolio Website <img style={{ maxHeight: '3rem', maxWidth: '1.5rem' }} src={GitLab_Favicon}
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
*/

/* EXPORTS */
export default MoreProjectsSection;