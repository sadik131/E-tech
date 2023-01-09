import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css"
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
const Nav = () => {
    return (
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
                <GiHamburgerMenu/>
                </div>
            </div>
        </div>
    );
}

export default Nav;
