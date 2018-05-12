import React, { Component } from 'react';


// component general
import Navbar from '../navbarH/navbar';

// components
import HomeSectionOne from './main-content/sectionone/sectionone';
import HomeSectionTwo from './main-content/sectiontwo/sectiontwo';
import HomeSectionThree from './main-content/sectionthree/sectionthree';



class HomePage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <HomeSectionOne />
                <HomeSectionTwo />
                <HomeSectionThree />
            </div>
        );
    }
}

export default HomePage;