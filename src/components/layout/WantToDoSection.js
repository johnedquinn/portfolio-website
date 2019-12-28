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
						<p className="text-dark">I am ecstatic to graduate university and absorb more information in the software industry. I hope to 
						continue my pursuit of knowledge in new, uncharted territories and to push others to do the same.</p>
						<p className="text-dark">The technologies I would like to work with include machine learning, full-stack development,
							systems programming, and compilers development (among many other things).</p>
					</div>
				</div>
				<div class="row py-4"></div>
			</div>

		</Fragment>
	);
}

/* EXPORTS */
export default WantToDoSection;