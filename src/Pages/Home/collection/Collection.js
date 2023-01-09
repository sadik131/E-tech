import React from 'react';
import "./Collection.css"
const Collection = () => {
    return (
        <div className='collection-container'>
            <div className='rich-collection'>
                <div className='collection-titel'>
                    <h1>Rich sound,<br/>for less</h1>
                    <button>collections</button>
                </div>
            </div> 
            <div className='vr-collection'>
                <div className='collection-titel'>
                    <p>50% offer in winter</p>
                    <h1>Get VR,<br/>Reality Glass</h1>
                </div>
            </div> 
            
        </div>
    );
}

export default Collection;
