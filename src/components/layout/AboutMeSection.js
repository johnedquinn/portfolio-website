/// @file:      HomeContent.js
/// @author:    John Ed Quinn
// @desc:       Content for Home Page

/* IMPORTS */
import React, { Fragment } from 'react';

/* NAVBAR */
const AboutMeSection = () => {
	return (
		<Fragment>
			<div className="container">
			<div className="row py-5"></div>
				<div className="text-center desk-empty">
					<h1 className="card-title text-dark">About</h1>
				</div>
				<div className="row py-3 mobile-center">
					<div className="col col-2 text-center mobile-empty">
						<h1 className="card-title text-dark">About</h1>
					</div>
					<div className="col col-10 mobile-center">
						<p className="text-dark">My passion is building beautiful things from makefiles
							to compilers to servers or even mobile applications. I learned about algorithms, compilers, networks, and more in school, but I do the majority of my learning on my own.</p>
						<p className="text-dark">My personal hobbies include soccer, boxing, running, and reading.</p>
					</div>
				</div>
			</div>

		</Fragment>
	);
}

/* EXPORTS */
export default AboutMeSection;
