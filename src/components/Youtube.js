import React from 'react'
import { Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import useData from '../util/dataService'
import '../css/youtube.css'

export default function Youtube() {
    const dataService = useData()
    const perVideoData = dataService.getMediaData().youtube.perVideo
    const monthlyData = dataService.getMediaData().youtube.monthly
    const monthlyLikes = dataService.getMediaData().youtube.likes

    const monthlyPercent = Math.round((monthlyLikes.current/monthlyLikes.past)*100)
    const perVideoPercent = Math.round((perVideoData.current/perVideoData.goal)*100)

    return (
        <Col sm={12} xl={6}>
            <div className="card col-12 col-xl-6 bg-dark">
                <div className="border-bottom card-body">
                    <div className="row align-items-center justify-content-center">
                        <div className="col text-right">
                            <h3 className="textPrimary">YouTube Engagement</h3>
                            <h5 className="textSecondary">{ monthlyLikes.current > monthlyLikes.past ? (<FontAwesomeIcon style={{color: "rgb(0, 255, 0)"}} icon={faArrowUp} />) : (<FontAwesomeIcon style={{color: "rgb(255, 0, 0)"}} icon={ faArrowDown} />)}{monthlyPercent}%  
                            <span className="textSecondary"> Total views from last month</span>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-6">
                            <h6 className="text-center textSecondary">
                                <span className="textSecondary m-r-5">Target views per video:   </span>
                                {monthlyData.goal}
                            </h6>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: `${perVideoPercent}%`}} aria-valuenow={perVideoData.current} aria-valuemin="0" aria-valuemax={perVideoData.goal}>
                                {/* progress bar to show difference from yesterday, 0 being no sells, 100% being the sells from yesterday */}
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <h6 className="text-center textSecondary">
                                <span className="textSecondary">Monthly Views:   </span>
                                {monthlyData.current}
                            </h6>
                            <div className="progress ">
                                <div className="progress-bar" role="progressbar" style={{width: "10%"}} aria-valuenow={monthlyData.current} aria-valuemin="0" aria-valuemax={monthlyData.goal}>
                                {/* progress bar to show difference from yesterday, 0 being no sells, 100% being the sells from yesterday */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}
