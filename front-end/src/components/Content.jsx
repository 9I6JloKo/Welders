import React from 'react';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Statistics from '../pages/Statistics';
import Program from '../pages/Program';
import Gallery from '../pages/Gallery';
import Teachers from '../pages/Teachers';
import Contacts from '../pages/Contacts';
import Separator from '../pages/Separator';
import Faq from '../pages/Faq';

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
            <Separator />
            <Faq />
        </div>
    )
}