import React from 'react';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Statistics from '../pages/Statistics';
import Program from '../pages/Program';

export default function Content() {
    return (
        <div id="content">
            <Home />
            <AboutUs />
            <Statistics />
            <Program />
        </div>
    )
}