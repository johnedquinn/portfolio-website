/// @file:      ContactPage.js
/// @author:    John Ed Quinn
// @desc:       Pieces together the Contact Page for the website using smaller components

/* IMPORTS */
import React, { Fragment } from 'react';
import ContactHeader from '../layout/ContactHeader';

/* NAVBAR */
const ContactPage = () => {
    return (
        <Fragment>
            <ContactHeader/>
        </Fragment>
    );
}

/* EXPORTS */
export default ContactPage;