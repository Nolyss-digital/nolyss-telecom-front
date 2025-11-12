/**
 * @module Section-Case-Study-List
 */

import { navUrl } from "../../../globals/common-functions";
import { route } from "../../../globals/constants";
import { NavLink } from "react-router-dom";
import { TypeCase } from "../../@types/reusableTypes";
import AvertImage from "../../../globals/elements/avertimg";

/**
 * 
 * @param props : Data supplied to display cases
 * @returns Markup for case study list
 */
const SectionCaseStudyCases = (props: {
    _cases: TypeCase[]
}) => {
    const { _cases } = props;
    return (
        <div className="masonry-wrap row">
            {
                _cases.map((_item, _index) => {
                    return (
                        <div key={_index} className="masonry-item col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInDown" data-wow-delay="0.2">
                            <div className="av-case-study-bx3">
                                <div className="av-case-media">
                                    <NavLink to={navUrl.pages(route.pages.CASE_DETAIL)}><AvertImage src={_item.image} alt="#" /> </NavLink>
                                    <NavLink to={navUrl.pages(route.pages.CASE_DETAIL)} className="av-case-link">
                                        <i className="feather feather-arrow-up-right" />
                                    </NavLink>
                                </div>
                                <div className="av-case-info">
                                    <div className="av-s-title">
                                        {
                                            _item.categories.map((_category, _catIndex) => {
                                                return (
                                                    <NavLink to={navUrl.pages(route.pages.CASE_DETAIL)} key={_catIndex}>{_catIndex > 0 ? ',' : ''} {_category}</NavLink>
                                                )
                                            })
                                        }
                                    </div>
                                    <NavLink className="av-l-title" to={navUrl.pages(route.pages.CASE_DETAIL)}>
                                        <h2 className="av-title">{_item.subtitle}</h2>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SectionCaseStudyCases;