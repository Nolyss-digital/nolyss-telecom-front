/**
 * @module Header-Nav-Menus
 */

import { NavLink } from "react-router-dom";
import { stopAnchorNavigation, route } from "../../../../globals/constants";
import { navUrl } from "../../../../globals/common-functions";

/**
 * 
 * @returns Navigation Menus for header section
 */
const SectionHeaderNavMenu = () => {
 return (
  <ul className="nav navbar-nav">
    <li>
      <NavLink to={route.home.HOME1}>Accueil</NavLink>
    </li>

    <li>
      <NavLink to={navUrl.pages(route.pages.ABOUT)}>À propos</NavLink>
    </li>

    <li className="has-child">
      <a href="!#" style={stopAnchorNavigation}>Service</a>
      <ul className="sub-menu">
        <li>
          <NavLink to={navUrl.services(route.pages.ABOUT)}>
            Professionnels
          </NavLink>
        </li>
        <li>
          <NavLink to={navUrl.services(route.pages.ABOUT)}>
            Entreprises
          </NavLink>
        </li>
      </ul>
    </li>

    <li>
      <NavLink to={navUrl.blogs(route.blogs.BLOGS)}>Blog</NavLink>
    </li>

    <li>
      <NavLink to={navUrl.pages(route.pages.CONTACT)}>Contact</NavLink>
    </li>
  </ul>
);

}
export default SectionHeaderNavMenu;