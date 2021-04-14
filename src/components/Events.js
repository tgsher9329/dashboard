import React from 'react'
import { Row } from 'react-bootstrap'

export default function Events() {
    return (
        <Row className="d-flex justify-content-around text-center col-12">

            {/* training card */}
            <div className="card m-1 col-11 col-md-11 col-xl-3">
                <div className="card-body">
                    <div className="row align-items-center justify-content-center">
                        <div className="col">
                            <h5 className="m-0">Upcoming Training</h5>
                        </div>
                        <div className="col-auto">
                            <label className="label theme-bg2 f-14 f-w-400 float-right">percent full</label>
                        </div>
                    </div>
                    <h2 className="mt-2 f-w-300">45 signed up</h2>
                </div>
            </div>
        </Row>
    )
}
