import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

export default function Requests() {
    const [requests, setRequests] = useState([]);
    const getRequests = async () => {
        try {
            const requests = await axios.get(`http://localhost:5000/requests`);
            setRequests(requests.data);
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
            }
        }
    };
    useEffect(() => {
        getRequests();
    }, []);

    return (
        <div className="requests-page w-50 mx-auto mt-4">
            <h1>Requests List</h1>
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>E-mail</th>
                        <th>Personal Code</th>
                        <th>Course</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map(request => {
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
                            <tr key={request.id}>
                                <td><b>{request.id}</b></td>
                                <td>{request.email}</td>
                                <td>{request.personalCode}</td>
                                <td>{request.course}</td>
                                <td className={status.color}>{request.status}</td>
                                <td>
                                    <div className="btn-container w-100">
                                        <button onClick={() => window.location = `/requests/${request.id}`}>Details</button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}