import {useState, useEffect} from 'react'

import axios from 'axios';
import Post from './Post'
import {Container, Row, Col} from 'react-bootstrap'

const Posts = () => {
    
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/api/posts/");
        setPosts(res.data);
      };
      fetchPosts();
    });
  

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
