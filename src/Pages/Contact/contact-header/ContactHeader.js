import React from 'react';
import { Link } from 'react-router-dom';

const ContactHeader = () => {
    return (
        <div className='heading-container'>
            <div className='heading-link'>
                <Link to={"/"}>Home </Link>
                <Link to={"/about"}
                    className='link-active'>| Contact us</Link>
                <h1>Contact With Us</h1>
            </div>
            <div className='heading-img'>
                <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-45.png" alt="" />
            </div>
        </div>
    );
}

export default ContactHeader;
