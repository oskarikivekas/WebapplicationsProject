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
                <h5>Code everywhere you are</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={props.img1}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={props.img1}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default ImgCarousel
