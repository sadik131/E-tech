import React from 'react';
import "./TopProduct.css"
import { CiHeadphones } from 'react-icons/ci';

const TopProduct = () => {
    return (
        <div className='top-container'>
            <div className='top-titel'>
                <div className='top-icon'>
                <CiHeadphones />
                </div>
                <h1>Don’t Miss!!</h1>
            </div>
            <div className='poster'>
                <div className='poster-discription'>
                    <h1>Enhance Your Music Experience</h1>
                    <div className='timming'>
                        <div className='time'>
                            <span>0</span>
                            <span>Day</span>
                        </div>
                        <div className='time'>
                            <span>00</span>
                            <span>Hrs</span>
                        </div>
                        <div className='time'>
                            <span>00</span>
                            <span>Min</span>
                        </div>
                        <div className='time'>
                            <span>00</span>
                            <span>Sec</span>
                        </div>
                    </div>
                    <button className='btn-check'>
                        Check it Out!
                    </button>
                </div>
                <div className='poster-banner'>
                    <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/poster/poster-03.png" alt="" />
                </div>

            </div>
        </div>
    );
}

export default TopProduct;
