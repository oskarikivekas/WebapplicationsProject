import React from 'react'
import { Carousel } from 'react-bootstrap'
import './css/carousel.css'
const ImgCarousel = (props) => {
    return (
        <Carousel variant="dark" className="carousel mt-2">
            <Carousel.Item>
                <img
                className="d-block w-100 "
                src={props.img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Could be cool but now just annoying and ugly</h3>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={props.img1}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Still annoying and ugly</h3>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={props.img1}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>I dont even scale properly for mobile /::</h3>
                
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default ImgCarousel
