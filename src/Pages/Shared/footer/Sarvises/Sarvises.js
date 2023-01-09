import React from 'react';
import "./Sarvises.css"
import sarvses from "../../../../data/sarvises"

const Sarvises = () => {
    return (
        <div className='sarvises-container'>
            <div className='sarvises'>
                {
                    sarvses.map(sarvise=>{
                        const {id , img , title , text} = sarvise;
                        return <div key={id}
                        className='sarvis-card'>
                        <img src={img} alt="" />
                        <div className='sarvis-body'>
                        <h3>{title}</h3>
                        <p>{text}</p>
                        </div>
                    </div>
                    })
                }
                {/*  */}
            </div>
        </div>
    );
}

export default Sarvises;
