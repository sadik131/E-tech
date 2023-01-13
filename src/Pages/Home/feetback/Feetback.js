import React from 'react';
import "./Feetback.css"
import { FaQuoteRight } from 'react-icons/fa';

const feetback = [
    { id: 1, name: "James C. Anderson", job: "Head of idea", img: "https://new.axilthemes.com/demo/template/etrade/assets/images/testimonial/image-1.png", message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged" },
    { id: 2, name: "James C. Anderson", job: "Head of idea", img: "https://new.axilthemes.com/demo/template/etrade/assets/images/testimonial/image-2.png", message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged" },
    { id: 3, name: "James C. Anderson", job: "Head of idea", img: "https://new.axilthemes.com/demo/template/etrade/assets/images/testimonial/image-3.png", message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged" },
]

const Feetback = () => {
    return (
        <div className='feetback-container'>
            <div className='feetback-titel'>
                <div className='feetback-icon'>
                    <FaQuoteRight />
                </div>
                <h3>Testimonials</h3>
            </div>
            <h1>Users Feedback</h1>
            <div className='feetback-cards'>
                {
                    feetback.map(user => {
                        const { id, name, job, message, img } = user
                        return <div key={id} className='feetback-card'>
                            <div className='feetback-user'>
                                <img src={img} />
                                <div className='user-detail'>
                                    <p>{job}</p>
                                    <h1>{name}</h1>
                                </div>
                            </div>
                            <div className='feetback'>
                                <p>{message}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Feetback;
