import React from 'react';
import './header.css';
import mainLogo from '../../assets/images/main-logo.png';
import userIcon from '../../assets/images/user-icon.png';

const Header = (props) => {
    return (
        <div className="header">
            <div className="header-left"></div>
            <img className="header-logo" src={mainLogo}></img>
            <div className="header-right">
                <a href="#" className="header-list-place">List your place</a>
                <img className="user-profile" src={userIcon}></img>           
            </div>
        </div> 
    );
};

export default Header;