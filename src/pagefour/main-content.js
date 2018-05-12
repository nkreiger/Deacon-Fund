import React, { Component } from 'react';

//general components
import Navbar from '../navbarG/navbar';
// components
import ContactSectionOne from './main-content/sectionone/sectionone';


class ContactPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ContactSectionOne />
            </div>
        );
    }
}

export default ContactPage;