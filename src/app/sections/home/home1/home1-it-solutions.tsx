/**
 * @module Section-Home1-IT-Solutions
 */

import { NavLink } from "react-router-dom";
import { navUrl, publicUrlFor } from "../../../../globals/common-functions";
import { route } from "../../../../globals/constants";
import { TypeSectionIT } from "../../../@types/sectionTypes";

/**
 * 
 * @param props : Data supplied to display IT related information
 * @returns Markup for section describing IT solutions
 */
const SectionHome1ITSolutions = (
    props: {
        _it: TypeSectionIT
    }
) => {
    const { _it } = props;
    return (
        <div className="section-full av-itsolution-section-wrap wow fadeInDown" data-wow-offset={100} data-wow-delay="0.2" style={{ backgroundImage: `url(${publicUrlFor(_it.image)})` }}>
            <div className="container">
                <div className="av-itsolution-section">
                    <h2 className="av-title">{_it.title}</h2>
                    <h3 className="av-title2">{_it.subtitle}</h3>
                    <p>{_it.description}</p>
                    <NavLink to={navUrl.pages(route.pages.FAQ)} className="site-button on-bg">
                        Discover More
                        <i className="fa fa-plus" />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default SectionHome1ITSolutions;