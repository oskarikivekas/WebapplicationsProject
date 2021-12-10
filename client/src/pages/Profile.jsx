import { useState } from 'react'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router'

import Posts from '../components/Posts'
import ProfileContainer from '../components/ProfileContainer'
import './home.css'
const Home = () => {

  const [user, setUser] = useState({user: true});
  const {id} = useParams();
  console.log(id);
  const userHandler = () => {
      console.log(user);
      setUser(prevUser => !prevUser);
  }

    return (
        <div className="homePage" >
          <NavBar userHandler={userHandler} user={user}></NavBar> 
          <ProfileContainer> </ProfileContainer>
          <br />
          <Posts></Posts>
        </div>
    )
}

export default Home
