/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Nav, Navbar } from 'react-bootstrap';
import axios from 'axios';

export default function Header({ refs, defaultHeader }) {
    const [mainPage, setMainPage] = useState(true);
    const [isAuthenticated, userHasAuthenticated] = useState(true);
    useEffect(() => {
        const url = window.location.pathname;
        const main = url === '/' ? true : false;
        setMainPage(main);
        sessionStorage.getItem('username') != null
            ? userHasAuthenticated(true) : userHasAuthenticated(false);
    }, []);

    function homeClick() {
        if (mainPage) {
            window.history.replaceState(null, '', '/');
            refs.homeRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '/';
        }
    }
    function aboutUsClick() {
        if (mainPage) {
            window.history.replaceState(null, '', '/');
            refs.aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '/#about-us';
        }
    }
    function programClick() {
        if (mainPage) {
            window.history.replaceState(null, '', '/');
            refs.programRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '/#program';
        }
    }
    function galleryClick() {
        if (mainPage) {
            window.history.replaceState(null, '', '/');
            refs.galleryRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '/#gallery';
        }
    }
    function teachersClick() {
        if (mainPage) {
            window.history.replaceState(null, '', '/');
            refs.teachersRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '/#team';
        }
    }
    function contactsClick() {
        if (mainPage) {
            window.history.replaceState(null, '', '/');
            refs.contactsRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '/#contacts';
        }
    }
    function faqClick() {
        if (mainPage) {
            window.history.replaceState(null, '', '/');
            refs.faqRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = '/#faq';
        }
    }

    const logout = () => {
        axios.delete('http://localhost:5000/auth/logout')
            .then(() => {
                sessionStorage.removeItem('username');
                window.location.href = '/sign-in';
            });
    };

    return (
        <Navbar id='header' className='header' collapseOnSelect expand="lg">
            <Navbar.Brand href={!defaultHeader && isAuthenticated ?  '/requests' : '/'}>
                <Logo
                    alt="IVKHK"
                    className="d-inline-block align-top"
                />
                <div className='logo-text'>
                    <p>IDA-VIRUMAA</p>
                    <p>KUTSEHARIDUSKESKUS</p>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                {!defaultHeader && isAuthenticated ?
                    <Nav>
                        <Nav.Link className='text-center' href='/requests'>Requests</Nav.Link>
                        <Nav.Link className='text-center' href='/'>Home</Nav.Link>
                        <div className="btn-container"
                            onMouseOver={(e) => e.target.classList.add('text-white')}
                            onMouseOut={(e) => e.target.classList.remove('text-white')}
                        >
                            <a onClick={logout}>Logout</a>
                        </div>
                    </Nav>
                    :
                    <Nav>
                        <Nav.Link className='text-center' onClick={homeClick}>Home</Nav.Link>
                        <Nav.Link className='text-center' onClick={aboutUsClick}>About Us</Nav.Link>
                        <Nav.Link className='text-center' onClick={programClick}>Program</Nav.Link>
                        <Nav.Link className='text-center' onClick={galleryClick}>Gallery</Nav.Link>
                        <Nav.Link className='text-center' onClick={teachersClick}>Team</Nav.Link>
                        <Nav.Link className='text-center' onClick={faqClick}>FAQ</Nav.Link>
                        <div className="btn-container nav-link-apply">
                            <a onClick={contactsClick}>Apply</a>
                        </div>
                    </Nav>
                }
            </Navbar.Collapse>
        </Navbar >
    )
}