import React, { Component } from 'react';
import './sectiontwo.css';


class AboutSectionTwo extends Component {
    render() {
        return (
            <div>
                <div className="aboutTwo">
                    <div className="row aboutStructure">
                        <div className="col-sm-12">
                            <div className="aboutHeaderVersionTwo">
                                <h1 className="text-center"> Components: </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row aboutStructure">
                        <div className="col-sm-6">
                            <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#commitmentModal"> Commitment </button>
                        </div>
                        <div className="col-sm-6">
                            <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#recruitmentModal"> Recruitment </button>
                        </div>
                    </div>

                    <div className="row aboutStructure">
                        <div className="col-sm-6">
                            <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#goalsModal"> Goals </button>
                        </div>
                        <div className="col-sm-6">
                            <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#alumniModal"> Alumni Network</button>
                        </div>
                    </div>

                    <div className="row aboutStructure">
                        <div className="col-sm-6">
                            <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#compositionModal"> Fund Composition </button>
                        </div>
                        <div className="col-sm-6">
                            <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#rulesModal"> Rules</button>
                        </div>
                    </div>

                    <div className="row aboutStructure">
                        <div className="col-sm-6">
                            <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#organizationModal"> Fund Organization</button>
                        </div>
                        <div className="col-sm-6">
                            <button type="button" className="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#positionModal"> Positions </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default AboutSectionTwo;