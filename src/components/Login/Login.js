import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import {database, errors} from '../../users';
import { useNavigate } from 'react-router-dom';


export default function Login({ setToken }) {
    const [errorMessages, setErrorMessages] = useState({});
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();

        const userData = database.find((user) => user.username === username);
        
        if (userData !== undefined) {
            if (userData.password !== password) {
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                
                const token ={
                    username,
                    password
                };
                setToken(token);
                
                navigate("/Dashboard", {setToken: token});  
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    }

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );

    return(
        <div className='LoginBody'>
            <div className="wrapper">
                <div className="header">
                <a href="/Netlify/">
                    <svg viewBox="0 0 111 30" fill="#e50914" id="netflix-logo" width="100%" height="100%">    <path d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z"></path></svg> 
                </a>          
                </div>

                <div className="login">
                <form className="signin-form" onSubmit={handleSubmit}>
                    <h1 className="title">Sign In</h1>

                    <div className="field">
                        <input type="text" sname="uname" className="text-input" required onChange={e => setUserName(e.target.value)} />
                        <span className="floating-label">Email address or phone number</span>
                        {renderErrorMessage("uname")}
                    </div>

                    <div className="field">
                        <input type="password"  name="pass" className="text-input" required onChange={e => setPassword(e.target.value)} />
                        <span className="floating-label test">Password</span>
                        {renderErrorMessage("pass")}
                    </div>

                    <button className="signin-btn">Sign In</button>

                    <div className="action-group">
                    <label htmlFor="remember-me">
                        <input type="checkbox" className="checkbox" id="remember-me" />
                        Remember me
                    </label>
                    <a href='/Netlify/Login'>Need Help?</a>
                    </div>

                    <div className="onboarding">
                        <div style={{cursor:'pointer'}}>
                            <img height={'20px'} width={'20px'} className="icon-facebook" src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" alt='Facebook Icon' />
                            <small>Login with facebook</small>
                        </div>
                        <p>New to Netflix? <a href='/Netlify/Login'>Sign up now.</a></p>
                        <br/>
                        <small><span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>&nbsp;<button className="recaptcha-terms-of-use--link-button" data-uia="recaptcha-learn-more-button">Learn more.</button></small>
                    </div>
                </form>
                </div>

                <div className="footer">
                <div className="container" style={{color:'#757575', padding:'5px'}}>
                    <p className="questions">Questions? Contact us.</p>
                    <div className="terms">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12"><a href='/Netlify/Login'>FAQ</a></div>
                        <div className="col-lg-3 col-md-6 col-sm-12"><a href='/Netlify/Login'>Help Center</a></div>
                        <div className="col-lg-3 col-md-6 col-sm-12"><a href='/Netlify/Login'>Terms of Use</a></div>
                        <div className="col-lg-3 col-md-6 col-sm-12"><a href='/Netlify/Login'>Privacy</a></div>
                        <div className="col-lg-3 col-md-6 col-sm-12"><a href='/Netlify/Login'>Cookie Preferences</a></div>
                        <div className="col-lg-3 col-md-6 col-sm-12"><a href='/Netlify/Login'>Corporate Information</a></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};