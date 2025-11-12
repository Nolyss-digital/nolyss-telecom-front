/**
 * @module Section-Home3-Services
 */

import { NavLink } from "react-router-dom";
import { navUrl, publicUrlFor } from "../../../../globals/common-functions";
import { SECTION_THEME, route } from "../../../../globals/constants";
import { TypeSectionServices } from "../../../@types/sectionTypes";
import AvertImage from "../../../../globals/elements/avertimg";

/**
 * 
 * @param props : Data supplied to display services
 * @returns Markup for section containing different services
 */
const SectionHome3Services = (
    props: {
        _services: TypeSectionServices,
        _theme?: SECTION_THEME
    }
) => {
    const { _services, _theme } = props;

    // dark styles (default)
    var _outerClasses = "p-t120";
    var _outerStyle = { backgroundImage: `url(${publicUrlFor("images/background/BG-2.jpg")})` } as React.CSSProperties
    var _slideThemeClass = "";
    var _sectionOffset = 100;

    // light styles
    if (_theme && _theme === SECTION_THEME.LIGHT) {
        _outerClasses = "p-t0 av-serv-1-on-bg-white";
        _outerStyle = {} as React.CSSProperties
        _slideThemeClass = "on-bg-white"
        _sectionOffset = 200;
    }

    return (
        <div className={"section-full p-b90 av-serv-1-section-wrap wow fadeInDown "+_outerClasses} data-wow-offset={_sectionOffset} data-wow-delay="0.2" style={_outerStyle}>
            <div className="section-content">
                <div className="container">
                    <div className="swiper swiper-container-fw swi-dotts m-b30">
                        <div className="swiper-wrapper">
                            {
                                _services.services.map((_item, _index) => {
                                    return (
                                        <div key={_index} className="swiper-slide">
                                            <div className={"av-icon-style-2-blocks av-v-block "+_slideThemeClass}>
                                                <div className="av-media">
                                                    <span><AvertImage src={_item.icon} alt="icon" /></span>
                                                </div>
                                                <div className="av-content">
                                                    <h3 className="av-title"><NavLink to={navUrl.services(route.services.DETAIL)}>{_item.title}</NavLink></h3>
                                                    {_item.count && <b>{_item.count!}</b>}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SectionHome3Services;