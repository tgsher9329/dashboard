import React from 'react'
import { Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import '../css/instagram.css'
import useData from '../util/dataService'


export default function Instagram() {
    const dataService = useData()
    const perPostData = dataService.getMediaData().instagram.perPost
    const monthlyData = dataService.getMediaData().instagram.monthly
    const monthlyLikes = dataService.getMediaData().instagram.likes

    const monthlyPercent = Math.round((monthlyLikes.current/monthlyLikes.past)*100)
    const perPostPercent = Math.round((perPostData.current/perPostData.goal)*100)

    return (
        <Col sm={12} xl={6} className="my-2">
            <div className="card bg-dark">
                <div className="border-bottom card-body">
                    <div className="row align-items-center justify-content-center">
                        <div className="col text-right textPrimary">
                            <h3>Instagram Engagement</h3>
                            <h5 className=" mb-0">{ monthlyLikes.current > monthlyLikes.past ? (<FontAwesomeIcon style={{color: "rgb(0, 255, 0)"}} icon={faArrowUp} />) : (<FontAwesomeIcon style={{color: "rgb(255, 0, 0)"}} icon={ faArrowDown} />)}{monthlyPercent}%  
                            <span className="textSecondary">     Total likes compared to last month</span>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-6">
                            <h6 className="text-center">
                                <span className="textSecondary">Target Engagement per Last Post: {perPostData.goal}</span>
                                {/* {get} */}
                            </h6>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: `${perPostPercent}%`}} aria-valuenow={perPostData.current} aria-valuemin="0" aria-valuemax={perPostData.goal}>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <h6 className="text-center textSecondary">
                                <span >This Month's Engagement:   </span>
                                {monthlyData.current}
                            </h6>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: `${monthlyPercent}%`}} aria-valuenow={monthlyData.current} aria-valuemin="0" aria-valuemax={monthlyData.goal}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}
