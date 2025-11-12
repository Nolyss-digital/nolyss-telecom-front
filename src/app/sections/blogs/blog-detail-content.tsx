/**
 * @module Section-Blog-Detail-Content
 */

import { NavLink } from "react-router-dom";
import { navUrl } from "../../../globals/common-functions";
import { route } from "../../../globals/constants";
import { TypeSectionBlogContent } from "../../@types/sectionTypes";

/**
 * 
 * @param props : Data supplied to display a blog's content
 * @returns Markup to display content of a blog
 */
const SectionBlogDetailContent = (props: {
    _content: TypeSectionBlogContent
}) => {
    const { _content } = props;
    return (
        <>
            <div className="av-lt-blog-detail">
                <div className="av-post-head">
                    <div className="post-categories">
                        <NavLink to={navUrl.blogs(route.blogs.DETAIL)}>{_content.category}</NavLink>
                    </div>
                    <div className="post-author">
                        <i className="feather feather-user" />
                        By
                        <NavLink to={navUrl.pages(route.pages.TEAM)}>{_content.author}</NavLink>
                    </div>
                </div>
                <h3 className="post-title">
                    {_content.title}
                </h3>
                <div className="post-date">
                    <span className="date">{_content.day}</span>
                    <span className="month">{_content.month}</span>
                </div>
            </div>

            <div dangerouslySetInnerHTML={
                { __html: _content.detail }
            }></div>
        </>
    )
}

export default SectionBlogDetailContent;