import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Editor from '../components/Editor'
import NavBar from '../components/NavBar'
import Post from '../components/Post';
import CommentSection from '../components/CommentSection';
import './postEditor.css'

const PostEditor = () => {
    const [user, setUser] = useState({user: true});

    const userHandler = () => {
        console.log(user);
        setUser(prevUser => !prevUser);
    }
    
    return (
       <div className="postEditor">
        <NavBar userHandler={userHandler} user={user}></NavBar>   
        <Container fluid="md" className="mt-2" >
            <Row className="align-items-center" >
                <Col className="p-2" xxl={3} lg={4} md={12} > 
                    <Editor ></Editor>
                </Col>
                <Col className="p-2" xxl={3} lg={4} md={12} > 
                    <Editor ></Editor>
                </Col>
                <Col className="p-2" xxl={3} lg={4} md={12} > 
                    <Editor ></Editor>
                </Col>
            </Row>
            <Row className="" border-dark>
                <CommentSection ></CommentSection>
            </Row>
        </Container> 
       </div>
    )
}

export default PostEditor
