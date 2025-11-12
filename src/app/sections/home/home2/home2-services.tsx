/**
 * @module Section-Home2-Services
 */

import { NavLink } from "react-router-dom";
import { navUrl, publicUrlFor } from "../../../../globals/common-functions";
import { route } from "../../../../globals/constants";
import { TypeSectionServices } from "../../../@types/sectionTypes";
import AvertImage from "../../../../globals/elements/avertimg";

/**
 * 
 * @param props : Data supplied to display services
 * @returns Markup for section containing different services
 */
const SectionHome2Services = (
    props: {
        _services: TypeSectionServices
    }
) => {
    const { _services } = props;
    return (
        <div className="section-full p-t120 p-b90 av-serv-1-section-wrap wow fadeInDown" data-wow-offset={100} data-wow-delay="0.2" style={{ backgroundImage: `url(${publicUrlFor("images/background/BG-2.jpg")})` }}>
            <div className="section-content">
                <div className="container">
                    <div className="swiper av-grid-slider swi-dotts">
                        <div className="swiper-wrapper">
                            {
                                _services.services.map((_item, _index) => {
                                    return (
                                        <div key={_index} className="swiper-slide">
                                            <div className="av-icon-style-2-blocks">
                                                <div className="av-media">
                                                    <span><AvertImage src={_item.icon} alt="icon" /></span>
                                                </div>
                                                <div className="av-content">
                                                    <h3 className="av-title"><NavLink to={navUrl.services(route.services.DETAIL)}>{_item.title}</NavLink></h3>
                                                    { _item.count && <b>{_item.count!}</b> }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="swiper-pagination" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SectionHome2Services;