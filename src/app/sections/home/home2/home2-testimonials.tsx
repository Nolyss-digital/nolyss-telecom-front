/**
 * @module Section-Home2-Testimonials
 */

import { OVERALL_RATING } from "../../../../globals/constants";
import { TypeSectionTestimonials } from "../../../@types/sectionTypes";
import AvertImage from "../../../../globals/elements/avertimg";

/**
 * 
 * @param props Data supplied to display testimonials
 * @returns Markup for section containing various feedback from various clients
 */
const SectionHome2Testimonials = (
    props: {
        _testimonials: TypeSectionTestimonials
    }
) => {
    const { _testimonials } = props;
    return (
        <div className="section-full p-t120 p-b90 site-bg-gray av-testimonial-section-wrap wow fadeInDown" data-wow-offset={100} data-wow-delay="0.2">
            <div className="container">
                <div className="section-content">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 m-b30">
                            <div className="av-testimonial-l-pic">
                                <AvertImage src="images/testimonials/t-large.png" alt="#" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 m-b30">
                            <div className="owl-carousel av-testimonial-carousel2">
                                {
                                    _testimonials.testimonials.map((_item, _index) => {
                                        return (
                                            <div key={_index} className="item">
                                                <div className="av-testimonial-2">
                                                    <div className="av-testi-head">
                                                        <div className="av-media">
                                                            <AvertImage src={_item.image} alt="icon" />
                                                        </div>
                                                        <div className="av-content">
                                                            <h3 className="av-title">{_item.name}</h3>
                                                            <p>{_item.designation}</p>
                                                        </div>
                                                    </div>
                                                    <div className="av-testimonial-mid">
                                                        <p>{_item.comment}</p>
                                                    </div>
                                                    <div className="av-testimonial-bottom">
                                                        <ul className="av-testi-rating">
                                                            {
                                                                OVERALL_RATING.map((_num, _nIndex) => {
                                                                    return (
                                                                        <li key={_nIndex}>
                                                                            {
                                                                                _num <= parseInt(_item.rating)
                                                                                && <i className="fa fa-star" />
                                                                            }
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                        <div className="av-review-count">({_item.reviews} Reviews)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SectionHome2Testimonials;