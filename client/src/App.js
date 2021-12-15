import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import React, { useState, useContext } from "react";
import { Context } from './context/Context'

import './app.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import PostEditor from "./pages/PostEditor";
import Profile from "./pages/Profile";
import Unknownaddress from "./pages/UnknownAddress";
import ProfileSelf from "./pages/ProfileSelf";

function App() {
  const {user} = useContext(Context);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register /> }/>
          <Route path="/editor/:post" element={<PostEditor />}/> 
          <Route path="/profile/:id" element={<Profile />}/>
          <Route path="/profile" element={<ProfileSelf />}/>
          <Route path="*" element={<Unknownaddress />}></Route>      
        </Routes>
      </Router>
    </div>
  ); 
}

export default App;
