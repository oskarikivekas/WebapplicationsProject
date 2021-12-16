import {useState, useEffect} from 'react'
import { useLocation } from "react-router";
import axios from 'axios';
import Post from './Post'
import {Container, Row, Col} from 'react-bootstrap'

const Posts = (props) => {
    
    //{id, title, creator, desc, created, comments[], likes}
    const [posts, setPosts] = useState([]);
    
    const { search } = useLocation();
  
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/api/posts" );
        setPosts(res.data);
      };
      fetchPosts();
    }, [search]);
  

    return (
        <div className="posts">
           <Container className="mt-2">
                <Row className="" fluid>
                     
                {posts.map((p) => ( 
                    <Col key={p.id} className="p-2 align-items-center justify-content-center" xxl={3} lg={4} md={6} sm={6} xs={12}>
                        <Post post={p}  />
                    </Col>    
               ))}

                </Row>   
               
            </Container> 
        </div>
    )
}

export default Posts
