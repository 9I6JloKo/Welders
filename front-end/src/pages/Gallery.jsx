/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import picture1 from '../assets/image7.png';
import picture2 from '../assets/image8.png';
import picture3 from '../assets/image9.png';
import picture4 from '../assets/image10.png';
import picture5 from '../assets/image11.png';
import picture6 from '../assets/image12.png';
import picture7 from '../assets/image13.png';
import picture8 from '../assets/image14.jpg';

export default function Gallery() {
    return (
        <div id="gallery" className="gallery">
            <h2>GALLERY</h2>
            <div id="carousel" class="carousel slide" data-bs-ride="carousel">
                {/* <!-- Indicators/dots --> */}
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="3"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="4"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="5"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="6"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="7"></button>
                </div>

                {/* <!-- The slideshow/carousel --> */}
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={picture1} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={picture2} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={picture3} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={picture4} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={picture5} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={picture6} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={picture7} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={picture8} />
                    </div>
                </div>

                {/* <!-- Left and right controls/icons --> */}
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    )
}