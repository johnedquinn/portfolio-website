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
					<h1 className="card-title text-dark">Who I Am</h1>
				</div>
				<div className="row py-3 mobile-center">
					<div className="col col-3 text-center mobile-empty">
						<h1 className="card-title text-dark">Who I Am</h1>
					</div>
					<div className="col col-9 mobile-center">
						<p className="text-dark">I am a current Junior, intending on graduating in May 2021.</p>
						<p className="text-dark">My passion is building beautiful things from makefiles
							to compilers to servers or even mobile applications. In university, I'm learning the
							complexity behind computers and
							computer networks. On my own, however, is where I do a
							large portion of my learning. I'm currently learning how to quickly make apps for
							future hackathons using Google's SDK, Flutter. I'm building a compiler proper in my
							Compilers and Language Design course, and I'm on the executive board for CS For Good, a
							club that organizes several
							non-profit projects to serve the needs of the community.</p>
						<p className="text-dark">When I'm not teaching myself how to become a better programmer, you
							can usually find me at the climbing wall or in the weight-room. Or maybe
							on South Quad with a couple of friends. Maybe hammocking, perhaps slacklining, or even
							messing with some soccer, football,
							or volleyball - really just anything of that nature.</p>
					</div>
				</div>
			</div>

		</Fragment>
	);
}

/* EXPORTS */
export default AboutMeSection;