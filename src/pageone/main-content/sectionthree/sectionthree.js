import React, { Component } from 'react';
import './sectionthree.css';


class HomeSectionThree extends Component {
    render() {
        return (
            <div>
            <div className="sectionThree">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-6">
                        <h2 className="text-center applyHead">Want to join Wake Forest's Premier Investment Club?</h2>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col-sm-12 applyPadding">
                        <button type="button" className="btn btn-lg btn-outline-success btnCenter" data-toggle="modal" data-target="#fundApplyModal">Apply</button>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}


export default HomeSectionThree;