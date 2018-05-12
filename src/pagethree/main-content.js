import React, { Component } from 'react';

//general components
import Navbar from '../navbarG/navbar';
// components
import DonateSectionOne from './main-content/sectionone/sectionone';
import DonateSectionTwo from './main-content/sectiontwo/sectiontwo';


class DonatePage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <DonateSectionOne />
                <DonateSectionTwo />
            </div>
        );
    }
}

export default DonatePage;