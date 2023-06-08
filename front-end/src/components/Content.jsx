import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Statistics from '../pages/Statistics';
import Program from '../pages/Program';
import Gallery from '../pages/Gallery';
import Teachers from '../pages/Teachers';
import Contacts from '../pages/Contacts';
import Separator from '../pages/Separator';
import Faq from '../pages/Faq';

import SignIn from '../pages/SignIn';

export default function Content() {
    return (
        <div id="content">
            <Router>
                <Routes>
                    <Route exact path='/' element={
                        [
                            <Home />,
                            <AboutUs />,
                            <Statistics />,
                            <Program />,
                            <Gallery />,
                            <Teachers />,
                            <Contacts />,
                            <Separator />,
                            <Faq />,
                        ]
                    } />
                    <Route path='/sign-in' element={<SignIn />} />
                </Routes>
            </Router>
        </div>
    )
}