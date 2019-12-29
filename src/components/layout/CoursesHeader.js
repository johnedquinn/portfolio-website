/// @file:      CoursesHeader.js
/// @author:    John Ed Quinn
/// @desc:      Header for the courses page

/* IMPORTS */
import React from 'react';
import NavBar from './NavBar';

/// @func: CoursesHeader
/// @desc: Header for the courses page
const CoursesHeader = () => {
	return (
		<header className="header courses-header">
			<div className="overlay"></div>
			<NavBar/>
			<div className="container">
				<div className="thoughtsDescription">
					<h1 className="text-light">Courses Taken</h1>
					<p className="text-light">This page is under construction</p>
				</div>
			</div>
		</header>
	);
}

/* EXPORTS */
export default CoursesHeader;