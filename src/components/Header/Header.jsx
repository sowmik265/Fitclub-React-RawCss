import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={Logo}></img>
            <ul className='header-menu'>
                <li>Home</li>
                <li>Programs</li>
                <li>Why us</li>
                <li>Plans</li>
                <li>Tesimonials</li>
            </ul>
        </div>
    );
};

export default Header;