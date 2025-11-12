/**
 * @module Section-Advertisement
 */

import { NavLink } from "react-router-dom";
import { navUrl, publicUrlFor } from "../../../globals/common-functions";
import { route } from "../../../globals/constants";

/**
 * 
 * @returns Markup to show sample advertisement
 */
const SectionContactAdvert = () => {
    return (
        <div className="twm-advertisment" style={{ backgroundImage: `url(${publicUrlFor("images/add-bg.jpg")})` }}>
            <div className="overlay" />
            <div>
                <h3 className="av-title">IT Solutions?</h3>
                <h4 className="av-title2">Your Success Provide Best .</h4>
                <p>Fusce eu eros nec felis venenatis fermentum sit amet eget turpis Integer.</p>
                <NavLink to={navUrl.pages(route.pages.ABOUT)} className="site-button on-bg">
                    Discover More
                    <i className="fa fa-plus" />
                </NavLink>
            </div>
        </div>
    )
}

export default SectionContactAdvert;