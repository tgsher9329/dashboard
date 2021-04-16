import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import useData from '../util/dataService'
import '../css/sales.css'

export default function Sales() {
    const dataService = useData()
    const dailySalesData = dataService.getSalesData()
    const monthlySalesData = dataService.getSalesData()
    const yearlySalesData = dataService.getSalesData()
    const dailyPercent = Math.round(dailySalesData.daily.current/dailySalesData.daily.goal*100)
    const monthlyPercent = Math.round(monthlySalesData.monthly.current/monthlySalesData.monthly.goal*100)
    const yearlyPercent = Math.round(yearlySalesData.yearly.current/yearlySalesData.yearly.goal*100)

    return (

        // <Row className="d-flex justify-content-around col-12 mt-3 ">
        <Container fluid>
            <Row>

                {/* card 1 */}
                <Col sm={12} md={6} xl={4} className="mb-2">
                    <div className="card bg-dark">
                        <h6 className="mb-4 textPrimary">Daily Sales</h6>
                        <div className="row d-flex align-items-center ">
                            <div className="col-8 ">
                                <h3 className="d-flex align-items-center textSecondary "> { dailySalesData.daily.current > dailySalesData.daily.goal ? (<FontAwesomeIcon style={{color: "rgb(0, 255, 0)"}} icon={faArrowUp} />) : (<FontAwesomeIcon style={{color: "rgb(255, 0, 0)"}} icon={ faArrowDown} />)}
                                Current: ${dailySalesData.daily.current}</h3>
                            </div>
                            <div className="col-3 text-right textSecondary percentDiv ">
                                {dailyPercent}% of {dailySalesData.daily.goal} goal
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" style={{width: `${dailyPercent}%`}} role="progressbar" aria-valuenow={dailySalesData.daily.current} aria-valuemin="0" aria-valuemax={dailySalesData.daily.goal}>
                            </div>
                        </div>
                    </div>
                </Col>


                {/* card 2 */}
                <Col sm={12} md={6} xl={4} className="mb-2">
                    <div className="card bg-dark">
                        <h6 className="mb-4 textPrimary">Monthly Sales</h6>
                        <div className="textSecondary row d-flex align-items-center">
                            <div className="col-8">
                                <h3 className="d-flex align-items-center"><i className=" icon-arrow-up-if-higher-than-previous-matrix" />{ monthlySalesData.monthly.current > monthlySalesData.monthly.goal ? (<FontAwesomeIcon style={{color: "rgb(0, 255, 0)"}} icon={faArrowUp} />) : (<FontAwesomeIcon style={{color: "rgb(255, 0, 0)"}} icon={ faArrowDown} />)}Current: ${monthlySalesData.monthly.current}</h3>
                            </div>
                            <div className="col-4 text-right">
                                <p>{monthlyPercent}% of {monthlySalesData.monthly.goal} goal</p>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" style={{width: `${monthlyPercent}%`}} role="progressbar" aria-valuenow={monthlySalesData.monthly.current} aria-valuemin="0" aria-valuemax={monthlySalesData.monthly.goal}>
                            </div>
                        </div>
                    </div>
                </Col>


                {/* yearly sales */}
                <Col sm={12} xl={4} className="mb-2">
                    <div className="card bg-dark">
                        <h6 className="mb-4 textPrimary">Yearly Sales</h6>
                        <div className="row d-flex align-items-center">
                            <div className="col-8 textSecondary">
                                <h3 className="d-flex align-items-center"><i className=" icon-arrow-up-if-higher-than-previous-matrix" />{ yearlySalesData.yearly.current > yearlySalesData.yearly.goal ? (<FontAwesomeIcon style={{color: "rgb(0, 255, 0)"}} icon={faArrowUp} />) : (<FontAwesomeIcon style={{color: "rgb(255, 0, 0)"}} icon={ faArrowDown} />)}Current: ${yearlySalesData.yearly.current}</h3>
                            </div>
                            <div className="col-4 text-right textSecondary">
                                <p>{yearlyPercent}% of {yearlySalesData.yearly.goal} goal</p>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" style={{width: `${yearlyPercent}%`}} role="progressbar" aria-valuenow={yearlySalesData.yearly.current} aria-valuemin="0" aria-valuemax={yearlySalesData.yearly.goal}>
                            </div>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>

    )
}
