/**
 * @module Section-Case-Detail-Content
 */

import { NavLink } from "react-router-dom";
import { navUrl } from "../../../globals/common-functions";
import { route } from "../../../globals/constants";
import { TypeSectionCaseContent } from "../../@types/sectionTypes";

/**
 * 
 * @param props : Data supplied to display case detail content
 * @returns Markup for case content
 */
const SectionCaseDetailContent = (props: {
    _content: TypeSectionCaseContent
}) => {
    const { _content } = props;
    return (
        <div className="av-content-info">
            <div className="av-s-title">
                {
                    _content.categories.map((_category, _catIndex) => {
                        return (
                            <NavLink to={navUrl.pages(route.pages.CASE_STUDY)} key={_catIndex}>{_catIndex > 0 ? ',' : ''} {_category}</NavLink>
                        )
                    })
                }
            </div>
            <h2 className="av-large-title">{_content.title}</h2>
            <div dangerouslySetInnerHTML={
                { __html: _content.detail }
            }></div>
        </div>
    )
}

export default SectionCaseDetailContent;