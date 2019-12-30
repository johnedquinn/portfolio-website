/// @file:      MoreProjectsSection.js
/// @author:    John Ed Quinn
/// @desc:      Shows the current project information

/* IMPORTS */
import React, { Fragment } from 'react';
import GitLab_Favicon from '../img/GitLab_Favicon.png';
import Spotify_Favicon from '../img/Spotify_Favicon.png';
import Projects from '../../assets/projects.json';

/// @func: createProjectItem
/// @desc: returns a project card for the projects page
const createProjectItem = (project) => {
	// Check if should be shown
	if (!project['valid']) return;

	// Get Icon and Alternate Text
	var icon; var alt_text;
	switch (project['type']) {
		case 'gitlab': icon = GitLab_Favicon; alt_text = 'GitLab Project'; break;
		case 'spotify': icon = Spotify_Favicon; alt_text = 'Spotify Playlist'; break;
		default: icon = GitLab_Favicon; alt_text = 'GitLab Project'; break;
	}

	// Return card
	return (
		<div className="row py-4 mobile-center">
			<div className="col col-4 text-center mobile-empty">
				<img className="project-image" src={project['imageURL']}
					alt={alt_text}></img>
			</div>
			<div className="col col-8 mobile-center">
				<h3 className="card-title text-dark"><a className="text-dark" rel="noopener noreferrer" target="_blank" href={project['link']}>{project['title']}</a>
					<img style={{ maxHeight: '3rem', maxWidth: '1.5rem', marginLeft: "10px" }} src={icon}
						alt="GitLab Project"></img>
				</h3>
				<h6 className="card-text"><span className="badge badge-dark">{alt_text}</span> <span className="badge badge-dark">{project['subtitle']}</span></h6>
				<p className="text-dark">{project['description']}</p>
			</div>
		</div>
	);
}

/// @func: ProjectsColumn
/// @desc: returns the More Projects column
const ProjectsColumn = () => {
	var items = Projects['projects'].map(function (project) {
		return createProjectItem(project);
	});
	return items;
}

/// @func: MoreProjectsSection
/// @desc: Contains the More Projects Section
const MoreProjectsSection = () => {
	return (
		<Fragment>
			<div>
				<div className="container">
					<div className="row py-5"></div>
					<h1 className="text-center text-dark">More Projects</h1>
					<p className="text-dark text-center"><small className="text-muted">And <em>maybe</em> some playlists</small></p>
					<div className="row py-2"></div>
					<ProjectsColumn/>
					<div className="row py-2"></div>
				</div>
			</div>
		</Fragment>
	);
}

/* EXPORTS */
export default MoreProjectsSection;