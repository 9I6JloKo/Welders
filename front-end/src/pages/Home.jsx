/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Home({ program, contacts }) {
    function programClick() {
        program.current.scrollIntoView({ behavior: 'smooth' });
    }
    function contactsClick() {
        contacts.current.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div>
            <div className="main-page">
                <div className="left-side">
                    <div className="text">
                        <h1>Spark Your Skills,</h1>
                        <h1>Weld Your Dreams!</h1>
                    </div>
                    <p>Our training facility trains the most qualified welders in the world.</p>
                    <div className="buttons">
                        <div className="btn-container">
                            <a onClick={programClick}>OUR PROGRAM</a>
                        </div>
                        <div className="btn-container">
                            <a onClick={contactsClick}>APPLY TO A COURSE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}