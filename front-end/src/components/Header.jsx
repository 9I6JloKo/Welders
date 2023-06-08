import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function Header() {
    return (
        // <header>
        //     <div className="logo">
        //         <img src={logo} alt="ivkhk" />
        //         <div className="logo-text">
        //             <p>IDA-VIRUMAA</p>
        //             <p>KUTSEHARIDUSKESKUS</p>
        //         </div>
        //     </div>
        //     <nav>
        //         <ul>
        //             <li><a href="#top">Home</a></li>
        //             <li><a  href="#aboutUs">About Us</a></li>
        //             <li><a href="/program">Program</a></li>
        //             <li><a href="#gallery">Gallery</a></li>
        //             <li><a href="/team">Team</a></li>
        //             <li><a href="/faq">FAQ</a></li>
        //         </ul>
        //         <div className="btn-container">
        //             <a href="/contacts">Apply</a>
        //         </div>
        //     </nav>
        // </header>

        <Navbar className='header' collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">
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
                    <div className="btn-container">
                        <a href="#contacts">Apply</a>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}