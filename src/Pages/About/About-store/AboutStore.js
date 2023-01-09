import React from 'react';
import "./AboutStore.css"
import { BsFillBasket3Fill } from 'react-icons/bs';


const AboutStore = () => {
    return (
        <div className='aboutStore-container'>
            <div className='store-img'>
                <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/about/about-01.png" alt="" />
            </div>
            <div className='store-title'>
                <div className='store-icon-section'>
                    <div className='store-icon'>
                        <BsFillBasket3Fill />
                    </div>
                    <h1>About Store</h1>
                </div>
                <div className='title-discription'>
                    <h1>Online shopping includes both buying things online.</h1>
                    <h5>Salesforce B2C Commerce can help you create unified, intelligent digital commerce experiences — both online and in the store.</h5>
                    <p>Empower your sales teams with industry tailored solutions that support manufacturers as they go digital, and adapt to changing markets & customers faster by creating new business.</p>
                    <p>Salesforce B2B Commerce offers buyers the seamless, self-service experience of online shopping with all the B2B</p>
                </div>
            </div>
        </div>
    );
}

export default AboutStore;
