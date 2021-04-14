import React from 'react'
import { Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import useData from '../util/dataService'

export default function Sales() {
    const dataService = useData()
    const dailySalesData = dataService.getSalesData()
    const monthlySalesData = dataService.getSalesData()
    const yearlySalesData = dataService.getSalesData()
    const dailyPercent = Math.round(dailySalesData.daily.current/dailySalesData.daily.goal*100)
    const monthlyPercent = Math.round(monthlySalesData.monthly.current/monthlySalesData.monthly.goal*100)
    const yearlyPercent = Math.round(yearlySalesData.yearly.current/yearlySalesData.yearly.goal*100)

    return (

        <Row className="d-flex justify-content-around col-12 mt-3">
            {/* card 1 */}
            <div className="m-1 col-11 col-md-5 col-xl-3 ">
                <div className="card">
                    <h6 className="mb-4">Daily Sales</h6>
                    <div className="row d-flex align-items-center">
                        <div className="col-9">
                            <h3 className="d-flex align-items-center"> { dailySalesData.daily.current > dailySalesData.daily.goal ? (<FontAwesomeIcon style={{color: "rgb(0, 255, 0)"}} icon={faArrowUp} />) : (<FontAwesomeIcon style={{color: "rgb(255, 0, 0)"}} icon={ faArrowDown} />)}
                            Current: ${dailySalesData.daily.current}</h3>
                        </div>
                        <div className="col-3 text-right">
                            <p>{dailyPercent}% of {dailySalesData.daily.goal} goal</p>
                        </div>
                    </div>
                    <div className="progress m-t-30">
                        <div className="progress-bar progress-c-theme" style={{width: `${dailyPercent}%`}} role="progressbar" aria-valuenow={dailySalesData.daily.current} aria-valuemin="0" aria-valuemax={dailySalesData.daily.goal}>
                            {/* progress bar to show difference from yesterday, 0 being no sells, 100% being the sells from yesterday */}
                        </div>
                    </div>

                </div>
            </div>

            {/* card 2 */}
            <div className="m-1 col-11 col-md-5 col-xl-3">
                <div className="card">
                    <h6 className="mb-4">Monthly Sales</h6>
                    <div className="row d-flex align-items-center">
                        <div className="col-8">
                            <h3 className="d-flex align-items-center"><i className=" icon-arrow-up-if-higher-than-previous-matrix" />{ monthlySalesData.monthly.current > monthlySalesData.monthly.goal ? (<FontAwesomeIcon style={{color: "rgb(0, 255, 0)"}} icon={faArrowUp} />) : (<FontAwesomeIcon style={{color: "rgb(255, 0, 0)"}} icon={ faArrowDown} />)}Current: ${monthlySalesData.monthly.current}</h3>
                        </div>
                        <div className="col-4 text-right">
                            <p>{monthlyPercent}% of {monthlySalesData.monthly.goal} goal</p>
                        </div>
                    </div>
                    <div className="progress m-t-30">
                        <div className="progress-bar progress-c-theme" style={{width: `${monthlyPercent}%`}} role="progressbar" aria-valuenow={monthlySalesData.monthly.current} aria-valuemin="0" aria-valuemax={monthlySalesData.monthly.goal}>
                            {/* progress bar to show difference from last month, 0 being no sells, 100% being the sells from last month */}
                        </div>
                    </div>
                </div>
            </div>


            {/* yearly sales */}
            <div className="m-1 col-11 col-md-11 col-xl-3">
                <div className="card">
                    <h6 className="mb-4">Yearly Sales</h6>
                    <div className="row d-flex align-items-center">
                        <div className="col-8">
                            <h3 className="d-flex align-items-center"><i className=" icon-arrow-up-if-higher-than-previous-matrix" />{ yearlySalesData.yearly.current > yearlySalesData.yearly.goal ? (<FontAwesomeIcon style={{color: "rgb(0, 255, 0)"}} icon={faArrowUp} />) : (<FontAwesomeIcon style={{color: "rgb(255, 0, 0)"}} icon={ faArrowDown} />)}Current: ${yearlySalesData.yearly.current}</h3>
                        </div>
                        <div className="col-4 text-right">
                            <p>{yearlyPercent}% of {yearlySalesData.yearly.goal} goal</p>
                        </div>
                    </div>
                    <div className="progress m-t-30">
                        <div className="progress-bar progress-c-theme" style={{width: `${yearlyPercent}%`}} role="progressbar" aria-valuenow={yearlySalesData.yearly.current} aria-valuemin="0" aria-valuemax={yearlySalesData.yearly.goal}>
                            {/* progress bar to show difference from last month, 0 being no sells, 100% being the sells from last month */}
                        </div>
                    </div>
                </div>
            </div>
        </Row>

    )
}
