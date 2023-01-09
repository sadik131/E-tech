import React from 'react';
import { Link } from 'react-router-dom';
import "./Ads.css"
import { RxCross1 } from 'react-icons/rx';


const Ads = ({setShow}) => {
    return (
        <div className='ad-container'>
            <h3>Open Doors To A World Of Fashion <span><Link to={"/"}>Discover More</Link></span></h3>
            <RxCross1 onClick={()=>setShow(false)} className='icon'/>
        </div>
    );
}

export default Ads;
