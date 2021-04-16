import { Button, Col, Modal } from "react-bootstrap";
import React, { useState }  from "react";
import useData from "../util/dataService";

export default function YoutubeDetail() {
    const [modalShow, setModalShow] = React.useState(false);
    const dataService = useData()
    const youtubeDetails = dataService.getMediaData()
    const videos = youtubeDetails.videos
    

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                {props.video.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>views</h4>
                <p>
                description
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        );
    }

return (
    <div>
        {
            videos.map((video, index) => {
                return (
                        <Col sm={12} md={6} xl={4} key={index}>
                            <Button variant="primary" onClick={() => setModalShow(true)}>
                                {video.title}
                            </Button>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                details={video}
                            />
                        </Col>
            )
            })
        }
    </div>
    )
}
