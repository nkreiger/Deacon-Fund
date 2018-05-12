import React, { Component } from 'react';
import './footer.css';

import studentFundLogo from '../assets/studentFundLogo.png';

class Footer extends Component {
    render() {
        return (
            <footer className="footer bg-dark">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-3">
                            <img className="img-fluid footerImg" src={studentFundLogo}></img>
                        </div>
                        <div className="col-sm-12 col-md-6 socialWrapper">
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-sm-2">
                                    <i className="fa fa-facebook-square fa-3x" aria-hidden="true"></i>
                                </div>
                                <div className="col-sm-2">
                                    <i className="fa fa-google-plus-square fa-3x" aria-hidden="true"></i>
                                </div>
                                <div className="col-sm-2">
                                    <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
                                </div>
                                <div className="col-3"></div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-3 d-flex align-items-center textCenter">
                            <div className="footerInner">
                                <i className="fa fa-copyright fa-1x" aria-hidden="true"></i> 
                                <span className="copyright"> {'\u00A9'} WFU Student Fund 2017</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;