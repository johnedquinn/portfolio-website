/// @file:      ContactHeader.js
/// @author:    John Ed Quinn
/// @desc:      Header for the contact page

/* IMPORTS */
import React from 'react';
import NavBar from './NavBar';

/// @func: ContactHeader
/// @desc: Header for the contact page
const ContactHeader = () => {
	return (
		<header className="header contact-header">
			<div className="overlay"></div>
			<NavBar/>
			<div className="container">
				<div className="thoughtsDescription">
					<h1 className="text-light">Reach Out</h1>
					<p className="text-light">I'd love to hear some feedback.</p>
					<p className="text-light"><small>johnedquinn@gmail.com</small></p>
				</div>
			</div>
		</header>
	);
}

/* EXPORTS */
export default ContactHeader;