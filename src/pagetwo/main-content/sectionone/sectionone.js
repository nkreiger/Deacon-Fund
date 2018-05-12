import React, { Component } from 'react';
import './sectionone.css';


class AboutSectionOne extends Component {
    render() {
        return (
        <div>
            <div className="aboutOne" id="one">
            <div className="row">
              <div className="col-sm-12">
                <div className="aboutHeader">
                  <h1 className="text-center">Executive Summary</h1>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="execText">
                  <p>
                    The Student Fund serves as the premiere investment society at Wake Forest University. Open to students of all disciplines, the Fund seeks to engage members on both educational and experiential levels providing a unique opportunity for members to build their resume and expand their knowledge of the financial services industry at large. Currently, the Fund operates as a paper portfolio with a value investing philosophy, wherein each transaction is preempted by a professional presentation from a student analyst. 
                    All members, once accepted, join the Fund as analysts. Analysts are assigned to an industry, under the supervision of a portfolio manager, and are expected to monitor and evaluate their holdings regularly, in addition to updating other members at weekly meetings. Twice annually, analysts are expected to give a presentation suggesting to buy or a sell a holding, fully summarizing their research, valuations, and mentality. The executive committee members, who serve as the leadership of the fund, are present for every presentation, ultimately voting to either accept or reject the proposal. 
                    Analysts will receive feedback regularly from peers, portfolio managers, and officer members of the Fund. Supplementing these experiences, the Fund hosts alumni, high net worth individuals, and representatives from major firms nationwide as guest speakers and
                    recruiters. All members of the fund are welcome and encouraged to attend all networking functions and take advantage of the host of opportunities afforded to them. 
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="aboutHeader">
                  <h2 className="text-center">Mission Statement</h2>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="execText">
                  <p>
                    The Student Fund serves to provide members with a superior exposure and experience in dealing with financial markets and equities in order to establish base competency in equity analysis and financial services, prior to junior interviews. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
    }
}

export default AboutSectionOne;