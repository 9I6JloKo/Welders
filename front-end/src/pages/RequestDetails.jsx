/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

export default function RequestDetails() {
    const [request, setRequest] = useState({});
    const { id } = useParams();

    const getRequest = async () => {
        try {
            const request = await axios.get(`http://localhost:5000/requests/${id}`);
            setRequest(request.data);
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
            }
        }
    };
    const changeReuqestStatus = async (status) => {
        try {
            await axios.put(`http://localhost:5000/requests/${id}`, { status });
            getRequest();
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
            }
        }
    };
    useEffect(() => {
        getRequest();
    }, {});
    const city = request.City || {};
    const date = new Date(request.createdAt);
    const createdAt = date.toUTCString();
    const status = {};
    switch (request.status) {
        case 'pending':
            status.color = 'text-warning';
            break;
        case 'approved':
            status.color = 'text-success';
            break;
        case 'rejected':
            status.color = 'text-danger';
            break;
        default:
            status.color = 'text-warning';
            break;
    }
    return (
        <div className="request-page">
            <h1 className='text-center mb-4'>Request info</h1>
            <Card className='w-50 mx-auto my-5'>
                <Card.Body>
                    <Card.Title>{request.course}</Card.Title>
                    <Card.Subtitle className="mb-2" style={{ fontSize: '26px' }}>{city.name} linn</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                        Status: &nbsp;
                        <span className={status.color}>{request.status}</span>
                    </Card.Subtitle>
                    <Card.Text>{request.description}</Card.Text>
                    <Card.Text><b>Person:</b></Card.Text>
                    <ul className='mx-2' style={{ fontSize: '18px' }}>
                        <li><Card.Text>{request.name} {request.surname}</Card.Text></li>
                        <li><Card.Text>Birth date: {request.birthDate}</Card.Text></li>
                        <li><Card.Text>E-mail: {request.email}</Card.Text></li>
                        <li><Card.Text>Phone: +372 {request.phone}</Card.Text></li>
                    </ul>
                    <Card.Subtitle className="border-top my-1 pt-2 text-muted">Submitted: {createdAt}</Card.Subtitle>
                </Card.Body>
                <div className="buttons-container mx-2 my-2 d-flex justify-content-between">
                    <div className="action-btns w-75">
                        <Button variant='success' className='mx-1' onClick={() => changeReuqestStatus('approved')}>Approve</Button>
                        <Button variant='danger' onClick={() => changeReuqestStatus('rejected')}>Reject</Button>
                    </div>
                    <div className="back-btn w-25 d-flex justify-content-end">
                        <Button variant='primary' onClick={() => window.location = '/requests'} >Back</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}