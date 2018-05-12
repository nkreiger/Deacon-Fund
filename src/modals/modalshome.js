import React, { Component } from "react";
import "./modals.css";

// assets
import fundApplication from "../assets/fund-application.pdf";
import emptyProfile from "../assets/emptyProfile.png";

class Modals extends Component {
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="fundApplyModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLongTitle">
                  Student Fund Application
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                  Congratulations on starting your journey towards being part of
                  Wake Forest's Premier Investment Club!
                </p>
                <p>
                  {" "}
                  Download, and fill out the application below before the
                  current deadline to have your application considered <br />(late
                  applicants will not be considered){" "}
                </p>

                <p>Current Deadline: </p>
                <p>
                  <b>April 21st, 2017</b>
                </p>
              </div>
              <div />
              <div className="modal-footer">
                <div className="downloadStyle">
                  <a href={fundApplication} className="downloadApp" download>
                    {" "}
                    Download{" "}
                  </a>
                </div>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade executive-modal-lg"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div id="carouselTopLevel" className="carousel Default">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="carouselImageOdd"
                      src={emptyProfile}
                      alt="First slide"
                    />
                    <div className="carousel-caption d-md-block">
                      <h5> CE0/President</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="carouselImageEven"
                      src={emptyProfile}
                      alt="Second slide"
                    />
                    <div className="carousel-caption d-md-block">
                      <h5> COO/Operations</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="carouselImageOdd"
                      src={emptyProfile}
                      alt="Third slide"
                    />
                    <div className="carousel-caption d-md-block">
                      <h5> CIO/Investments</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="carouselImageEven"
                      src={emptyProfile}
                      alt="Fourth slide"
                    />
                    <div className="carousel-caption d-md-block">
                      <h5> IC/Investment Committee </h5>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselTopLevel"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselTopLevel"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <div className="carouselTitle">
                <h4 className="text-center">Executive Board</h4>
              </div>
              <br />
              <div id="carouselMidLevel" className="carousel Default">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="carouselImageOdd"
                      src={emptyProfile}
                      alt="First slide"
                    />
                    <div className="carousel-caption d-md-block">
                      <h5> PM/Financials</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="carouselImageEven"
                      src={emptyProfile}
                      alt="Second slide"
                    />
                    <div className="carousel-caption d-md-block">
                      <h5> PM/Healthcare</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="carouselImageOdd"
                      src={emptyProfile}
                      alt="Third slide"
                    />
                    <div className="carousel-caption d-md-block">
                      <h5> PM/TMT</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="carouselImageEven"
                      src={emptyProfile}
                      alt="Fourth slide"
                    />
                    <div className="carousel-caption d-md-block">
                      <h5> PM/Energy</h5>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselMidLevel"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselMidLevel"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <div className="carouselTitle">
                <h4 className="text-center">Portfolio Managers</h4>
              </div>
              <br />
              <div id="carouselBottomLevel" className="carousel Default">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="carouselImageOdd"
                      src={emptyProfile}
                      alt="First slide"
                    />
                    <div className="carousel-caption d-md-block">
                      <h5> Analyst/Financials</h5>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      className="carouselImageEven"
                      src={emptyProfile}
                      alt="Second slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="carouselImageOdd"
                      src={emptyProfile}
                      alt="Third slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="carouselImageEven"
                      src={emptyProfile}
                      alt="Fourth slide"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselBottomLevel"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselBottomLevel"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <div className="carouselTitle">
                <h4 className="text-center">Analysts</h4>
              </div>
              <br />
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade portfolio-modal-lg"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <iframe
                className="portfolioModel"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6ZshCQEe_N56P4ZK0YW3TI4GwBfbLW_3UCpAKNve1TivnOC51EQEKjKvQ26HV4Jr22IqV_7PwGcix/pubhtml?gid=1490466842&amp;single=true&amp;widget=true&amp;headers=false"
              />
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modals;
