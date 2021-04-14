import React from 'react'
import { Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import useData from '../util/dataService'

export default function Events() {

    const classCapacity = 200
    const dataService = useData()
    const trainingTitle = dataService.getEventData().training.title
    const signedUp = dataService.getEventData().training.signedUp
    const classPercent = (signedUp/classCapacity)*100

    return (
        <Row className="d-flex justify-content-around text-center col">

            {/* training card */}
            <div className="card m-1 col-12">
                <div className="card-body">
                    <div className="row align-items-center justify-content-center">
                        <div className="col">
                            <h5 className="m-0">Upcoming Training: {trainingTitle}</h5>
                        </div>
                        <div className="col-auto">
                            <label className="label theme-bg2 f-14 f-w-400 float-right">Class {classPercent}% Full</label>
                        </div>
                    </div>
                    <h2 className="mt-2 f-w-300">{signedUp} Signed Up</h2>
                </div>
            </div>
        </Row>
    )
}
