import { useState, useContext} from 'react'
import NavBar from '../components/NavBar'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Posts from '../components/Posts'
import {Context} from '../context/Context'
import './profile.css'
import InfoModal from '../components/InfoModal'
import TextareaAutosize from 'react-textarea-autosize'

const ProfileSelf = () => {
    const imgStorage = "http://localhost:5000/images/";
    const [show, setShow] = useState(false);
    const [editorMode, setEditorMode] = useState(false);
    const handleShow = () => setShow(p => !p);
    const handleEditor = () => setEditorMode(m => !m)
    const {user} = useContext(Context);
    const [bio, setBio] = useState(user.bio);

    /* UPDATE BIO FUNCTION */

    return (
        <div className="homeBg" >
          <NavBar></NavBar> 
          <Container className="mt-2" >
                <Row className="align-items-center text-center" >
                    <Col className="p-2" sm={12} md={6} xl={3} >
                        <img className="profile-img" src={imgStorage + user.profileImg} alt="profilePicture" />
                        <h1 style={{marginTop: "5px"}}>@{user.username}</h1>
                        <hr style={{border: "1px solid black" }} />
                        <div className="d-grid gap-2">
                            <Button onClick={handleShow} variant="primary" size="sm" >Profile settings</Button>
                            <Button onClick={handleEditor} variant="dark" size="sm">{editorMode? ("save"): ("edit bio")}</Button>
                        </div>
                    </Col>             
                    <Col style={{margin: "5px"}}>  
                        <h2 >Bio</h2>
                        {editorMode ? (
                            <TextareaAutosize className="scroll" style={{minWidth: "50vh", border: "none", resize: 'none'}}value={bio} onChange={(e) => setBio(e.target.value)}/>
                        ): (          
                        <p className='bio'>{bio}</p>
                        )}

                    </Col>
                    
                </Row>
            </Container>
            <InfoModal show={show} handleShow={handleShow} profile={user}></InfoModal>
          <br />
          <Posts></Posts>   
        </div>
    )
}

export default ProfileSelf