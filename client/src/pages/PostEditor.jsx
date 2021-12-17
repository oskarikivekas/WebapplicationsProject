import { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Row, InputGroup, FormControl} from 'react-bootstrap';
import { useLocation } from "react-router";
/* import Editor from '../components/Editor' not in use for now*/
import NavBar from '../components/NavBar'
import CommentSection from '../components/CommentSection';
import { Context } from "../context/Context";
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer';
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
            const res = await axios.get('/api/posts/single/'+ postId);
            setPost(res.data);
            setCode(res.data.code);
            if(postId ==="new"){
                setEditorMode(true)
            }
            /* handle incorrect post id -> redirect to 404 */
        };
        getPost()
    }, [postId])



    const deleteHandler = async () => {
        const config = {
            headers: {
                "content-type": "application/json",
                "authorization": "Bearer " + localStorage.getItem('auth_token')
              }
        }
        try {
            await axios.delete('/api/posts'+ postId, config);;
        } catch (err) {

        }
    }


    const createHandler = async () => {
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

    const handleUpdate = async () => {
        const config = {
            headers: {
                "content-type": "application/json",
                "authorization": "Bearer " + localStorage.getItem('auth_token')
              }
        }
        try {
            await axios.put('/api/posts/' + postId, {
                creator: user.username,
                code: code,
            }, config)
        } catch (err) {}
    }

    const handleEditor = () => setEditorMode(m => !m)
    /* return is very messy, but basically has just multiple conditional renders*/
    return (
       <div className="postEditor">
        <NavBar ></NavBar>   
        <Container className="mt-2" >
            <Row className="align-items-center" >
                <Col className="mt-2 justify-content-center" xxl={3} lg={4} md={12} > 
                    {(editormode && (postId === "new")) && <h3>Give your snippet a title</h3>}
                    {(editormode && (postId === "new")) && <textarea value={title} onChange={(e) => setTitle(e.target.value)}/>}
                    <br />
                    {(postId === "new" ) ? (<h3>Code</h3>) : <h2>{post.title}</h2>}
                </Col>
            <Row>
                <Col>
                    <InputGroup>
                        {editormode ? (<FormControl style={{minHeight: "25vh"}} value={code} as="textarea" onChange={(e) => setCode(e.target.value)} />):
                        (<FormControl style={{minHeight: "25vh"}} value={code} as="textarea" disabled/>)}
                    </InputGroup>
                </Col>
           
            </Row>

            </Row>
             <Row className="align-items-center">
                <Col className="mt-2" xxl={3} lg={4} md={12}>   
                {((postId === "new" && user) || (post.creator === user?.username)) && <Button onClick={handleEditor}>Toggle editor</Button>}
                </Col>
                <Col className="mt-2" xxl={3} lg={4} md={12}>
                {(postId === "new" && editormode)  && <Button variant="success" onClick={createHandler}>Post snippet</Button>}      
                {(post.creator === user?.username && editormode) && <Button variant="success" onClick={handleUpdate}>Save changes</Button>}      
                </Col>
                <Col className="mt-2" xxl={3} lg={4} md={12}>
                {editormode  && <Button variant="danger" onClick={deleteHandler}>Delete snippet</Button>}            
                </Col>
            </Row> 
            
            <Row className="align-items-center">
                <CommentSection likes={post.likes} ></CommentSection>
            </Row>
        </Container> 
        <Footer></Footer>
       </div>
    )
}

export default PostEditor
