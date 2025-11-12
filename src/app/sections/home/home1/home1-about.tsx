/**
 * @module Section-Home1-About
 */

import { NavLink } from "react-router-dom";
import { navUrl } from "../../../../globals/common-functions";
import { route } from "../../../../globals/constants";
import { TypeSectionAbout } from "../../../@types/sectionTypes";
import AvertImage from "../../../../globals/elements/avertimg";

/**
 * 
 * @param props : Data supplied to display About Us
 * @returns Wrapper element for about us content
 */
const SectionHome1About = (
    props: {
        _about: TypeSectionAbout
    }
) => {
    return (
        <div className="section-full p-t120 p-b90 site-bg-white av-about-section-wrap wow fadeInDown" data-wow-offset={100} data-wow-delay="0.2">
            <div className="section-content">
                <div className="container">
                    <SectionHome1AboutContent _about={props._about} />
                </div>
            </div>
        </div>
    )
}

/**
 * 
 * @param props : Data supplied to hold about us content
 * @returns Markup for about us content
 */
export const SectionHome1AboutContent = (
    props: {
        _about: TypeSectionAbout
    }
) => {
    const { _about } = props;
    return (
        <div className="row">
            <div className="col-lg-6 col-md-12 m-b30">
                <div className="av-about-media-section">
                    <div className="av-ver-text">
                        <span>{_about.experience}</span>
                    </div>
                    <div className="av-large-image">
                        <AvertImage src={_about.image} alt="#" />
                        <div className="av-about-chart">
                            <AvertImage src="images/ab-2.png" alt="#" />
                        </div>
                    </div>
                    <div className="av-ab-dot-left">
                        <AvertImage src="images/ab-dotts.png" alt="#" />
                    </div>
                    <div className="av-ab-dot-right">
                        <AvertImage src="images/ab-dotts.png" alt="#" />
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 m-b30">
                <div className="av-about-content-section">
                    <div className="av-content-title">
                        <h2 className="av-large-title">{_about.title}</h2>
                        <div dangerouslySetInnerHTML={
                            { __html: _about.description }
                        }></div>
                    </div>
                    <div className="av-icon-box-wrap p-t30 p-b30">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="av-icon-style-left">
                                    <div className="av-media">
                                        <AvertImage src="images/icon/ic-1.png" alt="icon" />
                                    </div>
                                    <div className="av-content">
                                        <h3 className="av-title">Our Mission</h3>
                                        <p>{_about.mission}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="av-icon-style-left">
                                    <div className="av-media">
                                        <AvertImage src="images/icon/ic-2.png" alt="icon" />
                                    </div>
                                    <div className="av-content">
                                        <h3 className="av-title">Our Vision</h3>
                                        <p>{_about.vision}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="av-about-content-ftr">
                        <NavLink to={navUrl.pages(route.pages.CASE_DETAIL)} className="site-button">
                            Discover More
                            <i className="fa fa-plus" />
                        </NavLink>
                        {
                            _about.video &&
                            <a href={_about.video!} className="mfp-video ac-text-circle-btn">
                                <i className="fa fa-play" />
                                <AvertImage className="spinner-object" src="images/icon/ic-3.png" alt="text" />
                            </a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionHome1About;