/**
 * @module Template-Footer
 */

import { NavLink } from "react-router-dom";
import { navUrl } from "../../../globals/common-functions";
import { route } from "../../../globals/constants";
import AvertImage from "../../../globals/elements/avertimg";

/**
 * 
 * @returns Markup for the template footer
 */
const SectionFooter = () => {
    return (
        <footer className="footer-dark">
            <div className="container">
                {/* FOOTER BLOCKES START */}
                <div className="footer-top">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="widget widget_about">
                                <div className="logo-footer clearfix">
                                    <NavLink to={route.INITIAL}><AvertImage src="images/logo-f.png" alt="" /> </NavLink>
                                </div>
                                <ul className="ftr-list">
                                    <li><i className="feather feather-phone-call" /><a href="tel:(1)245-45678">(1)245-45678</a> <span className="site-text-yellow2">Call Me</span></li>
                                    <li><i className="feather feather-mail" />Help.info@gmail.com</li>
                                    <li><i className="feather feather-map-pin" />Mirpur 12, Block C, Dhaka, BD.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-4 col-6">
                            <div className="widget widget_services ftr-list-center">
                                <h3 className="widget-title">Service</h3>
                                <ul>
                                    <li><NavLink to={navUrl.pages(route.pages.ABOUT)}>Why us</NavLink></li>
                                    <li><NavLink to={navUrl.pages(route.pages.CASE_DETAIL)}>Enterprise</NavLink></li>
                                    <li><NavLink to={navUrl.pages(route.pages.CASE_DETAIL)}>Customer Story</NavLink></li>
                                    <li><NavLink to={navUrl.pages(route.pages.ABOUT)}>Security</NavLink></li>
                                    <li><NavLink to={navUrl.pages(route.pages.PLANS)}>Pricing</NavLink></li>
                                    <li><NavLink to={navUrl.pages(route.pages.FAQ)}>FAQ</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-4 col-6">
                            <div className="widget widget_services ftr-list-center">
                                <h3 className="widget-title">About</h3>
                                <ul>
                                    <li><NavLink to={route.home.HOME1}>Home</NavLink></li>
                                    <li><NavLink to={navUrl.pages(route.pages.ABOUT)}>About us</NavLink></li>
                                    <li><NavLink to={navUrl.services(route.services.SERVICES)}>Services</NavLink></li>
                                    <li><NavLink to={navUrl.pages(route.pages.CASE_STUDY)}>Portfolios</NavLink></li>
                                    <li><NavLink to={navUrl.blogs(route.blogs.STANDARD)}>Blogs</NavLink></li>
                                    <li><NavLink to={navUrl.pages(route.pages.CONTACT)}>Contact us</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-4 col-6">
                            <div className="widget widget_services ftr-list-center">
                                <h3 className="widget-title">Quick links</h3>
                                <ul>
                                    <li><NavLink to={navUrl.pages(route.pages.ABOUT)}>Product Design</NavLink></li>
                                    <li><NavLink to={navUrl.pages(route.pages.ABOUT)}>Business Consulting</NavLink></li>
                                    <li><NavLink to={navUrl.pages(route.pages.CASE_DETAIL)}>IT Service</NavLink></li>
                                    <li><NavLink to={navUrl.services(route.services.DETAIL)}>SEO Optimization</NavLink></li>
                                    <li><NavLink to={navUrl.services(route.services.DETAIL)}>Cyber Security</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="widget ftr-list-center">
                                <h3 className="widget-title">Social Icons</h3>
                                <ul className="social-icons">
                                    <li><a href="https://www.facebook.com" className="fa-brands fa-facebook"> </a></li>
                                    <li><a href="https://www.x.com" className="fa-brands fa-square-x-twitter"> </a></li>
                                    <li><a href="https://www.instagram.com" className="fa-brands fa-square-instagram"> </a></li>
                                    <li><a href="https://in.linkedin.com" className="fa-brands fa-linkedin"> </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FOOTER COPYRIGHT */}
            <div className="footer-bottom">
                <div className="footer-bottom-info">
                    <div className="footer-copy-right">
                        <span className="copyrights-text"><span className="site-text-primary">2024</span> © Part of Company . All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default SectionFooter;