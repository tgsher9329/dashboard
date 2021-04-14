import React from 'react'
import { Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import useData from '../util/dataService'


export default function Instagram() {
    const dataService = useData()
    const perPostData = dataService.getMediaData().instagram.perPost
    const monthlyData = dataService.getMediaData().instagram.monthly
    const monthlyLikes = dataService.getMediaData().instagram.likes

    const monthlyPercent = Math.round((monthlyLikes.current/monthlyLikes.past)*100)
    const perPostPercent = Math.round((perPostData.current/perPostData.goal)*100)

    return (
        <Row className="d-flex justify-content-around text-center col-12 m-3">
            <div className="col-12">
                <div className="card-social card">
                    <div className="border-bottom card-body">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-auto">
                                <i className="fa fa-facebook text-primary f-36"></i>
                            </div>
                            <div className="col text-right">
                                <h3>Instagram Engagement</h3>
                                <h5 className="text-c-green mb-0">{ monthlyLikes.current > monthlyLikes.past ? (<FontAwesomeIcon style={{color: "rgb(0, 255, 0)"}} icon={faArrowUp} />) : (<FontAwesomeIcon style={{color: "rgb(255, 0, 0)"}} icon={ faArrowDown} />)}{monthlyPercent}% 
                                <span className="text-muted">Total likes compared to last month</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row align-items-center justify-content-center card-active">
                            <div className="col-6">
                                <h6 className="text-center m-b-10">
                                    <span className="text-muted m-r-5">Target Engagement per Last Post: {perPostData.goal}</span>
                                    {/* {get} */}
                                </h6>
                                <div className="progress m-t-30">
                                    <div className="progress-bar" role="progressbar" style={{width: `${perPostPercent}%`}} aria-valuenow={perPostData.current} aria-valuemin="0" aria-valuemax={perPostData.goal}>
                                    {/* progress bar to show difference from yesterday, 0 being no sells, 100% being the sells from yesterday */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <h6 className="text-center m-b-10">
                                    <span className="text-muted m-r-5">This Month's Engagement:   </span>
                                    {monthlyData.current}
                                </h6>
                                <div className="progress m-t-30">
                                    <div className="progress-bar" role="progressbar" style={{width: `${monthlyPercent}%`}} aria-valuenow={monthlyData.current} aria-valuemin="0" aria-valuemax={monthlyData.goal}>
                                    {/* progress bar to show difference from yesterday, 0 being no sells, 100% being the sells from yesterday */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </Row>
    )
}
