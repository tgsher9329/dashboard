import React from "react";
import { useState, useEffect } from "react";
import { Button, Col, Modal } from "react-bootstrap";
import useData from "../util/dataService";
import "../css/details.css"

export default function YoutubeDetail() {
    const [modalShow, setModalShow] = React.useState(false);
    const dataService = useData()
    const [data, setData] = useState(useData())
    const [modalData, setModalData] = useState(null)
    
    
    useEffect(() => {
        setData(dataService.getMediaData())
    }, [dataService])

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header className="mx-auto" closeButton>
                <Modal.Title id="contained-modal-title-center">
                {props.details?.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Views: {props.details?.views}</h4>
                <p>
                {props.details?.description}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        );
    }

    const instagramDetails = data
    const pictures = instagramDetails?.videos || []

return (
    <div className="pb-2">
        <h3 className="mb-2 textPrimary detailsHeader">Click on an Instagram post to see more details.</h3>
        {
            pictures.map((picture, index) => {
                return (
                        <Col sm={12} md={6} xl={4} className="mx-auto mt-2"key={index}>
                            <Button variant="primary" onClick={() => {setModalShow(true); setModalData(picture)}}>
                                {picture.title}
                            </Button>
                        </Col>
            )
            })
        }

        <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                details={modalData}
                            />
    </div>
    )
}
