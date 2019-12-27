/// @file:      HomeHeader.js
/// @author:    John Ed Quinn
// @desc:       Navigation Bar

/* IMPORTS */
import React from 'react';
import NavBar from './NavBar';

/* NAVBAR */
const ContactHeader = () => {
    return (
        <header class="header contact-header">

        <NavBar/>

		<div class="container">
			<div class="thoughtsDescription">
				<h1 class="text-dark">Reach Out</h1>
				<p class="text-dark">I'd love to hear some feedback.</p>
				<p class="text-dark"><small>johnedquinn@gmail.com</small></p>
			</div>
		</div>



	</header>

    );
}

/* EXPORTS */
export default ContactHeader;