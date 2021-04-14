import React from 'react'
import { Row } from 'react-bootstrap'
import Events from './Events'
import Instagram from './Instagram'
import Sales from './Sales'
import Youtube from './Youtube'

export default function Dashboard() {
    return (
        <Row>
            <Sales />
            <Events />
            <Instagram />
            <Youtube />
        </Row>
    )
}
