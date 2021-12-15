import { useState } from 'react'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router'

import Posts from '../components/Posts'

import profilePicture from '../images/selfie lol.jpg'
import './profile.css'
const Profile = () => {

  const [user, setUser] = useState({user: true});
  const {id} = useParams();
  console.log(id);


    return (
        <div className="homeBg" >
          <NavBar></NavBar> 
          <br />
          <Posts all={false}></Posts>
        </div>
    )
}

export default Profile
