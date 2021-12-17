import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React from "react";


import './app.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import PostEditor from "./pages/PostEditor";
import Profile from "./pages/Profile";
import Unknownaddress from "./pages/UnknownAddress";
import ProfileSelf from "./pages/ProfileSelf";
import ProtectedRoutes from "./context/ProtectedRoutes";

function App() {
  
  /* To be added:
    If user is not logged in when trying to access restricted content,
    redirect to /login and use router history to redirect back to content
  */


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register /> }/>
          <Route path="/editor/:post" element={<PostEditor />}/> 
          <Route path="/profile/:id" element={<Profile />}/>
          <Route path="/profile" element={<ProtectedRoutes> <ProfileSelf /> </ProtectedRoutes>}/>
          <Route path="*" element={<Unknownaddress />}></Route>      
        </Routes>
      </Router>
    </div>
  ); 
}

export default App;
