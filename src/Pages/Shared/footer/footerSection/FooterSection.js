import React from 'react';
import "./FooterSection.css"
import { AiOutlineMail , AiFillPhone} from 'react-icons/ai';


const FooterSection = () => {
    return (
        <div>
            <div className='hr'></div>
            <div className='footer-container'>
                <div className='footer'>
                    {/* support */}
                    <div className='Support'>
                        <h3 className='title'>
                            Support
                        </h3>
                        <span>685 Market Street, <br/>
                            Las Vegas, LA <br/> 95820,<br/>
                            United States.</span>
                        <p> <span><AiOutlineMail /></span> Salatussadik131@gmail.com</p>
                        <p> <span><AiFillPhone /></span> 01788233938</p>
                    </div>
                    {/* account */}
                    <div className='Account'>
                        <h3 className='title'>Account</h3>
                        <p>My Account</p>
                        <p>Login / Register</p>
                        <p>Cart</p>
                        <p>Wishlist</p>
                        <p>Shop</p>
                    </div>
                    {/* account quick */}
                    <div className='Quick-Link'>
                        <h3 className='title'>Quick Link</h3>
                        <p>Privacy Policy</p>
                        <p>Terms Of Use</p>
                        <p>FAQ</p>
                        <p>Contact</p>
                    </div>
                    {/* download app */}
                    <div className='Download-App'>
                        <h3>Download App</h3>
                        <p>Save $3 With App & New User only</p>
                        <div className='download'>
                            <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/others/qr.png" alt="" />
                            <div className='download-link'>
                                <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/others/app-store.png" alt="" />
                                <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/others/play-store.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterSection;
