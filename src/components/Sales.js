import React from 'react'
import { Row } from 'react-bootstrap'

export default function Sales() {
    return (
        <div>
            <Row className="px-5 py-5 d-flex justify-content-around">
                {/* card 1 */}
                <div className="card">
                    <h6 className="mb-4">Daily Sales</h6>
                    <div className="row d-flex align-items-center">
                        <div className="col-9">
                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5" />Daily sales # goes here</h3>
                        </div>
                        <div className="col-3 text-right">
                            <p className="m-b-0">%</p>
                        </div>
                    </div>
                    <div className="progress m-t-30">
                        <div className="progress-bar progress-c-theme w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        {/* progress bar to show difference from yesterday, 0 being no sells, 100% being the sells from yesterday */}
                        </div>
                    </div>
                </div>

                {/* card 2 */}
                <div className="card">
                    <h6 className="mb-4">Monthly Sales</h6>
                    <div className="row d-flex align-items-center">
                        <div className="col-9">
                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5" />Monthly sales # goes here</h3>
                        </div>
                        <div className="col-3 text-right">
                            <p className="m-b-0">%</p>
                        </div>
                    </div>
                    <div className="progress m-t-30">
                        <div className="progress-bar progress-c-theme w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        {/* progress bar to show difference from last month, 0 being no sells, 100% being the sells from last month */}
                        </div>
                    </div>
                </div>
            </Row>

            {/* yearly sales */}
            <div className="card mx-4">
                    <h6 className="mb-4">Yearly Sales</h6>
                    <div className="row d-flex align-items-center">
                        <div className="col-9">
                            <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5" />Monthly sales # goes here</h3>
                        </div>
                        <div className="col-3 text-right">
                            <p className="m-b-0">%</p>
                        </div>
                    </div>
                    <div className="progress m-t-30">
                        <div className="progress-bar progress-c-theme w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        {/* progress bar to show difference from last month, 0 being no sells, 100% being the sells from last month */}
                        </div>
                    </div>
                </div>


        </div>
    )
}
