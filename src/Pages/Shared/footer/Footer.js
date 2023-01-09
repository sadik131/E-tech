import React from 'react';
import FooterSection from './footerSection/FooterSection';
import News from './News/News';
import Sarvises from './Sarvises/Sarvises';

const Footer = () => {
    return (
        <div>
            <News></News>
            <Sarvises></Sarvises>
            <FooterSection></FooterSection>
        </div>
    );
}

export default Footer;
