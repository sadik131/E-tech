import React from 'react';
import Heading from './About-heading/Heading';
import AboutStore from './About-store/AboutStore';
import AboutUs from './About-us/AboutUs';
import Features from './features/Features';

const About = () => {
    return (
        <div>
            <Heading></Heading>
            <AboutStore></AboutStore>
            <AboutUs></AboutUs>
            <Features></Features>
        </div>
    );
}

export default About;
