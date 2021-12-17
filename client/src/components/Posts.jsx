import {useState, useEffect, useContext} from 'react'
import { useLocation } from "react-router";
import axios from 'axios';
import Post from './Post'
import {Container, Row, Col} from 'react-bootstrap'
import { Context } from '../context/Context';

const Posts = () => {
    const {user} = useContext(Context);
    /* get location string to determine which posts to load */
    const location = useLocation();
    const path = location.pathname.split('/')
    const [posts, setPosts] = useState([]);
    /* location hook is used as a check for useEffect to refresh posts */
    const { search } = useLocation();
    useEffect(() => {
      const fetchPosts = async () => {
        if (path[2]) {
            const res = await axios.get("/api/posts/"+path[2]);
            setPosts(res.data);
        } else if (path[1] === "profile" && !path[2]) {
            
            const res = await axios.get("/api/posts/"+user.username);
            setPosts(res.data);
        } else {
            const res = await axios.get("/api/posts/");
            setPosts(res.data);
        }
        
      };
      fetchPosts();
      /* We get an warning here for that user.username, ignore until context system fully built */
      // eslint-disable-next-line
    }, [search, path]);
  

    return (
        <div className="posts">
           <Container className="mt-2">
                <Row className="" >
                {posts.map((p) => ( 
                    <Col key={p._id} className="p-2 align-items-center justify-content-center" xxl={3} lg={4} md={6} sm={6} xs={12}>
                        <Post post={p}  />
                    </Col>    
               ))}

                </Row>   
               
            </Container> 
        </div>
    )
}

export default Posts
