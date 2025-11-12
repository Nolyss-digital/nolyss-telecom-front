/**
 * @module Section-Blog-Sidebar
 */

import { NavLink } from "react-router-dom";
import { navUrl } from "../../../globals/common-functions";
import { route } from "../../../globals/constants";
import { TypeSectionBlogSidebar } from "../../@types/sectionTypes";
import AvertImage from "../../../globals/elements/avertimg";
import SectionContactAdvert from "../contact/contact-advert";

/**
 * 
 * @param props : Data supplied to display sidebar
 * @returns Markup for sample sidebar
 */
const SectionBlogsSidebar = (props: {
    _data: TypeSectionBlogSidebar
}) => {
    const { services, news } = props._data;
    return (
        <div className="side-bar sx-bg-white">
            {/* SEARCH */}
            <div className="widget">
                <h4 className="widget-title ">Search</h4>
                <div className="search-bx">
                    <form role="search" method="post">
                        <div className="input-group">
                            <input name="news-letter" type="text" className="form-control bg-gray" placeholder="Enter Your Keyword..." />
                            <span className="input-group-btn">
                                <button type="button" className="btn"><i className="feather feather-search" /></button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>

            {/* Services list  */}
            <div className="widget widget_services ">
                <h4 className="widget-title">Services List</h4>
                <ul className="bg-white">
                    {
                        services.map((_item, _index) => {
                            return (
                                <li key={_index}>
                                    <NavLink to={navUrl.services(route.services.DETAIL)}>
                                        {_item}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            {/* Widget Social */}
            <div className="widget widget_social_icon">
                <h4 className="widget-title">Social Icon</h4>
                <ul className="social-icons-st1 gray-style">
                    <li><a href="https://www.facebook.com" className="fa-brands fa-facebook"> </a></li>
                    <li><a href="https://www.x.com" className="fa-brands fa-square-x-twitter"> </a></li>
                    <li><a href="https://www.instagram.com" className="fa-brands fa-square-instagram"> </a></li>
                    <li><a href="https://in.linkedin.com" className="fa-brands fa-linkedin"> </a></li>
                </ul>
            </div>

            {/* RECENT POSTS */}
            <div className="widget widget-news-post">
                <h4 className="widget-title">Latest News</h4>
                <div className="section-content">
                    <div className="widget-post-bx">
                        {
                            news.map((_item, _index) => {
                                return (
                                    <div key={_index} className="av-news-post">
                                        <div className="wt-post-media">
                                            <NavLink to={navUrl.blogs(route.blogs.DETAIL)}><AvertImage src={_item.image} alt="" /> </NavLink>
                                        </div>
                                        <div className="av-post-info">
                                            <div className="av-post-head">
                                                <div className="post-categories">
                                                    <NavLink to={navUrl.blogs(route.blogs.DETAIL)}>{_item.category}</NavLink>
                                                </div>
                                                <div className="post-author">
                                                    <i className="feather feather-user" />
                                                    By
                                                    <NavLink to={navUrl.blogs(route.blogs.DETAIL)}>{_item.author}</NavLink>
                                                </div>
                                            </div>
                                            <h3 className="post-title">
                                                <NavLink to={navUrl.blogs(route.blogs.DETAIL)}>{_item.title}</NavLink>
                                            </h3>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* advertisement */}
            <SectionContactAdvert />
        </div>
    )
}

export default SectionBlogsSidebar;