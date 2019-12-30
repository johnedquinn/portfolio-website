/// @file:      CoursesSection.js
/// @author:    John Ed Quinn
/// @desc:      Shows the courses section on the projects page

/* IMPORTS */
import React, { Fragment } from 'react';
import Courses from '../../assets/courses.json';

/// @func: createCourse
/// @desc: returns a course card for the projects page
const createCourse = (course) => {
	// Check if should be shown
	if (!course['valid']) return (<div></div>);

	// Return card
	return (
		<div className="py-4">
				<h3 className="card-title text-dark"><a className="text-dark" rel="noopener noreferrer" target="_blank" href={course['link']}>{course['title']}</a></h3>
				<h6 className="card-text"><span className="badge badge-dark">{course['code']}</span> <span className="badge badge-success">{course['date']}</span> <span className="badge badge-danger">{course['org']}</span></h6>
				<p className="text-dark">{course['description']}</p>
		</div>
	);
}

/// @func: CoursesColumn
/// @desc: returns the courses column
const CoursesColumn = () => {
	var items = Courses['courses'].map(function (course) {
		return createCourse(course);
	});
	return items;
}

/// @func: CoursesSection
/// @desc: Contains the Courses Section
const CoursesSection = () => {
	return (
		<Fragment>
			<div>
				<div className="container">
					<div className="row py-5"></div>
					<h1 className="text-center text-dark">Relevant Coursework</h1>
					<p className="text-dark text-center"><small className="text-muted"><em>Totally</em> not in order of preference or anything.</small></p>
					<div className="row py-2"></div>
					<CoursesColumn/>
					<div className="row py-5"></div>
				</div>
			</div>
		</Fragment>
	);
}

/* EXPORTS */
export default CoursesSection;