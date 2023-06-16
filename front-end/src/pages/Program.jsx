import React from 'react';
import timer from '../assets/timer-icon.svg';

export default function Program({ contacts }) {
    function contactsClick() {
        contacts.current.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div className="program-page">
            <div className="gray-bg"></div>
            <div className="relative-container">
                <div className="left-column">
                    <h1>Program</h1>
                    <div className="program-container">
                        <div className="program">
                            <h3>Welder (semi-automatic welding)</h3>
                            <h4>Narva</h4>
                            <div className="program-duration">
                                <img src={timer} alt="duration" />
                                <p>1 year of education</p>
                            </div>
                            <ul>
                                <li>Russian language</li>
                                <li>Stationary (evening) school-based education</li>
                                <li>Level 4 (primary vocational training)</li>
                                <li>Only basic education required</li>
                                <li>Entrance test required</li>
                            </ul>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a onClick={contactsClick} className="btn-container">
                                <button>Continue</button>
                            </a>
                        </div>
                        <div className="program-description">
                            <p>
                                During their studies, students acquire theoretical knowledge
                                and practical skills in the field of semi-automatic (MIG) and manual arc welding (MMA).
                                A welder can find a suitable job in construction,
                                mechanical engineering, machine tool building, metallurgy,
                                automotive and shipbuilding.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="right-column">
                    <div className="profession-container">
                        <div className="profession-description">
                            <p>
                                Welding is currently a highly demanded profession.
                                Welding is the connection of products without fastening.
                                Welding works are carried out in all industries: in mechanical engineering,
                                machine tool building, metallurgy, and more.
                            </p>
                        </div>
                        <h1>Profession</h1>
                    </div>

                    <div className="program-container">
                        <div className="program-description">
                            <p>
                                During training, the welder acquires theoretical knowledge
                                and practical skills in the field of semi-automatic (MIG) and manual arc welding (MMA).
                                The fitter-assembler assembles assembly units of varying degrees of complexity.
                                The operator of CNC metal cutting machines is able to create control programs,
                                set up machines and produce CNC parts on turning and milling machines.
                            </p>
                        </div>
                        <div className="program">
                            <h3>Welding and metal processing</h3>
                            <h4>Narva, Jõhvi</h4>
                            <div className="program-duration">
                                <img src={timer} alt="duration" />
                                <p>3 year of education</p>
                            </div>
                            <ul>
                                <li>Estonian 60% / Russian 40%</li>
                                <li>Stationary (daytime) school-based education</li>
                                <li>Level 4 (primary secondary vocational training)</li>
                                <li>Only basic education required</li>
                                <li>Entrance test required</li>
                            </ul>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a onClick={contactsClick} className="btn-container">
                                <button>Continue</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}