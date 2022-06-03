/* IMPORTS */
import React, { Fragment } from 'react';

/* NAVBAR */
const HomeBreakSection = () => {
	return (
		<Fragment>
			<div className="container">
				<div className="row py-5"></div>
				<div className="col">
					<h1 className="text-black text-center">Or, if you're bored:</h1>
					<p className="text-black text-center">It's not absolutely terrible.</p>
					<iframe title="spotify" style={{ 'border-radius': '12px' }} src="https://open.spotify.com/embed/playlist/5mRgR5pr4ohDV0PWYifTV7?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
				</div>
				<div className="row py-5"></div>
			</div>

		</Fragment>
	);
}

/* EXPORTS */
export default HomeBreakSection;
