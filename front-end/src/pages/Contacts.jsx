import React from 'react';
import location from '../assets/location-icon.svg';
import phone from '../assets/phone-icon.svg';
import mail from '../assets/mail-icon.svg';
import website from '../assets/website-icon.svg';

export default function Contacts() {
    return (
        <div className="contacts-page">
            <div className="top-container">
                <h1>Contacts</h1>
                <p>There are some information for additional contacts and you can also apply for a course here</p>
            </div>
            <div className="left-column w-50">
                <form action="/apply" method="post" className="d-flex w-100 flex-wrap gap-2">
                    <div className="form-row">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" placeholder="Name" required />
                        </div>
                        <div className="form-group">
                            <input type="text" name="surname" className="form-control" placeholder="Surname" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <input type="number" name="code" className="form-control" placeholder="Personal code" required />
                        </div>
                        <div className="form-group">
                            <input type="date" name="birthday" className="form-control" placeholder="Birth date" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <select name="course" id="course" className="form-control" defaultValue={''} required>
                                <option value="" disabled>Course</option>
                                <option value="semi-automatic">Welder (semi-automatic welding)</option>
                                <option value="welding-metal">Welding and metal processing</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select name="city" id="city" className="form-control" defaultValue={''} required>
                                <option value="" disabled>City</option>
                                <option value="Tallinn">Tallinn</option>
                                <option value="Narva">Narva</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <input type="email" name="email" className="form-control" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <input type="text" name="phone" className="form-control" placeholder="Phone" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group w-100">
                            <textarea className="form-control" name="description" placeholder='Extra information'></textarea>
                        </div>
                    </div>
                    <div className="btn-container">
                        <button type="submit">Apply to a course</button>
                    </div>
                </form>
            </div >

            <div className="right-column w-50">
                <div className="contact-row">
                    <div className="img-container">
                        <img src={location} alt="location" />
                    </div>
                    <div className="info-container">
                        <h4>Location</h4>
                        <p>Kutse 13, Jõhvi, 41533 Ida-Viru maakond</p>
                    </div>
                </div>
                <div className="contact-row">
                    <div className="img-container">
                        <img src={phone} alt="phone" />
                    </div>
                    <div className="info-container">
                        <h4>Phone</h4>
                        <p>+372 5887 7765</p>
                    </div>
                </div>
                <div className="contact-row">
                    <div className="img-container">
                        <img src={mail} alt="mail" />
                    </div>
                    <div className="info-container">
                        <h4>E-mail</h4>
                        <p><a href='mailto:info@ivkhk.ee'>info@ivkhk.ee</a></p>
                    </div>
                </div>
                <div className="contact-row">
                    <div className="img-container">
                        <img src={website} alt="ivkhk" />
                    </div>
                    <div className="info-container">
                        <h4>Website</h4>
                        <p><a href='https://kutsehariduskeskus.ee'>https://kutsehariduskeskus.ee</a></p>
                    </div>
                </div>
            </div>
        </div >
    )
}