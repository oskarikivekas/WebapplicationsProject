import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './app.css'

import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import PostEditor from "./pages/PostEditor";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register /> }/>
          <Route path="/editor" element={<PostEditor />}/> 
          <Route path="/profile/:id" element={<Profile />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
