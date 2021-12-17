import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import { useLocation, Navigate } from 'react-router'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Posts from '../components/Posts'
import Footer from '../components/Footer'
import './profile.css'
import axios from 'axios'



const Profile = () => {
  const imgStorage = "http://localhost:5000/images/";
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [user, setUser] = useState({})
 

    useEffect(() => {
      const fetchUser = async () => {
        console.log(path);
        const res = await axios.get("/api/users/" + path);
        setUser(res.data);
        console.log(res.data);
      };
      fetchUser();
    }, [path]);


  return (
      <div className="homeBg" >
        <NavBar></NavBar> 
        <Container className="mt-2 ">
              <Row className="align-items-center text-center" >
                  <Col className="p-2" sm={12} md={6} xl={3} >
                    {/* if !user.profileImg -> set some default picture, empty causes 404 request, no biggie tho */}
                      <img className="profile-img" src={imgStorage + user.profileImg} alt="profilePicture" />
                      <h1 style={{marginTop: "5px"}}>@{user.user}</h1>
                      <hr style={{border: "1px solid black" }} />
                  </Col>
                 
                  <Col style={{margin: "5px"}}>  
                      <h2 >Bio</h2>  
                      <p className='bio'>{user.bio}</p>    
                  </Col>
                  
              </Row>
          </Container>
        <br />
        <Posts></Posts> 
      </div>
  )
}

export default Profile
