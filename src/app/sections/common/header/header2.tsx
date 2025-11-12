/**
 * @module Template-Header-Style-2
 */

import { NavLink } from "react-router-dom";
import { loadScript, navUrl } from "../../../../globals/common-functions";
import { route } from "../../../../globals/constants";
import { useEffect, useState } from "react";
import AvertImage from "../../../../globals/elements/avertimg";
import SectionHeaderNavMenu from "../navigation/nav-menu";

/**
 * 
 * @returns Markup for Header Style 2 for template
 */
const SectionHeader2 = () => {

    const [isDrawerVisible, setIsDrawerVisible] = useState(false);

    const toggleNavDrawer = () => {
        setIsDrawerVisible(!isDrawerVisible);
    }

    useEffect(()=>{
        loadScript("js/nav-menu.js");
    })
    
    return (
        <header className={"site-header header-style-2 hdr-full mobile-sider-drawer-menu "+(isDrawerVisible?'active':'')}>
            <div className="header-style-2-content sticky-header">
                <div className="header-middle-wraper ">
                    <div className="container">
                        <div className="header-middle d-flex justify-content-between align-items-center">
                            <div className="logo-header">
                                <div className="logo-header-inner logo-header-one">
                                    <NavLink to={route.INITIAL}>
                                        <AvertImage src="images/logo-h2.png" alt="" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className=" main-bar-wraper  navbar-expand-lg">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Header Right Section*/}
                            <div className="extra-nav header-1-nav">
                                <div className="extra-cell one">
                                    <div className="header-info">
                                        <ul>
                                            <li>
                                                <div className="twm-icon-box-wraper">
                                                    <div className="twm-icon-box" />
                                                    <div className="twm-icon-box-content">
                                                        <p>Phone Number</p>
                                                        <h3 className="twm-tilte"><a href="tel:(1)245-45678">(1)245-45678</a> call</h3>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="extra-cell two">
                                    <NavLink to={navUrl.pages(route.pages.CONTACT)} className="site-button">Meet With Us <i className="fa fa-plus" /> </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default SectionHeader2;