/// @file:      HomeBreakSection.js
/// @author:    John Ed Quinn
// @desc:       Section on Home Page to ask user if they want to see projects or courses.

/* IMPORTS */
import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Github from '../icons/Github.svg';

/* NAVBAR */
const HomeBreakSection = () => {
	return (
		<Fragment>
			<div className="header break-section">
				<div className="overlay"></div>
				<div className="container">
					<div className="row py-5"></div>
					<div className="col">
						<h1 className="text-white text-center">Take a Glimpse at my Work</h1>
						<p className="text-white text-center">My past work ranges from developing APIs and dynamic websites to building programming languages and web servers.</p>
						<div className="row">
							<div className="col text-center"><a href="https://github.com/johnedquinn" rel="noopener noreferrer" target="_blank"><img className="home-icon" alt="GitHub Icon" src={Github}/></a></div>
						</div>
					</div>
					<div className="row py-5"></div>
				</div>
			</div>

		</Fragment>
	);
}

/* EXPORTS */
export default HomeBreakSection;
