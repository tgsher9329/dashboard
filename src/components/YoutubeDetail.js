import React from "react";
import { Button, Col, Modal } from "react-bootstrap";
import useData from "../util/dataService";
import "../css/details.css"

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
            <Modal.Header className="mx-auto" closeButton>
                <Modal.Title id="contained-modal-title-center">
                {props.details.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Views: {props.details.views}</h4>
                <p>
                {props.details.description}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        );
    }

return (
    <div className="pb-2">
        <h3 className="mb-2 textPrimary detailsHeader">Click on a YouTube video to see more details.</h3>
        {
            videos.map((video, index) => {
                return (
                        <Col sm={12} md={6} xl={4} className="mx-auto mt-2"key={index}>
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
