/**
 * @module Section-Home1-Clients
 */

import { NavLink } from "react-router-dom";
import { navUrl } from "../../../../globals/common-functions";
import { route } from "../../../../globals/constants";
import { TypeSectionClients } from "../../../@types/sectionTypes";
import AvertImage from "../../../../globals/elements/avertimg";

/**
 * 
 * @param props : Data supplied to display clients 
 * @returns Markup for sample section with clients list
 */
const SectionHome1Clients = (
    props: {
        _clients: TypeSectionClients
    }
) => {
    const { _clients } = props;
    return (
        <div className="owl-carousel home-client-carousel3 owl-btn-vertical-center">
            {
                _clients.clients.map((_item, _index) => {
                    return (
                        <div key={_index} className="item">
                            <div className="ow-client-logo">
                                <div className="client-logo client-logo-media">
                                    <NavLink to={navUrl.pages(route.pages.TESTIMONIALS)}><AvertImage src={_item} alt="" /> </NavLink></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default SectionHome1Clients;