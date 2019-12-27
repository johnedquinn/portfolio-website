/// @file:      HomeHeader.js
/// @author:    John Ed Quinn
// @desc:       Navigation Bar

/* IMPORTS */
import React from 'react';
import NavBar from './NavBar';

/* NAVBAR */
const ContactHeader = () => {
	return (
		<header class="header contact-header bg-dark">
			<NavBar/>
			<div class="container">
				<div class="thoughtsDescription">
					<h1 class="text-light">Reach Out</h1>
					<p class="text-light">I'd love to hear some feedback.</p>
					<p class="text-light"><small>johnedquinn@gmail.com</small></p>
				</div>
			</div>
		</header>
	);
}

/* EXPORTS */
export default ContactHeader;