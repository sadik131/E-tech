import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css"
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';

const Nav = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    return (
        <>
            <div className='nav-container'>
                <div className='nav'>
                    <div className='logo'>
                        <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png" alt="" />
                    </div>
                    <div className='nav-link'>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/about"}>About</Link>
                        <Link to={"/blog"}>Blog</Link>
                        <Link to={"/contact"}>Contact</Link>
                        <Link to={"/login"}>Login</Link>
                    </div>
                    <div className='icons'>
                        < AiOutlineSearch />
                        < AiOutlineHeart />
                        < AiOutlineShoppingCart />
                        <AiOutlineUser />
                    </div>
                    <div className='hamburger'>
                        <GiHamburgerMenu onClick={()=>setActiveMenu(!activeMenu)}/>
                    </div>
                </div>
            </div>
            <div className={activeMenu ? "mobile-menu active":"mobile-menu"}>                      
            <div className='cross'><RxCross1 onClick={()=>setActiveMenu(!activeMenu)}/></div>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/blog"}>Blog</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/login"}>Login</Link></div>
        </>
    );
}

export default Nav;
