import React, { Component } from 'react';
import './sectiontwo.css';


class DonateSectionTwo extends Component {
    render() {
        return (
            <div>
                <div className="donateTwo">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 donateCenter">
                            <i className="fa fa-university fa-4x" aria-hidden="true"></i>
                            <h4 className="text-center">Non-Profit</h4>
                            <hr className="donateSeparator"></hr>
                            <p className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 donateCenter">
                            <i className="fa fa-address-book fa-4x" aria-hidden="true"></i>
                            <h4 className="text-center">Membership</h4>
                            <hr className="donateSeparator"></hr>
                            <p className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 donateCenter">
                            <i className="fa fa-key fa-4x" aria-hidden="true"></i>
                            <h4 className="text-center">Opportunities</h4>
                            <hr className="donateSeparator"></hr>
                            <p className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="thanksText">
                                <h5 className="text-center">Thank You for your Donation!</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-sm-4">
                            <button type="button" className="btn btn-success donateButton" onClick={()=>{ alert('Donations are not set-up yet although we appreciate the enthusiasm! Check back next week to help us out! Inquiries, contact: noahkreiger@gmail.com'); }}>Donate</button>
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DonateSectionTwo;