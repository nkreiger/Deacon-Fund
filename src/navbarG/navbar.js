import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import studentFundBanner from '../assets/studentFundBanner.png';
import farrellHall from '../assets/farrellHall.png';


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-faded opacity">
                <div className="navbar-brand imgSize"><img className="img-fluid homeImage" src={studentFundBanner}></img> </div>
                <button className="navbar-toggler navbar-toggler-right navBtnCenter" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav navList">
                        <li className="nav-item">
                            <Link to='/' className="nav-link hvr-underline-from-center">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link hvr-underline-from-center">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/donate' className="nav-link hvr-underline-from-center">Donate</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link hvr-underline-from-center">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

//            <div className="homeImgStylesBlock">
//                 <img className="img-fluid" src={farrellHall}></img>
//                 <div className="homeImgQuote">
//                     <h3><q><b>Don't be afraid to give up the good to go for the great.</b></q><br></br>-- John D. Rockefeller</h3>
//                 </div>
//             </div>

export default Navbar;