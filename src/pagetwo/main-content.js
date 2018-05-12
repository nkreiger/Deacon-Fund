import React, { Component } from 'react';

//general components
import Navbar from '../navbarG/navbar';
// components
import AboutSectionOne from './main-content/sectionone/sectionone';
import AboutSectionTwo from './main-content/sectiontwo/sectiontwo';


class AboutPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <AboutSectionOne />
                <AboutSectionTwo />
            </div>
        );
    }
}

export default AboutPage;