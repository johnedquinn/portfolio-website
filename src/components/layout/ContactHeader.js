/// @file:      HomeHeader.js
/// @author:    John Ed Quinn
// @desc:       Navigation Bar

/* IMPORTS */
import React, { Fragment } from 'react';
import Navbar from './Navbar';

/* NAVBAR */
const ContactHeader = () => {
    return (
        <header class="header contact-header">

        <Navbar/>

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