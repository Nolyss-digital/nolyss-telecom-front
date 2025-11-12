/**
 * @module Section-Home3-Slider
 */

import { NavLink } from "react-router-dom";
import { navUrl, publicUrlFor } from "../../../../globals/common-functions";
import { route } from "../../../../globals/constants";
import { TypeSectionSlider } from "../../../@types/sectionTypes";

/**
 * Content/Image Sliding Area
 * @param props : Data supplied to display slider
 * @returns Content slider markup template for home 3
 */
const SectionHome3Slider = (
    props: {
        _slider: TypeSectionSlider
    }
) => {
    const { _slider } = props;
    return (
        <div className="av-bnr-3-wrap-outer home-3-slider swi-dotts">
            {/* swiper slides */}
            <div className="swiper-wrapper">
                {
                    _slider.slides.map((_item, _index) => {
                        return (
                            <div key={_index} className="av-bnr-2-wrap swiper-slide overlay-overlay" style={{ backgroundImage: `url(${publicUrlFor(_item.image)})` }}>
                                <div className="sx-bg-overlay opacity-0 sx-bg-primary" />
                                <div className="container">
                                    <div className="av-bnr-2-content">
                                        <h2 className="av-bnr-2-large-title">{_item.title}</h2>
                                        <div className="av-bnr-2-info">{_item.subtitle}</div>
                                        <div className="av-bnr-readmore">
                                            <NavLink to={navUrl.pages(route.pages.ABOUT)} className="site-button">
                                                Discover More
                                                <i className="fa fa-plus" />
                                            </NavLink>
                                            <NavLink to={navUrl.pages(route.pages.CONTACT)} className="site-button outline-white">
                                                Contact Us
                                                <i className="fa fa-plus" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* !swiper slides */}
            <div className="swiper-pagination" />
            <div className="swiper-button-wrap">
                {/* Add Arrows */}
                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
            </div>
        </div>
    )
}
export default SectionHome3Slider;