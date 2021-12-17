import { useState, useContext } from 'react'
import NavBar from '../components/NavBar'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import {Col, Button, Container, Row, Form} from 'react-bootstrap'
import loginIcon from '../images/loginIcon.svg'
import loginImg from '../images/loginImg.svg'
import './login.css'
import { Context } from '../context/Context'
const Login = () => {

    const navigate = useNavigate();
    const {dispatch, fetching} = useContext(Context);
    const { state } = useLocation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = async (e) => {
        e.preventDefault();
        dispatch({type: "START_LOGIN"})
        try {
            const res = await axios.post("/api/auth/login", {
                username, password
            })
            
            dispatch({type: "LOGIN_SUCCESS", payload: res.data});
            navigate(state?.path || "/")
        
        } catch (err) {
            dispatch({type: "LOGIN_FAILED"});
        }
    }

    return (
        <div className="loginPage">
            <NavBar></NavBar>
            <Container className="mt-5"> 
                <Row className="align-items-center">
                    <Col lg={4} md={6} sm={12} className="text-center p-4"> 
                        <img className="login-icon" src={loginIcon} alt="icon"/>
                        <Form onSubmit={loginHandler}>
                        <Form.Group className="mb-3" controlId="formUserName">
                        <Form.Control onChange={(e) => setUsername(e.target.value)} type="username" placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary btb-block" type="submit" disabled={fetching}>
                            Login
                        </Button>
                        </Form>
                    </Col>
                    <Col lg={8} md={6} className="d-none d-lg-block d-md-block">
                        <img className="w-100" src={loginImg} alt=""></img>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login
