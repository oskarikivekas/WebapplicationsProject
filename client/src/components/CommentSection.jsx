import { useContext, useEffect, useState } from 'react'
import { useLocation } from "react-router";
import { Context } from "../context/Context";
import { ListGroup, ListGroupItem, ToggleButton, Button } from 'react-bootstrap'
import {FcLike} from "react-icons/fc"
import axios from 'axios';
import Comment from './Comment'
import TextareaAutosize from 'react-textarea-autosize'


const CommentSection = () => {
    const {user} = useContext(Context);
    const location = useLocation();
    const postId = location.pathname.split('/')[2]
    const [text, setText] = useState('');
    const [comments, setComments] = useState([])
    const likes = 12
    /* get comments */
    useEffect(() => {   
        const getComments = async () => {
            const res = await axios('/api/posts/comments/'+ postId);
            setComments(res.data);
        };
        getComments();
    }, [postId])

    const submitComment = async () => {
        const config = {
            headers: {
                "content-type": "application/json",
                "authorization": "Bearer " + localStorage.getItem('auth_token')
              }
        }
        const res = await axios.post('/api/posts/comment', {
            title: "Comment",
            creator: user.username,
            desc: text,
            postid: postId,
        }, config);
        console.log(res.data);
        /* lazy solution, not much time left :P will be changed to state update later on to avoid unnecessary reloads.*/
        window.location.reload()

    } 



    const LikeButton = (props) => {
        const [checked, setChecked] = useState(false);
        const [amount, setAmount] = useState()
       /*  useEffect( () => {
            setAmount(props.likes.length);

        }, [amount]) */

        return (

            <ToggleButton
                id="toggle-check"
                type="checkbox"
                variant="outline-primary"
                checked={checked}
                value="1"
                onChange={(e) => setChecked(e.currentTarget.checked)}
            >
            <FcLike></FcLike> {amount}
            </ToggleButton>           
        )
    }

    return (
        <> 
            <ListGroup>
            <ListGroupItem> 
                <LikeButton likes={likes}></LikeButton>
            </ListGroupItem>
                
             {comments.map( (comment) => (
                
                <ListGroupItem key={comment._id}>
                    <Comment data={comment}> </Comment>
                </ListGroupItem>
            ))} 
            <br />
            {user &&<h2>Comment on post</h2>}
            {user && <TextareaAutosize style={{minWidth: "50vh", border: "none", resize: 'none'}} value={text} onChange={(e) => setText(e.target.value)}/>}
            {user && <Button onClick={submitComment}>Submit</Button>}
            </ListGroup>
        </>
    )
}

export default CommentSection
