import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

const InfoModal = (props) => {


    const close = () => {
        props.closeModal()
   }
    return (
            <Modal fullscreen='sm-down' show={true} backdrop="static" onHide={close}>
                <Modal.Header closeButton>
                <Modal.Title>{props.post.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col className="p-2">
                                
                            
                            </Col>
                        </Row>
                    </Container>
                
                
                </Modal.Body>
                <Modal.Footer>
                <Button  variant="secondary">
                    Close
                </Button>
                <Button variant="primary">
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
    )
}

export default InfoModal
