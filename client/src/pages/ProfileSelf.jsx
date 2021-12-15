import { useState } from 'react'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Posts from '../components/Posts'
import Footer from '../components/Footer'
import './profile.css'
import profilePicture from '../images/selfie lol.jpg'
import InfoModal from '../components/InfoModal'
import TextareaAutosize from 'react-textarea-autosize'

const ProfileSelf = () => {
    const profile = {username: "chefkari", email: "asd@gmail.com", password: "***********"}
    const [show, setShow] = useState(false);
    const [editorMode, setEditorMode] = useState(false);
    const handleShow = () => setShow(p => !p);
    const handleEditor = () => setEditorMode(m => !m)

    const [user, setUser] = useState({user: true});
    
    /* useeffect fetch user profile
        set profile data
    */
    const [bio, setBio] = useState( "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias natus autem, nobis illo aut eius? Officiis deleniti facere corporis, alias eveniet saepe molestias in ipsa suscipit ut esse tempore voluptates?")

    const userHandler = () => {
        console.log(user);
        setUser(prevUser => !prevUser);
    }
  


  /* user profile -> userdata, protected route */

    return (
        <div className="homeBg" >
          <NavBar userHandler={userHandler} user={user}></NavBar> 
          <Container className="mt-2 ">
                <Row className="align-items-center text-center" >
                    <Col className="p-2" sm={12} md={6} xl={3} >
                        <img className="profile-img" src={profilePicture} alt="profilePicture" />
                        <h1 style={{marginTop: "5px"}}>@{profile.username}</h1>
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
            <InfoModal show={show} handleShow={handleShow} profile={profile}></InfoModal>
          <br />
          <Posts></Posts>
          <Footer></Footer>
        </div>
    )
}

export default ProfileSelf