import React from 'react';
import "./News.css"
import { FaEnvelope } from 'react-icons/fa';


const News = () => {
    return (
        <div className='news-container'>
            <div>
                <div className='top-titel'>
                    <div className='top-icon'>
                        <FaEnvelope />
                    </div>
                    <h1>Newsletter</h1>
                </div>
                <h1>Get weekly update</h1>
                <form>
                    <input type="email" placeholder='example@gmail.com' />
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
    );
}

export default News;
