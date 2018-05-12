import React, { Component } from "react";
import "./sectionone.css";

class HomeSectionOne extends Component {
  render() {
    return (
      <div>
        <div className="sectionOne">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center">
                <u>About Us</u>
              </h1>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-6 d-flex align-items-center homeColOne">
              <div className="text-center homeVideoText">
                Wake Forest student fund is the foremost non-profit investment
                club at WFU, with over fifty members that specialize in a wide
                variety of skills. We are the only monetized investment club on
                campus, and are completely student-run. While affiliated with
                the school, we operate independently from the chartered
                organizations on campus. Therefore, the fund runs on the
                devotion of its members and investors that put forth the capital
                which allows us to build real-world experience in investments.
              </div>
            </div>
            <div className="col-sm-12 col-md-6 homeColTwo">
              <div className="embed-responsive embed-responsive-16by9 homeVideoStyle">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/9nE-f0dSGRA"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSectionOne;
