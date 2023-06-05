import React from 'react';
import logo from '../assets/logo.svg'

export default function Header() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="ivkhk" />
                <div className="logo-text">
                    <p>IDA-VIRUMAA</p>
                    <p>KUTSEHARIDUSKESKUS</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="#top">Home</a></li>
                    <li><a  href="#aboutUs">About Us</a></li>
                    <li><a href="/program">Program</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="/team">Team</a></li>
                    <li><a href="/faq">FAQ</a></li>
                </ul>
                <div className="btn-container">
                    <a href="/contacts">Apply</a>
                </div>
            </nav>
        </header>
    )
}