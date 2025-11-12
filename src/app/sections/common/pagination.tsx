/**
 * @module Template-List-Pagination
 */

import { stopAnchorNavigation } from "../../../globals/constants";

/**
 * 
 * @returns Common pagination style used with different list across template
 */
const SectionPagination = () => {
    return (
        <div className="pagination-outer d-flex justify-content-center">
            <div className="pagination-style1">
                <ul className="clearfix">
                    <li className="prev"><a href="!#" style={stopAnchorNavigation}><span> <i className="fa-solid fa-arrow-left-long" /> </span> </a></li>
                    <li><a href="!#" style={stopAnchorNavigation}>01</a></li>
                    <li className="active"><a href="!#" style={stopAnchorNavigation}>02</a></li>
                    <li><a href="!#" style={stopAnchorNavigation}>03</a></li>
                    <li className="next"><a href="!#" style={stopAnchorNavigation}><span> <i className="fa-solid fa-arrow-right-long" /> </span> </a></li>
                </ul>
            </div>
        </div>
    )
}

export default SectionPagination;