import React from 'react';
import BannerSlider from '../banner/BannerSlider';
import SimpleSlider from '../category/Category';
import Category from '../category/Category';
import Collection from '../collection/Collection';
import Facility from '../facility/Facility';
import Feetback from '../feetback/Feetback';
import OurProduct from '../products/OurProduct';
import TopProduct from '../top-product/TopProduct';

const Home = () => {
    return (
        <div>
            <BannerSlider></BannerSlider>
            <SimpleSlider></SimpleSlider>
            <TopProduct></TopProduct>
            <OurProduct></OurProduct>
            <Feetback></Feetback>
            {/* 3 */}
            {/* 4 */}
            <Facility></Facility>
            <Collection></Collection>
        </div>
    );
}

export default Home;
