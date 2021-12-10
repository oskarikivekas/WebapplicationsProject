import { useState } from 'react'
import NavBar from '../components/NavBar'
import Posts from '../components/Posts'

import './home.css'
const Home = () => {

  const [user, setUser] = useState({user: true});

  const userHandler = () => {
      console.log(user);
      setUser(prevUser => !prevUser);
  }

    return (
        <div className="homePage" >
          <NavBar userHandler={userHandler} user={user}></NavBar> 
       
          <Posts></Posts>
        </div>
    )
}

export default Home
