import React from 'react';
import "./Facility.css"
import { AiOutlineLike } from 'react-icons/ai';
import facility from './facility-card';

const Facility = () => {
    return (
        <div className='facility-container'>
            <div className='titel'>
                {/* <div className='facility-icon'>
                    <AiOutlineLike />
                    <span>Why Us</span>
                </div> */}
                <h1>Why People Choose Us</h1>
            </div>
            <div className='facility-cards'>
                {
                    facility.map(item => {
                        const { id, img, facility } = item
                        return <div key={id}className='facility-card'>
                            <img src={img}alt="" />
                            <h3>{facility}</h3>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Facility;
