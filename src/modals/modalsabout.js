import React, { Component } from 'react';
import './modals.css';



class ModalsAbout extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="commitmentModal" tabIndex="-1" role="dialog" aria-labelledby="commitmentModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title modalGeneralTitle" id="exampleModalLongTitle">Commitment to the Fund</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                The Student Fund aims to be the primary extracurricular activity of its members, and therefore the commitment is substantial but not overwhelming. The Fund at large meets once every other week, scheduled when most convenient for the majority of the members. Individual portfolios and the Executive Committee meet weekly, scheduled independently of the Fund.
                                Additionally, analysts and senior analysts write weekly updates (examples provided) that are complied and shared with the entire fund. At the end of the term, each analyst pitches an action (buy or sell, no options) to the Investment Committee for an equity that they have been following at length. Analysts select equities on their own volition with guidance from the portfolio managers. Senior analysts are the more experienced members of each team who have successfully completed a pitch and are therefore in a position to provide guidance to newer members. Portfolio mangers oversee a team of analysts and senior analysts within a particular industry.
                                All fund roles are defined in more detail below.
                                Attendance and participation is compulsory, and members who are frequently absent are dismissed from the Fund after a warning. Members should expect to spend about one hour a week on the fund, and substantially more when it comes time to pitch. Meanwhile, portfolio managers should expect to spend roughly double that. Time commitment for Executive positions is roughly five hours a week.
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="recruitmentModal" tabIndex="-1" role="dialog" aria-labelledby="recruitmentModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title modalGeneralTitle" id="exampleModalLongTitle">Recruitment and Fund Size</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                The Fund accepts applications for new members at the beginning of each semester in order to replace graduating and leaving members. The Fund aims to maintain a membership of approximately 40 active members. The application process consists of a strongly recommended informational session to generate interest and provide information about the fund, followed by an application period where interested students will be asked to submit both a short application as well as a resume. At the end of the application period, all members of the executive team will review the applications and select candidates to interview. Finally, interviews will be conducted, and acceptance decisions will be made by a majority vote of the executive team.
                                The emphasis of the application and interview process will be on demonstrated and expressed interest in investing. While knowledge and experience is a plus, the goal of the fund is to educate and develop its member’s skills, so applicants will not be penalized for a lack of in depth investing knowledge.
                                Membership is open to students of any major. Additionally, students of any year are welcome to apply.
                                During the application process, the executive team is required to make clear any conflicts of interest with regards to applicants whether it is personal or organizational. If such a conflict of interest exists, that member must recuse him or herself from the interview and admission voting on that applicant.
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="goalsModal" tabIndex="-1" role="dialog" aria-labelledby="goalsModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title modalGeneralTitle" id="exampleModalLongTitle">Goals</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                The Student Fund operates on two parallel levels: educational and experiential.
                                The primary goal of the Student Fund is to expose members to the basic language and skills needed to be competitive in financial services prior to Junior year interview season. This is accomplished through portfolio discussion, networking events, and lessons (such as valuation methodologies) provided by the Fund for members. These skills are reinforced through weekly participation in equity analysis.
                                The secondary goal of the Student Fund is to provide basic experience in the above, through the bi-annual pitch and bi-monthly fund-wide meetings.
                                The financial goal of the Fund is to outperform the market, as measured by the S&P 500.
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="alumniModal" tabIndex="-1" role="dialog" aria-labelledby="alumniModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title modalGeneralTitle" id="exampleModalLongTitle">Alumni Network</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Having been an established organization at Wake Forest, the Student Fund’s alumni have went on to pursue exemplary jobs in the world of finance. Alumni that have been a part of the Student Fund (dating back to 2010) have been reached out to and a database has been compiled of their names, contact information, current place of work, and current positional title. This spreadsheet will then be distributed to members of the Fund and serve as an resource for networking.
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="compositionModal" tabIndex="-1" role="dialog" aria-labelledby="compositionModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title modalGeneralTitle" id="exampleModalLongTitle">Fund Composition</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>
                                    While the Student Fund deals exclusively in equity investments, diversity is a cornerstone of proper investment. Therefore, the Fund is divided into several portfolios consisting of different sectors of equity investments
                                </p>
                                <ul>
                                    <li>Consumer Discretionary</li>
                                    <li>Consumer Staple</li>
                                    <li>Energy</li>
                                    <li>Financial</li>
                                    <li>Healthcare</li>
                                    <li>Industrial</li>
                                    <li>Technology, Media, and Telecommunications</li>
                                </ul>
                                <p>
                                    Equity investments will be placed in their respective sectors based on the Investment Committee’s interpretation of the company’s core business, as well as its classNameification in major investment databases such as Bloomberg Terminal.
                                </p>
                                <h6>
                                    All equity investments in companies must meet the following requirements in order for them to be considered by the Investment Committee for inclusion in the Fund:
                                </h6>
                                <ul>
                                    <li>It must have a market capitalization of no less than $100 million </li>
                                    <li> It must be traded on a major exchange such as the NASDAQ or NYSE (cannot be an OTC) </li>
                                    <li> If traded in international markets, it must be included in a major index comparable to the Standard and Poor’s 500 such as the Nikkei 225 or FTSE 100 </li>
                                    <li> The company must have been in business for a minimum of two years in order to show market relevance </li>
                                    <li> It cannot be an Initial Public Offering (IPO) unless approved by both the Chief Executive Officer and Chief Risk Officer </li>
                                    <li> It must have reported a positive net income for a minimum of one fiscal year </li>
                                </ul>
                                <h6>
                                    Leverage, Short Selling, and Derivatives:
                                 </h6>
                                <ul>
                                    <li>Leverage through debt financing may not be used. </li>
                                    <li>Short selling equity investments may only be considered after approval of both the Chief Executive Officer and Chief Risk Officer, and all short sales must be covered by either the end of the academic semester as defined by the last day of final examinations, or three months, which ever is shorter. </li>
                                    <li>Financial derivative investments may not be used. </li>
                                </ul>
                                <h6>
                                    Electronically Traded Funds (ETFs) and Non-Equity Investments
                may be considered for investment, but must have met the following criteria: </h6>
                                <ul>
                                    <li>It has been publically traded for longer than one fiscal year by the time of consideration. </li>
                                    <li>It tracks a consistent index or product, meaning it cannot be actively managed in which the underlying securities are varied through time. </li>
                                    <li>ETFs will be placed under the separate classNameification of “Funds,” although the portfolio in which they are initially pitched by will analyze them. </li>
                                    <li>ETFs may not use leverage. </li>
                                    <li>Non-Equity Investments may only be made through the use of ETFs, may not take the form of Electronically Traded Notes (ETNs), and must be approved by both the Chief Executive Officer and Chief Risk Officer before consideration.  Non-Equity Investments will be placed under the classNameification of “Funds” and will be analyzed by the portfolio in which they are originated.  Non-Equity Investments must be able to be appropriately placed within a portfolio, and cannot track currencies, real estate, derivatives, or credit products. </li>
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="rulesModal" tabIndex="-1" role="dialog" aria-labelledby="rulesModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title modalGeneralTitle" id="exampleModalLongTitle">Rules</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                UPDATED LEGAL RULES COMING SOON AFTER MONETIZATION.
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade bd-example-modal-lg" id="organizationModal" tabIndex="-1" role="dialog" aria-labelledby="organizationModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content organizationalStructure">
                            <div className="modal-header">
                                <h5 className="modal-title modalGeneralTitle text-center" id="exampleModalLongTitle">Fund Organizational Structure</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <h3>UPDATED ORGANIZATIONAL STRUCTURE COMING SOON</h3>


                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade bd-example-modal-lg" id="positionModal" tabIndex="-1" role="dialog" aria-labelledby="positionModal" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content organizationalStructure">
                            <div className="modal-header">
                                <h5 className="modal-title modalGeneralTitle text-center" id="exampleModalLongTitle">Fund Positions</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <b>Analysts:</b>
                                <br></br>
                                Analysts are new members and are expected to pitch blue chip stocks. They are expected to follow their selections closely, as well as those in their respective portfolios. Analysts provide weekly updates to the Portfolio Managers about any news or information relative to their stock(s).
                <br></br>
                                <br></br>
                                <b>Portfolio Managers:</b>
                                <br></br>
                                Portfolio Managers oversee portfolios. They have more experience in the Fund and are better informed about the markets. They coordinate their management plans with the IC, CRO, and CIO. To gather weekly updates from their analysts, they maintain steady communication and schedule weekly meetings. Further, they relay any important information to the executive committee. Executive Committee members may assume roles as Portfolio Managers to ensure proper functionality and communication.
                <br></br>
                                <br></br>
                                <b>Executive Committee:</b>
                                <br></br>
                                <u>CEO:</u> As the head of the Student Fund, the CEO is responsible for communication with the university and oversight of the fund at large, including investment and recruitment. Furthermore, the CEO serves as the arbitrator concerning any disputes present in the Fund, in addition to the appointment of all portfolio managers and the promotion of analysts to senior analysts. Finally, as a member of the Executive Committee the CEO participates in pitch evaluation and has veto power over any potential investment. <br></br>
                                <u>CIO:</u> The Chief Investment Officer has the final say in the purchase and sale of an investment decision. Advised by the IC and CRO through Analysts and Senior Analysts, the CIO actively evaluates allocation and portfolio weighting. Further, upon hearing pitches, the CIO must evaluate the plan and holds veto power for all investments. Finally, the CIO is responsible for the management of the IC, as well as thorough communication throughout the Fund. <br></br>
                                <u>IC:</u> The Investment Committee (IC) will consist of three members, two IC members led by the CIO. This section will detail the responsibilities of the two dedicated IC members, as the CIO’s duties have been expanded on above.
                                The main responsibility of the two IC positions is to advise the CIO on investment decisions, and to vote as members of the IC in these decisions. IC members should be present to hear all analyst pitches and provide criticism and feedback to analysts. In addition, IC members are expected to stay up to date on market developments and trends, and read and consider analyst and PM updates.
                                The secondary responsibility of the IC is to lead recruitment of new analysts. IC members will generate interest in the fund, leading informational sessions and distributing applications.
                <br></br>
                                Finally, the IC serves in a “utility” role, filling in for other executive’s responsibilities and taking on unforeseen and tasks that may come up.
                <br></br>
                                <u>COO:</u> The COO is responsible for the general logistics of the Fund, including setting meeting times and compiling weekly updates. Furthermore the COO is charged with maintenance and oversight of the Student Fund network. Lastly, as a member of the Executive Committee, the COO participates in pitch evaluation.<br></br>
                                <u>CRO:</u> The CRO will be charged with consistently producing fund reports that at least outline the allocation of assets to each sector, the performance attribution of the Fund, and the characteristics of each investment.  The CRO will update the Investment Committee at least two times per semester on suggestions for reweighting of portfolios within the Fund. Additionally, the CRO will evaluate every pitch as a part of the Executive Committee. The Chief Risk Officer has veto power for any investment consideration.
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


export default ModalsAbout;