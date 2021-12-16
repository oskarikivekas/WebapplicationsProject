import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import postImg from '../images/code.png'
import {Card, Button} from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom';
const Post = ({post}) => {
    const { user } = useContext(Context);

    return (
        <Card  bg="dark" text="light" className="text-center" style={{maxWidth: '385px'}}>
            <Card.Img className="p-3" variant="top" src={postImg} style={{height: "auto"}}/>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>Creator: {post.creator}</Card.Text>
            </Card.Body>    
                <div className="mb-1 fluid">
                    {/* linkki käyttäjään */}
                    <Button as={Link} to={`/editor/${post._id}`} size="sm" variant="primary">View snippet</Button>
                    {/* Button link sends to /editor thing with parameters to tell which one -> check access with request?*/}
                </div>   
            <Card.Footer className="text-muted"> Created {new Date(post.createdAt).toDateString()}</Card.Footer>
        </Card>
    )
}

export default Post
