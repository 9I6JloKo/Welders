import React from 'react';
import axios from 'axios';
import hariduskopter from '../assets/kopter_logo_300x169.png';
import noorteamet from '../assets/haridus-_ja_noorteamet_3lovi_est_rgb.png';
import sihtasutus from '../assets/integratsiooni-sihtasutus.png';
import kutsekoda from '../assets/kutsekoda-logo.png';

export default function Footer() {
    const logout = async () => {
        try {
            await axios.delete('http://localhost:5000/auth/logout')
                .then(() => {
                    sessionStorage.removeItem('username');
                    window.location.href = '/';
                });
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
            }
        }
    };

    return (
        <footer>
            <div className="top-row">
                <div className="column">
                    <h3>Partners</h3>
                    <div className="partners-container">
                        <div>
                            <div className="partner">
                                <img src={hariduskopter} alt="hariduskopter" />
                            </div>
                            <div className="partner">
                                <img src={noorteamet} alt="haridus ja noorteamet" />
                            </div>
                        </div>
                        <div>
                            <div className="partner">
                                <img src={sihtasutus} alt="integratsiooni sihtasutus" />
                            </div>
                            <div className="partner">
                                <img src={kutsekoda} alt="kutsekoda sihtasutus" />
                            </div>
                        </div>
                    </div>
                    <div className="btn-container">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        {sessionStorage.getItem('username') != null ? <a onClick={logout}>Logout</a>
                            : <a href="/sign-in">Sign in</a>
                        }
                    </div>
                    {sessionStorage.getItem('username') != null ? <a href='/requests'>Requests List</a> : null}
                </div>
                <div className="column">
                    <h3>General contact</h3>
                    <div className="general-contact-container">
                        <p>Ida-Virumaa Kutsehariduskeskus</p>
                        <p>Tallinna maantee 13 Sillamäe 40202</p>
                        <p>Telefon: <a href="tel:+3723320381">+372 3320 381</a></p>
                        <p>e-post: <a href="mailto:info@ivkhk.ee">info@ivkhk.ee</a></p>
                    </div>
                </div>
                <div className="column">
                    <h3>Important contacts</h3>
                    <div className="contact-container">
                        <div className="contact">
                            <p>Õppesekretär Jõhvi</p>
                            <a href="tel:+37258314037">+372 5831 4037</a>
                        </div>
                        <div className="contact">
                            <p>Õppesekretär Narva</p>
                            <div>
                                <a href="tel:+3723569343">+372 356 9343</a>
                                <a href="tel:+3725108560">+372 510 8560</a>
                            </div>
                        </div>
                        <div className="contact">
                            <p>Täiendusõppe kursused</p>
                            <div>
                                <a href="tel:+37256880405 ">+372 5688 0405</a>
                                <a href="tel:+3725261318">+372 526 1318</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="https://kutsehariduskeskus.ee/en" target="_blank" rel="noopener noreferrer">Homepage</a></li>
                    <li><a href="https://kutsehariduskeskus.ee/en/sitemap" target="_blank" rel="noopener noreferrer">Sitemap</a></li>
                    <li><a href="https://www.facebook.com/IVKHK" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://www.instagram.com/idavirumaa_kutsehariduskeskus/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://www.youtube.com/channel/UC6TPd9ePy3n-vFQRgtbhx-w" target="_blank" rel="noopener noreferrer">Youtube</a></li>
                    <li><a href="https://vk.com/ivkhk" target="_blank" rel="noopener noreferrer">VKontakte</a></li>
                    <li><a href="https://www.youtube.com/channel/UCLxa63lO1rkF62tv8d7P4Cw/videos" target="_blank" rel="noopener noreferrer">Kooli TV</a></li>
                </ul>
                <p>Copyright 2020 © Ida-Virumaa Kutsehariduskeskus</p>
            </nav>
        </footer>
    )
}