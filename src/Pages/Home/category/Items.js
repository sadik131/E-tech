import React from 'react';
import "./Items.css"
const Items = ({ cat }) => {
    const {img , name} = cat
    return (
        <div className='item-container'>
            <img src={img} alt="" />
            <h1>{name}</h1>
        </div>
    );
}

export default Items;
