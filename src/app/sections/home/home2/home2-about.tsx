/**
 * @module Section-Home2-About
 */

import { SectionHome1AboutContent } from "../home1/home1-about";
import { TypeSectionAbout, TypeSectionClients } from "../../../@types/sectionTypes";
import SectionHome1Clients from "../home1/home1-clients";

/**
 * 
 * @param props : Data supplied to display About Us
 * @returns Wrapper element for about us content
 */
const SectionHome2About = (
    props: {
        _about: TypeSectionAbout,
        _clients?: TypeSectionClients
    }
) => {
    const { _about, _clients } = props;
    return (
        <div className="section-full p-t120 p-b90 site-bg-white av-about2-section-wrap wow fadeInDown" data-wow-offset={100} data-wow-delay="0.2">
            <div className="section-content">
                <div className="container">
                    <SectionHome1AboutContent _about={_about} />
                    {
                        _clients &&
                        <div className="av-client-slider2">
                            <SectionHome1Clients _clients={_clients!} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default SectionHome2About;