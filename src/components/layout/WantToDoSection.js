/// @file:      WantToDoSection.js
/// @author:    John Ed Quinn
// @desc:       Content for Home Page

/* IMPORTS */
import React, { Fragment } from 'react';

/* NAVBAR */
const WantToDoSection = () => {
	return (
		<Fragment>
			<div className="container">
			<div class="row py-4"></div>
				<div class="row py-3">
					<div className="col col-3 text-center">
						<h1 class="card-title text-dark">What I Want to Do</h1>
					</div>
					<div className="col col-9">
						<p className="text-dark">I am actively searching for a software engineering internship for the Summer of 2020 to
                                    further my growth as an engineer and as a person. At this current time, I
							am open to moving to <b>any</b> location, though I am more attracted to the fast-paced
							environments provided by California, Seattle, and New York.</p>
						<p className="text-dark">The technologies I would like to work with include machine learning, full-stack development,
							systems programming, and compilers development (among many other things).</p>
					</div>
				</div>
			</div>

		</Fragment>
	);
}

/* EXPORTS */
export default WantToDoSection;