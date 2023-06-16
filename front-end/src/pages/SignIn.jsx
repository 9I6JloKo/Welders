import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signIn = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/auth/sign-in`, { username, password })
                .then(() => {
                    sessionStorage.setItem('username', username);
                    navigate('/requests');
                    window.location.reload();
                });
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
            }
        }
    };
    return (
        <div className="sign-in-page w-25 mx-auto mt-5">
            <h1>Sign in</h1>
            <Form onSubmit={signIn} className="w-75 mx-auto">
                <Form.Group className="my-4" controlId="formBasicEmail">
                    <Form.Control type="text" value={username} name='username'
                        onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type='password' value={password} name='password'
                        onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                <div className="btn-container mt-4 w-100 mx-auto">
                    <button type="submit">ENTER</button>
                </div>
            </Form>
        </div>
    )
}