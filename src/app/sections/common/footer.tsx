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
                {/* FOOTER BLOCKS START */}
                <div className="footer-top">
                    <div className="row">
                        {/* LOGO + CONTACT */}
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="widget widget_about">
                                <div className="logo-footer clearfix">
                                    <NavLink to={route.INITIAL}>
                                        <AvertImage src="images/logo-f.png" alt="Nolyss Telecom" />
                                    </NavLink>
                                </div>
                                <ul className="ftr-list">
                                    <li>
                                        <i className="feather feather-phone-call" />
                                        <a href="tel:+33184602590">+33 1 84 60 25 90</a>
                                        
                                    </li>
                                    <li>
                                        <i className="feather feather-mail" />
                                        contact@nolysstelecom.fr
                                    </li>
                                    <li>
                                        <i className="feather feather-map-pin" />
                                        Paris, France
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* SERVICES */}
                        <div className="col-lg-2 col-md-6 col-sm-4 col-6">
                            <div className="widget widget_services ftr-list-center">
                                <h3 className="widget-title">Services</h3>
                                <ul>
                                    <li><NavLink to={navUrl.services(route.services.SERVICES)}>Mobilité</NavLink></li>
                                    <li><NavLink to={navUrl.services(route.services.SERVICES)}>Réseaux & Internet</NavLink></li>
                                    <li><NavLink to={navUrl.services(route.services.SERVICES)}>Téléphonie & Collaboration</NavLink></li>
                                    <li><NavLink to={navUrl.services(route.services.SERVICES)}>Cybersécurité</NavLink></li>
                                    <li><NavLink to={navUrl.services(route.services.SERVICES)}>Digital & Data</NavLink></li>
                                    <li><NavLink to={navUrl.services(route.services.SERVICES)}>IoT</NavLink></li>
                                </ul>
                            </div>
                        </div>

                        {/* À PROPOS */}
                        <div className="col-lg-2 col-md-6 col-sm-4 col-6">
                            <div className="widget widget_services ftr-list-center">
                                <h3 className="widget-title">À propos</h3>
                                <ul>
                                    <li><NavLink to={route.home.HOME1}>Accueil</NavLink></li>
                                    <li><NavLink to={navUrl.pages(route.pages.ABOUT)}>Qui sommes-nous</NavLink></li>
                                    <li><NavLink to={navUrl.blogs(route.blogs.STANDARD)}>Blog</NavLink></li>
                                    <li><NavLink to={navUrl.pages(route.pages.CONTACT)}>Contact</NavLink></li>
                                </ul>
                            </div>
                        </div>

                        {/* LIENS RAPIDES */}
                        <div className="col-lg-2 col-md-6 col-sm-4 col-6">
                            <div className="widget widget_services ftr-list-center">
                                <h3 className="widget-title">Liens rapides</h3>
                                <ul>
                                    <li><NavLink to={navUrl.pages(route.pages.ABOUT)}>Pourquoi nous choisir</NavLink></li>
                                    <li><NavLink to={navUrl.pages(route.pages.ABOUT)}>Nos valeurs</NavLink></li>
                                    <li><NavLink to={navUrl.pages(route.pages.PLANS)}>Nos offres</NavLink></li>
                                    <li><NavLink to={navUrl.pages(route.pages.FAQ)}>FAQ</NavLink></li>
                                    <li><NavLink to={navUrl.pages(route.pages.ABOUT)}>Mentions légales</NavLink></li>
                                </ul>
                            </div>
                        </div>

                        {/* RÉSEAUX SOCIAUX */}
                        <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                            <div className="widget ftr-list-center">
                                <h3 className="widget-title">Suivez-nous</h3>
                                <ul className="social-icons">
                                    <li><a href="https://www.facebook.com/nolysstelecom" className="fa-brands fa-facebook"> </a></li>
                                    <li><a href="https://x.com/nolysstelecom" className="fa-brands fa-square-x-twitter"> </a></li>
                                    <li><a href="https://www.instagram.com/nolysstelecom" className="fa-brands fa-square-instagram"> </a></li>
                                    <li><a href="https://www.linkedin.com/company/nolysstelecom" className="fa-brands fa-linkedin"> </a></li>
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
                        <span className="copyrights-text">
                            <span className="site-text-primary">2024</span> © Nolyss Telecom. Tous droits réservés.
                        </span>
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default SectionFooter;