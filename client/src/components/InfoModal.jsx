import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { useState } from 'react';
const InfoModal = (props) => {
    
    

    return (
            <Modal fullscreen='sm-down' show={props.show} backdrop="static" onHide={props.handleShow}>
                <Modal.Header style={{background: "black", color:"white"}}>
                <Modal.Title>Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col className="p-2">
                            <Form>
                                <Form.Group className="mb-3" controlId="userName">
                                    <Form.Label>Change username</Form.Label>
                                    <Form.Control type="password" placeholder={props.profile.username} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Change email address</Form.Label>
                                    <Form.Control type="email" placeholder={props.profile.email} />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Change password</Form.Label>
                                    <Form.Control type="password" placeholder="Old Password" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="a">
                                    <Form.Control type="password" placeholder="New password" />
                                </Form.Group>
                                
                                <Form.Group className="mb-3" controlId="b">
                                    <Form.Control type="password" placeholder="Repeat new password" />
                                </Form.Group>
                                
                                <Form.Group controlId="formFile" className="mb-3 mt-3">
                                    <Form.Label>Upload new profile</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                            </Form>
                            </Col>
                        </Row>
                    </Container>
                
                
                </Modal.Body>
                <Modal.Footer>
                <Button  variant="secondary" onClick={props.handleShow}>
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
