import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
    const [action, setAction] = useState('Sign Up');
    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === 'Login' ? (
                    <div></div>
                ) : (
                    <div className="input">
                        <i className="fa-solid fa-signature"></i>
                        <input type="text" placeholder="Name" />
                    </div>
                )}

                <div className="input">
                    <i className="fa-solid fa-at"></i>
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <i className="fa-solid fa-key"></i>
                    <input type="password" placeholder="Password" />
                </div>
                {action === 'Sign Up' ? (
                    <></>
                ) : (
                    <div className="forgot-password">
                        Lost Password? <span>Click Here!</span>
                    </div>
                )}
            </div>
            <div className="submit-container">
                <div
                    onClick={() => {
                        setAction('Sign Up');
                    }}
                    className={action === 'Login' ? 'submit grey' : 'submit'}>
                    Sign Up
                </div>
                <div
                    onClick={() => {
                        setAction('Login');
                    }}
                    className={action === 'Sign Up' ? 'submit grey' : 'submit'}>
                    Login
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
