import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../css/events.css'
import useData from '../util/dataService'

export default function Events() {

    const classCapacity = 200
    const dataService = useData()
    const trainingTitle = dataService.getEventData().training.title
    const signedUp = dataService.getEventData().training.signedUp
    const classPercent = (signedUp/classCapacity)*100

    return (
        // <Row className="d-flex justify-content-around text-center col noPadding">
        <Container fluid>
            <Row>
                <Col sm={12} className="my-2">
                    <div className="card bg-dark">
                        <div className="card-body">
                            <div className="row align-items-center justify-content-center">
                                <div className="col">
                                    <h5 className="m-0 textPrimary">Upcoming Training: {trainingTitle}</h5>
                                </div>
                                <div className="col-auto">
                                    <label className="label theme-bg2 f-14 f-w-400 float-right textSecondary">Class {classPercent}% Full</label>
                                </div>
                            </div>
                            <h2 className="mt-2 textSecondary">{signedUp} Signed Up</h2>
                        </div>
                    </div>
                
                </Col>

            </Row>
        </Container>
    )
}
