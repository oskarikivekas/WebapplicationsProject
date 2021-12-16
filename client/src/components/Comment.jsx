import React from 'react'
import { Card } from 'react-bootstrap'
const Comment = ({data}) => {
    return (
        <Card>
            <Card.Header>{data.creator}</Card.Header>
            <Card.Body>
            <blockquote className="blockquote mb-0">
                <p>
                {' '}
                {data.desc}
                {' '}
                </p>
                <footer className="blockquote-footer">
                {new Date(data.createdAt).toDateString()}
                </footer>
            </blockquote>
            </Card.Body>
        </Card>
    )
}

export default Comment
