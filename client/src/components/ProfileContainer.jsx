import React from 'react'
import {Container, Row, Col, Image, Card} from 'react-bootstrap'
import profilePicture from '../images/selfie lol.jpg'
import './css/profile.css'
const ProfileContainer = () => {

    /* Userdata somehow here */

    return (
        <div>
            <Container className="mt-2 ">
                <Row className="align-items-center text-center" >
                    <Col className="p-2" sm={12} md={6} xl={3}>
                        <img className="profile-img" src={profilePicture} alt="profilePicture" />
                        <h1>ChefKari</h1>
                    </Col>
                    <Col>  
                        <h3>Bio</h3>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, perspiciatis. Animi tempora necessitatibus ducimus aspernatur unde hic, saepe ab tempore dicta nobis. Sapiente vero cum nostrum at temporibus suscipit quasi.
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}

export default ProfileContainer
