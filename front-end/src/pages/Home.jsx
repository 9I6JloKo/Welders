import React from 'react';

export default function Home() {
    return (
        <div>
            <div id="" className="main-page">
                <div className="left-side">
                    <div className="text">
                        <h1>Spark Your Skills,</h1>
                        <h1>Weld Your Dreams!</h1>
                    </div>
                    <p>Our training facility trains the most qualified welders in the world.</p>
                    <div className="buttons">
                        <div className="btn-container">
                            <a href="/program">OUR PROGRAM</a>
                        </div>
                        <div className="btn-container">
                            <a href="/contacts">APPLY TO A COURSE</a>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div id="aboutUs" className="aboutUs">
                <div className='aboutUs_img'>
                    <img/>
                </div>
                <div className='shape_aboutUs'>
                    <div>
                        <h2>ABOUT US</h2>
                        <p>The Ida-Virumaa Vocational Education Center is an honorary vocational education institution in Estonia with 2,500 students, 3,000 vocational training participants and 270 employees.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}