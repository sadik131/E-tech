import React from 'react';
import "./OurProduct.css"
import { AiFillStar } from 'react-icons/ai';
import products from '../../../data/products';


const OurProduct = () => {
    return (
        <div className='product-container'>
            <div className='product-cards'>
                {
                    products.map(product => {
                        const { id, img, price, delPrice, name } = product
                        return <div key={id} className='Product-card'>
                            <img src={img} alt="" />
                            <h2>{name}</h2>
                            <div className='star-icon'>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <div className='prodcut-price'>
                                <h1>{price}</h1>
                                <h2><del>{delPrice}</del></h2>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default OurProduct;
