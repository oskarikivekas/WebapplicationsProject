import React from 'react'
import postImg from '../images/code.png'
import {Card, Button} from 'react-bootstrap'
const Post = (props) => {
    const p = props.post

    return (
        <Card  bg="dark" text="light" className="text-center ">
            <Card.Img className="p-3" variant="top" src={postImg} style={{height: "auto"}}/>
            <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>{p.desc}</Card.Text>
            </Card.Body>    
                <div className="mb-1 fluid">
                    {/* linkki käyttäjään */}
                    <Button size="sm" variant="primary">View snippet</Button>
                    {/* Button link sends to /editor thing with parameters to tell which one -> check access with request?*/}
                </div>   
            <Card.Footer className="text-muted"> Last update {p.created}</Card.Footer>
        </Card>
    )
}

export default Post
