import React from 'react';
import aboutCard from '../../../data/AboutCard';
import "./AboutUs.css"


const AboutUs = () => {
    return (
        <div className='about-container'>
            {
                aboutCard.map(card=>{
                    const {id , img , title , text} = card
                    return <div className='about-card'>
                    <div key={id}className='Acard-header'>
                        <img src={img} alt="" />
                    </div>
                    <div className='Acard-text'>
                        <h1>{title}</h1>
                        <p>{text}</p>
                    </div>
                </div>
                })
            }
            {/*  */}
        </div>
    );
}

export default AboutUs;
