/**
 * @module Template-Header-Style-1
 */

import { NavLink } from "react-router-dom";
import { loadScript, navUrl } from "../../../../globals/common-functions";
import { route } from "../../../../globals/constants";
import { MouseEventHandler, useEffect, useState } from "react";
import AvertImage from "../../../../globals/elements/avertimg";
import SectionHeaderNavMenu from "../navigation/nav-menu";
import ChatPopup from "../../../../globals/elements/chat-popup";

/**
 * 
 * @returns Markup for Header Style 1 for template
 */
const SectionHeader1 = () => {

    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const [isChatBoxVisible, setIsChatBoxVisible] = useState(false);

    const toggleNavDrawer = () => {
        setIsDrawerVisible(!isDrawerVisible);
    }

    const toggleChatBox = () => {
        setIsChatBoxVisible(!isChatBoxVisible);
    }

    const closeChatBox: MouseEventHandler = () => {
        toggleChatBox()
    }

    useEffect(()=>{
        loadScript("js/nav-menu.js");
    })

    return (
        <header className={"site-header header-style-1 mobile-sider-drawer-menu "+(isDrawerVisible?'active':'')}>
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
                                    <p>Welcome to It solutions &amp; Service Center.<NavLink to={navUrl.pages(route.pages.CONTACT)}>Get A Quote</NavLink></p>
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
                <div className="header-middle-wraper">
                    <div className="container">
                        <div className="header-middle d-flex justify-content-between align-items-center">
                            <div className="logo-header">
                                <div className="logo-header-inner logo-header-one">
                                    <NavLink to={route.INITIAL}>
                                        <AvertImage src="images/logo-h.png" alt="" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="header-info-wraper">
                                <div className="header-info">
                                    <ul>
                                        <li>
                                            <div className="twm-icon-box-wraper">
                                                <div className="twm-icon-box">
                                                    <AvertImage src="images/icon/call.png" alt="call" />
                                                </div>
                                                <div className="twm-icon-box-content">
                                                    <p>Phone Number</p>
                                                    <h3 className="twm-tilte">(1)245-45678 call</h3>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="twm-icon-box-wraper">
                                                <div className="twm-icon-box">
                                                    <AvertImage src="images/icon/mail.png" alt="call" />
                                                </div>
                                                <div className="twm-icon-box-content">
                                                    <p>Quick You Email!</p>
                                                    <h3 className="twm-tilte">help.info@gmail.com</h3>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <NavLink to={navUrl.pages(route.pages.CONTACT)} className="site-button">Meet With Us <i className="fa fa-plus" /> </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="sticky-header main-bar-wraper  navbar-expand-lg">
                        <div className="main-bar header-bottom">
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
                                    {/* Header Right Section*/}
                                    <div className="extra-nav header-1-nav">
                                        <div className="extra-cell one">
                                            <div className="header-search">
                                                <button id="#search" className="header-search-icon"><i className="fa fa-search" /> </button>
                                            </div>
                                        </div>
                                        <div className="extra-cell two">
                                            <button id="av-chat-block" className="header-chat-icon"
                                                onClick={toggleChatBox}>
                                                <AvertImage src="images/icon/chat-icon.png" alt="#" width={24} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* SITE Search */}
                        <div id="search">
                            <span className="close" />
                            <form role="search" id="searchform" action="/search" method="get" className="radius-xl">
                                <div className="input-group">
                                    <input className="form-control" name="q" type="search" placeholder="Type to search" />
                                    <span className="input-group-append"><button type="button" className="search-btn"><i className="fa fa-paper-plane" /></button></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <ChatPopup
                _isVisible={isChatBoxVisible}
                _onClose={closeChatBox} />
        </header>
    )
}
export default SectionHeader1;