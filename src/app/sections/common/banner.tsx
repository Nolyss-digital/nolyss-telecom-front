/**
 * @module Section-Inner-Page-Banner
 */

import { NavLink } from "react-router-dom";
import { TypeSectionBanner } from "../../@types/sectionTypes";
import { BANNER_TYPE, route } from "../../../globals/constants";
import { publicUrlFor } from "../../../globals/common-functions";

/**
 * 
 * @param props : Data supplied to display banner
 * @returns : Banner section for inner pages of template
 */
const SectionInnerPageBanner = (props: {
    _type?: BANNER_TYPE,
    _data: TypeSectionBanner
}) => {
    const { _type, _data } = props;

    if (_type && _type === BANNER_TYPE.IMAGE) {
        // image banner
        return <SectionImageBanner _data={_data} />

    } else if (_type && _type === BANNER_TYPE.CONTACT) {
        // contact banner
        return <SectionContactBanner _data={_data} />
    }

    // text banner (default)
    return <SectionTextBanner _data={_data} />
}

/**
 * 
 * @param props : Data supplied to display text banner
 * @returns : Banner section with only text value for inner pages of template
 * @notExported
 */
const SectionTextBanner = (props: {
    _data: TypeSectionBanner
}) => {
    return (
        <div className="wt-bnr-inr site-bg-gray">
            <div className="container">
                <div className="wt-bnr-inr-entry">
                    <div className="banner-title-outer">
                        <div className="banner-title-name">
                            <h2 className="wt-title">{props._data.title}</h2>
                        </div>
                    </div>
                    {/* BREADCRUMB ROW */}
                    <div>
                        <ul className="wt-breadcrumb breadcrumb-style-2">
                            <li><NavLink to={route.home.HOME1}>Home</NavLink></li>
                            <li>{props._data.crumb}</li>
                        </ul>
                    </div>
                    {/* BREADCRUMB ROW END */}
                </div>
            </div>
        </div>
    )
}

/**
 * 
 * @param props : Data supplied to display image banner
 * @returns : Banner section with image and text for inner pages of template
 * @notExported
 */
const SectionImageBanner = (props: {
    _data: TypeSectionBanner
}) => {
    return (
        <div className="wt-bnr-inr2 site-bg-gray" style={{ backgroundImage: `url(${publicUrlFor(props._data.image)})` }}>
            <div className="container">
                <div className="wt-bnr-inr-entry">
                    {/* BREADCRUMB ROW */}
                    <div>
                        <ul className="wt-breadcrumb breadcrumb-style-2">
                            <li><NavLink to={route.home.HOME1}>Home</NavLink></li>
                            <li>{props._data.crumb}</li>
                        </ul>
                    </div>
                    {/* BREADCRUMB ROW END */}
                </div>
            </div>
        </div>
    )
}

/**
 * 
 * @param props : Data supplied to display contact banner
 * @returns : Banner section with map for inner pages of template
 * @notExported
 */
const SectionContactBanner = (props: {
    _data: TypeSectionBanner
}) => {
    return (
        <div className="wt-bnr-inr2 site-bg-gray">
            <div className="g-map">
                <iframe className="map" title="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.7979296853177!2d144.96172427630893!3d-37.81820183429238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b384a66f05%3A0x8a3df7642372c674!2sEnvato%20Pty%20Ltd!5e0!3m2!1sen!2sin!4v1713359908789!5m2!1sen!2sin" height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="container">
                <div className="wt-bnr-inr-entry">
                    {/* BREADCRUMB ROW */}
                    <div>
                        <ul className="wt-breadcrumb breadcrumb-style-2">
                            <li><NavLink to={route.home.HOME1}>Home</NavLink></li>
                            <li>{props._data.crumb}</li>
                        </ul>
                    </div>
                    {/* BREADCRUMB ROW END */}
                </div>
            </div>
        </div>
    )
}

export default SectionInnerPageBanner;