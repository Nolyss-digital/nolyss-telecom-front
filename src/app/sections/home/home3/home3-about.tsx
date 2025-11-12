/**
 * @module Section-Home3-About
 */

import { SectionHome1AboutContent } from "../home1/home1-about";
import { TypeSectionAbout } from "../../../@types/sectionTypes";

/**
 * 
 * @param props : Data supplied to display About Us
 * @returns Wrapper element for about us content
 */
const SectionHome3About = (
    props: {
        _about: TypeSectionAbout
    }
) => {
    return (
        <div className="section-full p-t120 p-b90 site-bg-white av-about2-section-wrap wow fadeInDown" data-wow-offset={100} data-wow-delay="0.2">
            <div className="section-content">
                <div className="container">
                    <SectionHome1AboutContent _about={props._about} />
                </div>
            </div>
        </div>
    )
}
export default SectionHome3About;