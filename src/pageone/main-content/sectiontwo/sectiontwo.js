import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./sectiontwo.css";
import leaders from "../../../assets/leaders.jpg";
import donate from "../../../assets/donate.jpg";
import portfolio from "../../../assets/portfolio.jpg";

class HomeSectionTwo extends Component {
  render() {
    return (
      <div>
        <div className="sectionTwo">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="card small">
                <img
                  className="card-img-top img-fluid homeImgMobile"
                  alt="Card image cap"
                  src={leaders}
                />
                <div className="card-block">
                  <h4 className="card-title text-center">Executive Leaders</h4>
                  <button
                    type="button"
                    className="btn btn-primary homeBtnCenter"
                    data-toggle="modal"
                    data-target=".executive-modal-lg"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="card small">
                <img
                  className="card-img-top img-fluid homeImgMobile"
                  src={donate}
                  alt="Card image cap"
                />
                <div className="card-block">
                  <h4 className="card-title text-center"> Donate </h4>

                  <Link to="/donate" className="btn btn-primary homeBtnCenter">
                    {" "}
                    Learn More{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="card small">
                <img
                  className="card-img-top img-fluid homeImgMobile"
                  src={portfolio}
                  alt="Card image cap"
                />
                <div className="card-block">
                  <h4 className="card-title text-center"> Portfolio </h4>
                  <button
                    type="button"
                    className="btn btn-primary homeBtnCenter"
                    data-toggle="modal"
                    data-target=".portfolio-modal-lg"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSectionTwo;
