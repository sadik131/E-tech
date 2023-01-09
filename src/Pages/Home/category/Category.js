import React from 'react';
import Carousel from 'react-multi-carousel';
import "./Category.css"
import 'react-multi-carousel/lib/styles.css';
import category from '../../../data/category';
import Items from './Items';
import { AiOutlineTags } from 'react-icons/ai';


const Category = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='cat-container'>
            <div className='cat-titel'>
                <div className='cat-icon'>
                <AiOutlineTags />
                </div>
                <h1>Browse by Category</h1>
            </div>
            <Carousel responsive={responsive}
                infinite={true}
            >
                {
                    category.map(cat => <Items key={cat.id} cat={cat}></Items>)
                }
            </Carousel>
        </div>
    );
}

export default Category;
