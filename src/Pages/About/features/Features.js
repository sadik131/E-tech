import React from 'react';
import "./Features.css"

const Features = () => {
    return (
<>
        <div className='feature-container'>
            <div className='feature-img'>
                <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/about/about-02.png" alt="" />
            </div>
            <div className='feature-title'>
                <h3>Features #01</h3>
                <h1>Solutions that work together</h1>
                <p>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>
                <button>Get In Touch</button>
            </div>
        </div>
        <div className='feature-container'>
            <div className='feature-title'>
                <h3>Features #02</h3>
                <h1>Solutions that work together</h1>
                <p>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>
                <button>Get In Touch</button>
            </div>
            <div className='feature-img'>
                <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/about/about-03.png" alt="" />
            </div>
        </div>
        </>
    );
}

export default Features;
