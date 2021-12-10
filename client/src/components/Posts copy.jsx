import {useState, useEffect} from 'react'
import Post from './Post'
import InfoModal from './InfoModal'
import ScrollToTop from './ScrollToTop'
import {Container, Row, Col} from 'react-bootstrap'
const Posts = () => {
    //fetch posts from api here or somewhere
    //{id, title, creator, desc, created, comments[], likes}
    
    const [posts, setPosts] = useState([{id: "1", title: "TestSnippet", creator: "ChefKari", desc: "This is a snippet for blabla asdadsåddas asådasdp pasdasp", created: "21.2.2020", comments: [], likes: 10}]);
    /* const [modal, setModal] = useState([{post: null, visible: false}]);  */
   
  /*   const commentModal = (id) => {
        console.log("hello", modal)
        const newModal = [...posts];
        const p = newModal.find(p => p.id === id);
        setModal({post: p, visible: true});
    } */

 

    /* const closeModal = () => {
        setModal([{post: null, visible: false}]);
    } */

    return (
        <div className="posts">
           <Container className="mt-2 ">
                <Row className="align-items-center">
                     
                {posts.map((p) => ( 
                    <Col key={p.id} className="p-2" xxl={3} lg={4} md={6} sm={6} xs={12}>
                        <Post post={p}  />
                    </Col>    
               ))}

                </Row>   
                <Row className="align-items-center">
                    <Col className="m-4">
                        <ScrollToTop></ScrollToTop>
                    </Col>
                </Row>
               
            </Container> 
        </div>
    )
}

export default Posts
