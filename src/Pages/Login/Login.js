import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    return (
        <div className='login-container'>
            <div className='img-container'>
                <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/bg/bg-image-9.jpg" alt="" />
                <div className='banner-content'>
                    <img className='logo' src="https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png" alt="" />
                    <h1>We Offer the Best Products</h1>
                </div>
            </div>
            <div className='login-form'>
                <div className='form-header'>
                    <h4>Not a member ?</h4>
                    <Link to="/signup">Sign up now</Link>
                </div>
                <form>
                    <h1>Sign in to eTrade.</h1>
                    <h3>Enter your detail below</h3>
                    <input type="email" placeholder='Enter Your Email' />
                    <input type="password" placeholder='Enter Your Password' />
                    <div className='form-button'>
                        <button className='signIn'>Sign In</button>
                        <button className='forget'>Forget Password ?</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
