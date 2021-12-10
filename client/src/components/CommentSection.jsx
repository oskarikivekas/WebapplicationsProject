import {useState} from 'react'
import { Breadcrumb, ListGroup, ListGroupItem, ToggleButton } from 'react-bootstrap'
import {FcLike} from "react-icons/fc"
import Comment from './Comment'
const CommentSection = () => {
    const comments = [1, 2, 3, 4, 5, 6]
    const [checked, setChecked] = useState(false);
    const likes = 12
    const LikeButton = (props) => {
        return (

            <ToggleButton
                id="toggle-check"
                type="checkbox"
                variant="outline-primary"
                checked={checked}
                value="1"
                onChange={(e) => setChecked(e.currentTarget.checked)}
            >
            <FcLike></FcLike> {props.likes}
            </ToggleButton>
            
        )
    }

    return (
        <> 
            <ListGroup>
            <ListGroupItem> 
                <LikeButton likes={likes}></LikeButton>
            </ListGroupItem>
                
                {comments.map( (comment, idx) => (
                    <ListGroupItem key={idx}>
                        <Comment> </Comment>
                    </ListGroupItem>
                ))}
                <br />
            </ListGroup>
        </>
    )
}

export default CommentSection
