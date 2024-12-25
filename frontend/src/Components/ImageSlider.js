import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://cache.careers360.mobi/media/article_images/2024/6/20/IMSEC-Ghaziabad.jpg"
                        alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://thumbs.dreamstime.com/z/old-books-wooden-table-library-vintage-style-ai-generated-content-design-background-instagram-facebook-wall-323974717.jpg?ct=jpeg"
                        alt="Second slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://imsec.ac.in/assets/images/university/course1.jpg"
                        alt="Third slide"
                    />
                    
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
