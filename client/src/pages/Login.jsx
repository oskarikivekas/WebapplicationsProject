import React from 'react'
import LoginForm from '../components/Login'
import NavBar from '../components/NavBar'
import './login.css'
const login = () => {
    return (
        <div className="loginPage">
            <NavBar></NavBar>
            <LoginForm></LoginForm> 
        </div>
    )
}

export default login
