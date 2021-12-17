import { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useLocation } from "react-router";
import Editor from '../components/Editor'
import NavBar from '../components/NavBar'
import CommentSection from '../components/CommentSection';
import { Context } from "../context/Context";
import TextareaAutosize from 'react-textarea-autosize'
import { useNavigate } from 'react-router-dom'
import './postEditor.css'
import axios from 'axios';

const PostEditor = () => {
    const navigate = useNavigate();
    const {user} = useContext(Context);
    const location = useLocation();
    const postId = location.pathname.split('/')[2]
    const [post, setPost] = useState({})
    const [editormode, setEditorMode] = useState(false);
    const [code, setCode] = useState("")
    const [title, setTitle] = useState("")

    useEffect(() => {   
        const getPost = async () => {
            const res = await axios('/api/posts/single/'+ postId);
            setPost(res.data);
            setCode(res.data.code);
           
            /* handle incorrect post id -> redirect to 404 */
        };
        getPost()
    }, [postId])



    const deleteHandler = async () => {
        console.log("delete")
    }


    const createHandler = async () => {
        console.log("post")
        const config = {
            headers: {
                "content-type": "application/json",
                "authorization": "Bearer " + localStorage.getItem('auth_token')
              }
        }
        try {
            const res = await axios.post('/api/posts', {
                title: title,
                creator: user.username,
                code: code,
            }, config )
            const id = res.data._id;
            navigate('/editor/'+id);
            
        } catch (err) {
            
        }
    
    } 

    const handleEditor = () => setEditorMode(m => !m)

    return (
       <div className="postEditor">
        <NavBar ></NavBar>   
        <Container fluid="md" className="mt-2" >
            
            {/* {post.creator === user.username && <Button onClick={deleteHandler}>Delete</Button>} */}
            <Row className="align-items-center" >
                <Col className="m-2" xxl={3} lg={4} md={12} > 
                    
                    {editormode ? 
                    (<TextareaAutosize style={{minWidth: "100vh", border: "none", resize: 'none'}} value={code} onChange={(e) => setCode(e.target.value)}/>)
                     : (<Editor code={code}></Editor>) }
                     
                     
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col className="m-2" xxl={3} lg={4} md={12}>
                {(postId === "new" && user || post.creator === user?.username) && <Button onClick={handleEditor}>Toggle editor</Button>}
                </Col>
                <Col className="m-2" xxl={3} lg={4} md={12}>
                {(postId === "new" && editormode)  && <Button variant="success" onClick={createHandler}>Post snippet</Button>}            
                </Col>
                <Col className="m-2" xxl={3} lg={4} md={12}>
                {editormode  && <Button variant="danger" onClick={deleteHandler}>Delete snippet</Button>}            
                </Col>
            </Row>
            
            <Row className="align-items-center">
                <CommentSection likes={post.likes} ></CommentSection>
            </Row>
        </Container> 
       </div>
    )
}

export default PostEditor
