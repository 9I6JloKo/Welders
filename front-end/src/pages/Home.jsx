import React from 'react';

export default function Home() {
    return (
        <div className="main-page">
            <div className="left-side">
                <div className="text">
                    <h1>Spark Your Skills,</h1>
                    <h1>Weld Your Dreams!</h1>
                </div>
                <p>Our training facility trains the most qualified welders in the world.</p>
                <div className="buttons">
                    <div className="btn-container">
                        <a href="/program">Out program</a>
                    </div>
                    <div className="btn-container">
                        <a href="/contacts">Contact us</a>
                    </div>
                </div>
            </div>
        </div>
    )
}