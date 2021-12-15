import {useState, useEffect} from 'react'
import Post from './Post'
import InfoModal from './InfoModal'
import {Container, Row, Col} from 'react-bootstrap'

const Posts = (props) => {
    
    //{id, title, creator, desc, created, comments[], likes}
    const [posts, setPosts] = useState([{id: "1", title: "TestSnippet", creator: "ChefKari", desc: "This is a snippet for blabla asdadsåddas asådasdp pasdasp", created: "21.2.2020", comments: [], likes: 10}, {id: "1", title: "TestSnippet", creator: "ChefKari", desc: "This is a snippet for blabla asdadsåddas asådasdp pasdasp", created: "21.2.2020", comments: [], likes: 10}, {id: "1", title: "TestSnippet", creator: "ChefKari", desc: "This is a snippet for blabla asdadsåddas asådasdp pasdasp", created: "21.2.2020", comments: [], likes: 10}, {id: "1", title: "TestSnippet", creator: "ChefKari", desc: "This is a snippet for blabla asdadsåddas asådasdp pasdasp", created: "21.2.2020", comments: [], likes: 10}, {id: "1", title: "TestSnippet", creator: "ChefKari", desc: "This is a snippet for blabla asdadsåddas asådasdp pasdasp", created: "21.2.2020", comments: [], likes: 10}, {id: "1", title: "TestSnippet", creator: "ChefKari", desc: "This is a snippet for blabla asdadsåddas asådasdp pasdasp", created: "21.2.2020", comments: [], likes: 10}]);
    
    const { search } = useLocation();
  
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/posts" + search);
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
