import postImg from '../images/code.png'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
const Post = ({post}) => {

/* Single post card, router links to editor and profiles */
    return (
        <Card  bg="dark" text="light" className="text-center" style={{maxWidth: '385px'}}>
            <Card.Img className="p-3" variant="top" src={postImg} style={{height: "auto"}}/>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text as={Link} to={`/profile/${post.creator}`}>Creator: {post.creator}</Card.Text>
            </Card.Body>    
                <div className="mb-1 fluid">
                    <Button as={Link} to={`/editor/${post._id}`} size="sm" variant="primary">View snippet</Button>
                </div>   
            <Card.Footer className="text-muted"> Created {new Date(post.createdAt).toDateString()}</Card.Footer>
        </Card>
    )
}

export default Post
