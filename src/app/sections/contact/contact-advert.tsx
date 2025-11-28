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
                <h3 className="av-title">Nolyss Telecom</h3>
                <h4 className="av-title2">Votre partenaire pour la transition numérique</h4>
                <p>
                    Découvrez nos solutions en Mobilité, Réseaux & Internet, Téléphonie & Collaboration,
                    Cybersécurité, Digital & Data et IoT pour moderniser votre connectivité.
                </p>
                <NavLink to={navUrl.pages(route.pages.ABOUT)} className="site-button on-bg">
                    En savoir plus
                    <i className="fa fa-plus" />
                </NavLink>
            </div>

        </div>
    )
}

export default SectionContactAdvert;