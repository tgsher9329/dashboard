import React from 'react'
import { Nav, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../css/header.css'

export default function Header() {
    return (
        <Row className="d-flex justify-content-between header pb-4">
            
            <Nav.Item className="mt-4 ml-5 ">
                <Link className="headerLink linkTextPrimary homeLink" to="/">Arms Reach</Link>
            </Nav.Item>

            <div className="mt-4 mr-5 d-inline-flex " >
                <Nav.Item>
                    <Link to="/youtubeDetail" className="ml-3 headerLink linkTextPrimary">Youtube Details</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/instagramDetail" className="ml-3 headerLink linkTextPrimary">Instagram Details</Link>
                </Nav.Item>
            </div>
        </Row>
    )
}
