import React from 'react'

export default function SignIn() {
    return (
        <div className="sign-in-page">
            <h1>Sign in</h1>
            <form action="/sign-in" method='POST'>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder='Username' />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder='Password' />
                </div>
                <div className="btn-container">
                    <button type="submit">ENTER</button>
                </div>
            </form>
        </div>
    )
}