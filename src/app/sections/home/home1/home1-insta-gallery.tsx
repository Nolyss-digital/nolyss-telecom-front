/**
 * @module Section-Home1-Instagram-Gallery
 */

import { TypeSectionInstagram } from "../../../@types/sectionTypes";
import AvertImage from "../../../../globals/elements/avertimg";

/**
 * 
 * @param props : Data supplied to display instagram gallery
 * @returns Markup for section with instagram images list
 */
const SectionHome1InstaGallery = (
    props: {
        _instagram: TypeSectionInstagram
    }
) => {
    const { _instagram } = props;
    return (
        <div className="section-full av-insta-section-wrap wow fadeInDown" data-wow-offset={100} data-wow-delay="0.2">
            <div className="section-content">
                <div className="av-insta-gallery">
                    <div className="row g-0 d-flex justfy-content-center">
                        {
                            _instagram.images.map((_item, _index) => {
                                return (
                                    <div key={_index} className="col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                                        <div className="av-insta-img">
                                            <AvertImage src={_item} alt="#" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <a className="btn-insta site-button yellow2" href="https://www.instagram.com/">
                        <span className="feather feather-instagram" /> Instagram
                    </a>
                </div>
            </div>
        </div>
    )
}
export default SectionHome1InstaGallery;