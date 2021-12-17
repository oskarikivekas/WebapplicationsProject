import { useState } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
import {Col, Button, Container, Row, Form} from 'react-bootstrap'
import ImgCarousel from '../components/ImgCarousel'
import loginIcon from '../images/loginIcon.svg'
import img1 from '../images/pexels-negative-space-160107.jpg'
import './register.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)

    
    const registerHandler = async (e) => {
        e.preventDefault();

        const newUser = {
            username, email, password
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newUser.profileImg = filename;
            try {
                await axios.post("/api/upload", data);
            }catch (err) { }      
        }
        try {
            await axios.post("/api/auth/register", newUser)
            navigate('/login')
            
        } catch (err) {
                setError(true);
            }



    }

    return (
        <div className='registerPage'>
            <NavBar></NavBar>
            <Container className="mt-5"> 
                <Row className="align-items-center">
                    <Col xl={4} md={12} sm={12} className="text-center p-4"> 
                        <img className="login-icon" src={loginIcon} alt="icon"/>
                        <Form onSubmit={registerHandler}>
                            <Form.Floating>
                                <Form.Control
                                id="floatingUsername"
                                type="usernamel"
                                placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)}
                                />
                                <label htmlFor="floatingUsername">Username</label>
                            </Form.Floating>
                            <Form.Floating className="mt-3">
                                <Form.Control
                                id="floatingEmail"
                                type="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                />
                                <label htmlFor="floatingEmail">Email</label>
                            </Form.Floating>
                            <Form.Floating className="mt-3">
                                <Form.Control
                                id="floatingPassword"
                                type="password"
                                placeholder="Password"  
                                onChange={(e) => setPassword(e.target.value)}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                            </Form.Floating>
                            <Form.Text id="passwordHelpBlock" muted>
                                Your password must be over 8 characters long, contain lower and upper case characters, numbers and special characters.
                            </Form.Text>
                            <Form.Group  className="mb-3 mt-3">
                                <Form.Label>Add a profile picture!</Form.Label>
                                <Form.Control 
                                id="imageFile" 
                                type="file" 
                                onChange={(e) => setFile(e.target.files[0])} 
                                />
                                
                            </Form.Group>
                            <p>{error && "Incorrect information try again"}</p>
                            <Button type="submit" style={{width: '100%'}}>Register</Button>
                        </Form>
                    </Col>
                 <Col xl={8} md={6} className="d-none d-xl-block">
                        <ImgCarousel img1={img1}></ImgCarousel>
                    </Col> 
                </Row>
            </Container>
        </div>
    )
}

export default Register
