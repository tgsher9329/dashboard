import React from 'react'
import { Row } from 'react-bootstrap'

export default function Sales() {
    return (

        <Row className="d-flex justify-content-around col-12">
            {/* card 1 */}
            <div className="m-1 col-11 col-md-5 col-xl-3 ">
                <div className="card">
                    <h6 className="mb-4">Daily Sales</h6>
                    <div className="row d-flex align-items-center">
                        <div className="col-9">
                            <h3 className="d-flex align-items-center"><i className=" icon-arrow-up-if-higher-than-previous-matrix" />sales #</h3>
                        </div>
                        <div className="col-3 text-right">
                            <p>%</p>
                        </div>
                    </div>
                    <div className="progress m-t-30">
                        <div className="progress-bar progress-c-theme w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
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
                        <div className="col-9">
                            <h3 className="d-flex align-items-center"><i className=" icon-arrow-up-if-higher-than-previous-matrix" />sales #</h3>
                        </div>
                        <div className="col-3 text-right">
                            <p>%</p>
                        </div>
                    </div>
                    <div className="progress m-t-30">
                        <div className="progress-bar progress-c-theme w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
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
                        <div className="col-9">
                            <h3 className="d-flex align-items-center"><i className=" icon-arrow-up-if-higher-than-previous-matrix" />sales #</h3>
                        </div>
                        <div className="col-3 text-right">
                            <p>%</p>
                        </div>
                    </div>
                    <div className="progress m-t-30">
                        <div className="progress-bar progress-c-theme w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            {/* progress bar to show difference from last month, 0 being no sells, 100% being the sells from last month */}
                        </div>
                    </div>
                </div>
            </div>
        </Row>

    )
}
