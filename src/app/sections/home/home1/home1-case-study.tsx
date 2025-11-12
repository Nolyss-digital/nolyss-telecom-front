/**
 * @module Section-Home1-Case-Study
 */

import { NavLink } from "react-router-dom";
import { navUrl } from "../../../../globals/common-functions";
import { route } from "../../../../globals/constants";
import { TypeSectionCaseStudy } from "../../../@types/sectionTypes";
import AvertImage from "../../../../globals/elements/avertimg";

/**
 * 
 * @param props : Data supplied to display case studies
 * @returns Section with case study list section
 */
const SectionHome1CaseStudy = (
    props: {
        _caseStudy: TypeSectionCaseStudy
    }
) => {
    const { _caseStudy } = props;
    return (
        <div className="section-full p-t0 p-b0 site-bg-white av-case-section-wrap wow fadeInDown" data-wow-offset={100} data-wow-delay="0.2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 m-b40">
                        {/* TITLE START*/}
                        <div className="section-head left">
                            <h2 className="av-large-title">
                                {_caseStudy.title}
                            </h2>
                            <p>{_caseStudy.subtitle}</p>
                        </div>
                        {/* TITLE END*/}
                    </div>
                </div>
            </div>
            <div className="section-content">
                <div className="owl-carousel sx-case-st-carousel next-prev-top-right">

                    {
                        _caseStudy.cases.map((_item, _index) => {
                            return (
                                <div key={_index} className="item">
                                    <div className="av-case-study-bx">
                                        <div className="av-case-media">
                                            <NavLink to={navUrl.pages(route.pages.CASE_DETAIL)}><AvertImage src={_item.image} alt="#" /> </NavLink>
                                        </div>
                                        <div className="av-case-info">
                                            <div className="av-s-title">
                                                {
                                                    _item.categories.map((_category, _catIndex) => {
                                                        return (
                                                            <NavLink to={navUrl.pages(route.pages.CASE_STUDY)} key={_catIndex}>{_catIndex > 0 ? ',' : ''} {_category}</NavLink>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <NavLink className="av-l-title" to={navUrl.pages(route.pages.CASE_DETAIL)}>
                                                <h2 className="av-title">{_item.subtitle}</h2>
                                            </NavLink>
                                            <NavLink to={navUrl.pages(route.pages.CASE_DETAIL)} className="av-case-link">
                                                <i className="feather feather-arrow-up-right" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div >
    )
}

export default SectionHome1CaseStudy;