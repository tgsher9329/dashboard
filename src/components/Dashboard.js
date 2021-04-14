import React from 'react'
import { Row } from 'react-bootstrap'
import Events from './Events'
import Sales from './Sales'

export default function Dashboard() {
    return (
        <Row>
            <Sales />
            <Events />
        </Row>
    )
}
