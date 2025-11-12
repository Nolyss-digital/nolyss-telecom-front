/**
 * @module Template-Header-Style-3
 */

import { NavLink } from "react-router-dom";
import { loadScript, navUrl } from "../../../../globals/common-functions";
import { route } from "../../../../globals/constants";
import { useEffect, useState } from "react";
import AvertImage from "../../../../globals/elements/avertimg";
import SectionHeaderNavMenu from "../navigation/nav-menu";

/**
 * 
 * @returns Markup for Header Style 3 for template
 */
const SectionHeader3 = () => {

    const [isDrawerVisible, setIsDrawerVisible] = useState(false);

    const toggleNavDrawer = () => {
        setIsDrawerVisible(!isDrawerVisible);
    }

    useEffect(()=>{
        loadScript("js/nav-menu.js");
    })
    
    return (
        <header className={"site-header header-style-3 mobile-sider-drawer-menu "+(isDrawerVisible?'active':'')}>
            <div className="header-style-2-content">
                <div className="top-bar site-bg-gray-light">
                    <div className="container">
                        <div className="top-bar-wrap">
                            <div className="wt-topbar-left d-flex flex-wrap align-content-center">
                                <div className="wt-topbar-left-info">
                                    <ul className="social-icons">
                                        <li><a href="https://www.facebook.com" className="fab fa-facebook"> </a></li>
                                        <li><a href="https://www.x.com" className="fab fa-twitter"> </a></li>
                                        <li><a href="https://www.instagram.com" className="fab fa-instagram"> </a></li>
                                        <li><a href="https://in.linkedin.com" className="fab fa-linkedin"> </a></li>
                                    </ul>
                                    <p>Welcome to It solutions &amp; Service Center. <NavLink to={navUrl.pages(route.pages.CONTACT)}>Get A Quote</NavLink></p>
                                </div>
                            </div>
                            <div className="wt-topbar-right d-flex flex-wrap align-content-start">
                                <ul className="wt-topbar-right-info">
                                    <li><NavLink to={navUrl.pages(route.pages.ABOUT)}>Term &amp; Condition</NavLink></li>
                                    <li><NavLink to={navUrl.pages(route.pages.ABOUT)}>Privacy Policy</NavLink></li>
                                    <li><NavLink to={navUrl.pages(route.pages.CONTACT)}>Contact Us</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="header-middle-wraper sticky-header ">
                        <div className="header-middle main-bar">
                            <div className="logo-header">
                                <div className="logo-header-inner logo-header-one">
                                    <NavLink to={route.INITIAL}>
                                        <AvertImage src="images/logo-h.png" alt="" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="header-info-wraper">
                                <div className="main-bar-wraper  navbar-expand-lg">
                                    <div className="header-bottom">
                                        <div className="container-block clearfix">
                                            <div className="navigation-bar">
                                                {/* NAV Toggle Button */}
                                                <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggler collapsed"
                                                onClick={toggleNavDrawer}>
                                                    <span className="sr-only">Toggle navigation</span>
                                                    <span className="icon-bar icon-bar-first" />
                                                    <span className="icon-bar icon-bar-two" />
                                                    <span className="icon-bar icon-bar-three" />
                                                </button>
                                                {/* MAIN Vav */}
                                                <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-between">
                                                    <SectionHeaderNavMenu />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="header-btn">
                                <NavLink to={navUrl.pages(route.pages.CONTACT)} className="site-button">Meet With Us <i className="fa fa-plus" /> </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default SectionHeader3;