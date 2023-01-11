import React from 'react';
import BannerSlider from '../banner/BannerSlider';
import SimpleSlider from '../category/Category';
import Category from '../category/Category';
import Collection from '../collection/Collection';
import Facility from '../facility/Facility';
import TopProduct from '../top-product/TopProduct';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <SimpleSlider></SimpleSlider>
            <TopProduct></TopProduct>
            {/* 1 */}
            {/* 2 */}
            {/* 3 */}
            {/* 4 */}
            <Facility></Facility>
            <Collection></Collection>
        </div>
    );
}

export default Home;
