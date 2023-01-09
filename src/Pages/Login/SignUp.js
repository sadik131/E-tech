import React from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css"

const SignUp = () => {
    return (
        <div className='signIn-container'>
            <div className='img-container'>
                <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/bg/bg-image-10.jpg" alt="" />
                <div className='banner-content'>
                    <img className='logo' src="https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png" alt="" />
                    <h1>We Offer the Best Products</h1>
                </div>
            </div>
            <div className='signIn-form'>
                <div className='form-header'>
                    <h4>Already a member? ?</h4>
                    <Link to="/login">Sign In</Link>
                </div>
                <form>
                    <h1>I'm New Here</h1>
                    <h3>Enter your detail below</h3>
                    <input type="text" placeholder='User name' />
                    <input type="email" placeholder='Enter Your Email' />
                    <input type="password" placeholder='Enter Your Password' />
                    <div className='form-button'>
                        <button className='signIn'>Creat Account</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
