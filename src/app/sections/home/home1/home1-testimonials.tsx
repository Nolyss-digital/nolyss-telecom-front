/**
 * @module Section-Home1-Testimonials
 */

import { useLocation } from "react-router-dom";
import AvertImage from "../../../../globals/elements/avertimg";
import { OVERALL_RATING, route } from "../../../../globals/constants";
import { TypeSectionTestimonials } from "../../../@types/sectionTypes";
import { TypeTestimonial } from "../../../@types/reusableTypes";

/**
 * 
 * @param props Data supplied to display testimonials
 * @returns Markup for section containing various feedback from various clients
 */
const SectionHome1Testimonials = (
    props: {
        _testimonials: TypeSectionTestimonials
    }
) => {

    const { _testimonials } = props;
    const _currentpath = useLocation().pathname;
    var _sectionStyle = "site-bg-gray";

    if (_currentpath === route.home.HOME3) {
        _sectionStyle = "site-bg-white";
    }

    return (
        <div className={"section-full p-t120 p-b90 " + _sectionStyle + " av-testimonial-section-wrap wow fadeInDown"} data-wow-offset={100} data-wow-delay="0.2">
            <div className="container">
                {/* TITLE START*/}
                <div className="section-head center m-b40">
                    {
                        _testimonials.title &&
                        <h2 className="av-large-title">{_testimonials.title!}</h2>
                    }
                    {
                        _testimonials.subtitle &&
                        <p>{_testimonials.subtitle!}</p>
                    }
                </div>
                {/* TITLE END*/}
                <div className="section-content">
                    <div className="owl-carousel av-testimonial-carousel m-b30">
                        {
                            _testimonials.testimonials.map((_item, _index) => {
                                return (
                                    <div key={_index} className="item">
                                        <SectionHome1TestimonialsBox _data={_item} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export const SectionHome1TestimonialsBox = (props: {
    _data: TypeTestimonial
}) => {
    const _item = props._data;
    return (
        <div className="av-testimonial">
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
    )
}

export default SectionHome1Testimonials;