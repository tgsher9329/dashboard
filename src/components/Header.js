import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../css/header.css'

export default function Header() {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="d-flex justify-content-between ">
                        
                        <Nav.Item className="mt-4 mr-5 d-inline-flex">
                            <Link className="headerLink linkTextPrimary homeLink" to="/">Arms Reach</Link>
                        </Nav.Item>

                        <div className="mt-4 ml-5 d-inline-flex " >
                            <Nav.Item>
                                <Link to="/instagramDetail" className="ml-3 headerLink linkTextPrimary">Instagram Details</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/youtubeDetail" className="ml-3 headerLink linkTextPrimary">Youtube Details</Link>
                            </Nav.Item>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
