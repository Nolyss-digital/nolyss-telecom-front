/**
 * @module Section-Case/Blog-Pagination
 */

import { NavLink } from "react-router-dom";
import { navUrl } from "../../../globals/common-functions";
import { route } from "../../../globals/constants";
import { TypeSectionCasePagination } from "../../@types/sectionTypes";

/**
 * 
 * @param props : Data supplied to display pagination
 * @returns Markup for sample pagination used in case/blog detail
 */
const SectionCaseDetailPagination = (props: {
    _paging: TypeSectionCasePagination
}) => {
    const { _paging } = props;
    return (
        <div className="s-post-pagination-control previous-next">
            <div className="paging-left paging-item">
                <div className="paging-content">
                    <NavLink className="paging-link" to={navUrl.blogs(route.blogs.DETAIL)}>
                        <i className="fa  fa-long-arrow-left" />
                    </NavLink>
                    <div className="paging-content-inner">
                        <NavLink className="paging-link2" to={navUrl.blogs(route.blogs.DETAIL)}>Prev Services</NavLink>
                        <h4 className="paging-title">
                            <NavLink to={navUrl.blogs(route.blogs.DETAIL)}>{_paging.prev}</NavLink>
                        </h4>
                    </div>
                </div>
            </div>
            <div className="paging-right paging-item">
                <div className="paging-content reverse">
                    <NavLink className="paging-link" to={navUrl.blogs(route.blogs.DETAIL)}>
                        <i className="fa  fa-long-arrow-right" />
                    </NavLink>
                    <div className="paging-content-inner">
                        <NavLink className="paging-link2" to={navUrl.blogs(route.blogs.DETAIL)}>Next Portfolio</NavLink>
                        <h4 className="paging-title">
                            <NavLink to={navUrl.blogs(route.blogs.DETAIL)}>{_paging.next}</NavLink>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionCaseDetailPagination;