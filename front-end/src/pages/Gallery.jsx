/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import picture1 from '../assets/image7.png';
import picture2 from '../assets/image8.png';
import picture3 from '../assets/image9.png';
import picture4 from '../assets/image10.png';
import picture5 from '../assets/image11.png';
import picture6 from '../assets/image12.png';
import picture7 from '../assets/image13.png';
import picture8 from '../assets/image14.jpg';

export default function Gallery() {
    const pictures = [picture1, picture2, picture3, picture4, picture5, picture6, picture7, picture8];
    return (
        <div id="gallery" className="gallery">
            <h2>GALLERY</h2>
            <Carousel id='carousel'>
                {pictures.map((picture, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img
                                className='d-block w-100'
                                src={picture}
                            />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    )
}