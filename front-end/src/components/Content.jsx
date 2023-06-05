import React from 'react';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Statistics from '../pages/Statistics';
import Gallery from '../pages/Gallery';

export default function Content() {
    return (
        <div id="content">
            <Home />
            <AboutUs />
            <Statistics />
            <Gallery />
        </div>
    )
}