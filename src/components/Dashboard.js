import React from 'react'
import Events from './Events'
import Instagram from './Instagram'
import Sales from './Sales'
import Youtube from './Youtube'
import '../css/dashboard.css'
import { Container, Row } from 'react-bootstrap'

export default function Dashboard() {
    return (
        <div>
            <Sales />
            <Events />
            <Container fluid>
                <Row>
                    <Instagram />
                    <Youtube />
                </Row>
            </Container>
        </div>
    )
}
