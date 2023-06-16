import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Protected from './Protected';

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
import Requests from '../pages/Requests';
import RequestDetails from '../pages/RequestDetails';

export default (
    function Content({ refs }) {
        const [isAuthenticated, userHasAuthenticated] = useState(true);
        useEffect(() => {
            sessionStorage.getItem('username') != null
                ? userHasAuthenticated(true) : userHasAuthenticated(false);
        }, []);

        window.onload = function () {
            const url = window.location.href;
            const path = url.split('/')[3];
            switch (path) {
                case '#about-us':
                    refs.aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
                    break;
                case '#program':
                    refs.programRef.current.scrollIntoView({ behavior: 'smooth' });
                    break;
                case '#gallery':
                    refs.galleryRef.current.scrollIntoView({ behavior: 'smooth' });
                    break;
                case '#team':
                    refs.teachersRef.current.scrollIntoView({ behavior: 'smooth' });
                    break;
                case '#contacts':
                    refs.contactsRef.current.scrollIntoView({ behavior: 'smooth' });
                    break;
                case '#faq':
                    refs.faqRef.current.scrollIntoView({ behavior: 'smooth' });
                    break;
                default:
                    break;
            }
        }

        return (
            <div id='content'>
                <Router>
                    <Routes>
                        <Route exact path='/' element={
                            [
                                <section id='home' key={1} ref={refs.homeRef}>
                                    <Home program={refs.programRef} contacts={refs.contactsRef} />
                                </section>,
                                <section id='about-us' key={2} ref={refs.aboutUsRef}>
                                    <AboutUs program={refs.programRef} />
                                </section>,
                                <section id='statistics' key={3} ref={refs.statisticsRef}>
                                    <Statistics />
                                </section>,
                                <section id='program' key={4} ref={refs.programRef}>
                                    <Program contacts={refs.contactsRef} />
                                </section>,
                                <section id='gallery' key={5} ref={refs.galleryRef}>
                                    <Gallery />
                                </section>,
                                <section id='team' key={6} ref={refs.teachersRef}>
                                    <Teachers />
                                </section>,
                                <section id='contacts' key={7} ref={refs.contactsRef}>
                                    <Contacts />
                                </section>,
                                <section key={8} ref={refs.separatorRef}>
                                    <Separator />
                                </section>,
                                <section id='faq' key={9} ref={refs.faqRef}>
                                    <Faq />
                                </section>
                            ]
                        } />
                        <Route path='/sign-in' element={<SignIn />} />
                        <Route
                            path='/requests'
                            element={
                                <Protected isAuthenticated={isAuthenticated}>
                                    <Requests />
                                </Protected>
                            }
                        />
                        <Route
                            path='/requests/:id'
                            element={
                                <Protected isAuthenticated={isAuthenticated}>
                                    <RequestDetails />
                                </Protected>
                            }
                        />
                    </Routes>
                </Router>
            </div>
        );
    }
)
