/// @file:      HomeBreakSection.js
/// @author:    John Ed Quinn
// @desc:       Section on Home Page to ask user if they want to see projects or courses.

/* IMPORTS */
import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';

/* NAVBAR */
const HomeBreakSection = () => {
	return (
		<Fragment>
			<div className="header break-section">
				<div className="overlay"></div>
				<div className="container">
					<div class="row py-5"></div>
					<div class="col">
						<h1 class="text-white text-center">Take a Glimpse at my Work</h1>
						<p className="text-white text-center">My past work ranges from developing APIs and dynamic websites to building programming languages and web servers.</p>
						<div className="row">
							<div className="col col-3 text-center"></div>
							<div className="col col-3 text-center"><Button variant="light" href="/projects">Projects</Button></div>
							<div className="col col-3 text-center"><Button variant="light" href="/courses">Courses</Button></div>
							<div className="col col-3 text-center"></div>
						</div>
					</div>
					<div class="row py-5"></div>
				</div>
			</div>

		</Fragment>
	);
}

/* EXPORTS */
export default HomeBreakSection;