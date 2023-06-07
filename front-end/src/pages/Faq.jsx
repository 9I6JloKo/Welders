import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import accrodionData from '../data/faqs.json';
import hanza from '../assets/hanza.png';
import getpro from '../assets/get-a-pro.svg';
import fortaco from '../assets/fortaco.svg';
import energia from '../assets/eesti-energia.png';

export default function Faq() {
    return (
        <div className="faq-page">
            <div className="gray-bg"></div>
            <div className="faq-container d-flex">
                <div className="column w-50">
                    <h2 className='faq-heading'>Our partners</h2>
                    <div className="partners-list">
                        <div className="partner-container">
                            <img src={hanza} alt="hanza" />
                        </div>
                        <div className="partner-container">
                            <img src={getpro} alt="get a pro" />
                        </div>
                        <div className="partner-container">
                            <img src={fortaco} alt="fortaco" />
                        </div>
                        <div className="partner-container">
                            <img src={energia} alt="eesti energia" />
                        </div>
                    </div>
                </div>

                <div className="column w-50">
                    <h2 className='faq-heading'>FAQ</h2>
                    <Accordion defaultActiveKey="1">
                        {accrodionData.map((data, index) => (
                            <Accordion.Item eventKey={index} key={index}>
                                <Accordion.Header>
                                    {data.name}
                                </Accordion.Header>
                                <Accordion.Body>{data.description}</Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}