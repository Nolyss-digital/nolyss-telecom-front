/**
 * @module Section-Home1-Services
 */

import { NavLink } from "react-router-dom";
import { navUrl } from "../../../../globals/common-functions";
import { SECTION_THEME, route } from "../../../../globals/constants";
import { TypeSectionClients, TypeSectionServices } from "../../../@types/sectionTypes";
import AvertImage from "../../../../globals/elements/avertimg";
import SectionHome1Clients from "./home1-clients";

/**
 * 
 * @param props : Data supplied to display services
 * @returns Markup for section containing different services
 */
const SectionHome1Services = (
    props: {
        _services: TypeSectionServices,
        _clients?: TypeSectionClients,
        _background?: SECTION_THEME
    }
) => {
    const { _services, _clients, _background } = props;

    // gray back (default)
    var outerBackgroundClass = "p-b90 site-bg-gray";

    // white back
    if(_background && _background === SECTION_THEME.LIGHT) {
        outerBackgroundClass = "p-b120 site-bg-white";
    }

    return (
        <div className={"section-full p-t120 wow fadeInDown "+outerBackgroundClass} data-wow-offset={100} data-wow-delay="0.2">
            <div className="container">
                <div className="section-content">
                    <div className="av-icon-style-1 row g-0">
                        {
                            _services.services.map((_item, _index) => {
                                return (
                                    <div key={_index} className="col">
                                        <div className="av-icon-style-1-blocks">
                                            <div className="av-media">
                                                <span><AvertImage src={_item.icon} alt="icon" /></span>
                                            </div>
                                            <div className="av-content">
                                                <h3 className="av-title"><NavLink to={navUrl.services(route.services.DETAIL)}>{_item.title}</NavLink></h3>
                                                {
                                                    _item.subtitle &&
                                                    <p>{_item.subtitle!}</p>
                                                }
                                                <div className="av-readmore-btn">
                                                    <NavLink to={navUrl.services(route.services.DETAIL)} className="site-button button-sm gray">Read More <i className="feather feather-plus" /> </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        _clients &&
                        <div className="av-client-slider1 p-t50 p-b20 site-bg-white">
                            <SectionHome1Clients _clients={_clients!} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default SectionHome1Services;