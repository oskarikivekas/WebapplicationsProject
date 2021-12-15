import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Editor from '../components/Editor'
import NavBar from '../components/NavBar'
import Post from '../components/Post';
import CommentSection from '../components/CommentSection';
import './postEditor.css'

const PostEditor = (props) => {
    const [user, setUser] = useState({user: true});

    const userHandler = () => {
        console.log(user);
        setUser(prevUser => !prevUser);
    }
    
    const code = ["asdpåkasfpkåfaskpåasfåpasfå aåpsfkaåspfk asåfpkas åfpk", "pasdgfapsfon apsofnaspof hnaspfoa paosfapsfapfbaspfib ", " apsoansfpåa iapsfn asso napapapansdfo oasnavpoasnfvasvasvåv åpoasnvasv"]


    return (
       <div className="postEditor">
        <NavBar userHandler={userHandler} user={user}></NavBar>   
        <Container fluid="md" className="mt-2" >
            <Row className="align-items-center" >
                <Col className="p-2" xxl={3} lg={4} md={12} > 
                    <Editor code={code[0]}></Editor>
                </Col>
                <Col className="p-2" xxl={3} lg={4} md={12} > 
                    <Editor code={code[1]}></Editor>
                </Col>
                <Col className="p-2" xxl={3} lg={4} md={12} > 
                    <Editor code={code[2]}></Editor>
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
