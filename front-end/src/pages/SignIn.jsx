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
            await axios.post(`http://localhost:5000/auth/sign-in`, { username, password });
            sessionStorage.setItem('username', username);
            navigate('/requests');
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.message);
            }
        }
    };

    return (
        <div className="sign-in-page mx-auto p-5">
            <Form onSubmit={signIn}>
                <h1>Sign in</h1>
                <Form.Group className='my-4'>
                    <Form.Control type='text' name='username' placeholder='Username'
                        onChange={(e) => setUsername(e.target.value)} value={username} required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control type='password' name='password' placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)} value={password} required
                    />
                </Form.Group>
                <div className="btn-container mt-4 w-100">
                    <button type="submit" className='w-100'>ENTER</button>
                </div>
            </Form>
        </div>
    )
}