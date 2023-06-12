import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Nav, Navbar } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar className='header' collapseOnSelect expand="lg">
            <Navbar.Brand href="/">
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
                <Nav>
                    <Nav.Link className='text-center' href="#top">Home</Nav.Link>
                    <Nav.Link className='text-center' href="#about">About Us</Nav.Link>
                    <Nav.Link className='text-center' href="#program">Program</Nav.Link>
                    <Nav.Link className='text-center' href="#gallery">Gallery</Nav.Link>
                    <Nav.Link className='text-center' href="#team">Team</Nav.Link>
                    <Nav.Link className='text-center' href="#faq">FAQ</Nav.Link>
                    <div className="btn-container nav-link-apply">
                        <a href="#contacts">Apply</a>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}