import React from 'react'
import { Form, Button, Col, Container, Row} from 'react-bootstrap'
import loginImg from '../images/loginImg.svg'
import loginIcon from '../images/loginIcon.svg'
import './css/login.css'


const Login = () => {
    return (
        <Container className="mt-5"> 
            <Row className="align-items-center">
                <Col lg={4} md={6} sm={12} className="text-center p-4"> 
                    <img className="login-icon" src={loginIcon} alt="icon"/>
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary btb-block" type="submit">
                        Login
                    </Button>
                    </Form>
                </Col>
                <Col lg={8} md={6} className="d-none d-lg-block d-md-block">
                    <img className="w-100" src={loginImg} alt=""></img>
                </Col>
            </Row>
        </Container>
    )
}

export default Login
