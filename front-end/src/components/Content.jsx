import React from 'react';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Statistics from '../pages/Statistics';
import Program from '../pages/Program';
import Gallery from '../pages/Gallery';
import Teachers from '../pages/Teachers';
import Contacts from '../pages/Contacts';

export default function Content() {
    return (
        <div id="content">
            <Home />
            <AboutUs />
            <Statistics />
            <Program />
            <Gallery />
            <Teachers />
            <Contacts />
        </div>
    )
}