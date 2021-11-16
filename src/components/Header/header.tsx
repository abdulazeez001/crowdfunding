/* eslint-disable jsx-a11y/anchor-is-valid */

import React,{ FC } from "react";
import { IconHamburger, ImageHeroDesktop, ImageHeroMobile, Logo } from "../../assets";


const Header:FC = () =>{
    return(
            <header >
                <img src={ImageHeroMobile} alt="" className="mobile-hero"/>
                <img src={ImageHeroDesktop} alt="" className="desktop-hero"/>
                <div className="container head-content">
                    <div>
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="navigations">
                        <ul>
                            <li><a href="#">About</a></li>
            
                            <li><a href="#">Discover</a></li>
            
                            <li><a href="#">Get Started</a></li>
                        </ul>
                    </div>
                    <div>
                        <img src={IconHamburger} alt="" />
                    </div>
                </div>
            </header>
    )
}

export default Header;