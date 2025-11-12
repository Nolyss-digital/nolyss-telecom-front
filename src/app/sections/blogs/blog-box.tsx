/**
 * @module Section-Blog-Box
 */

import { NavLink } from "react-router-dom";
import { TypeBlog } from "../../@types/reusableTypes";
import { navUrl } from "../../../globals/common-functions";
import { BLOG_BOX, route } from "../../../globals/constants";
import AvertImage from "../../../globals/elements/avertimg";
import AvertAudioPlayer from "../../../globals/elements/audio-player";

/**
 * 
 * @param props : Data supplied to display a single blog
 * @returns Markup for single blog box (of type image/audio/video etc.)
 */
const SectionBlogsCommonBox = (props: {
    _data: TypeBlog
}) => {
    const _item = props._data;
    return (
        <div className="av-lt-blog">
            <div className="wt-post-media">
                {
                    (_item.type === BLOG_BOX.IMAGE && _item.image) &&
                    <NavLink to={navUrl.blogs(route.blogs.DETAIL)}><AvertImage src={_item.image!} alt="" /> </NavLink>
                }

                {
                    (_item.type === BLOG_BOX.AUDIO && _item.audio) &&
                    <div className="app-cover-wrap">
                        <div id="app-cover">
                            <div id="bg-layer" />
                            <AvertAudioPlayer _playlist={_item.audio!} />
                        </div>
                    </div>
                }

                {
                    (_item.type === BLOG_BOX.VIDEO && _item.video) &&
                    <>
                        <NavLink to={navUrl.blogs(route.blogs.DETAIL)}><AvertImage src={_item.video!.thumb} alt="" /> </NavLink>
                        <div className="av-vid-btn-wrap">
                            <a href={_item.video!.link} className="mfp-video av-vid-btn btn-animation">
                                <i className="fa fa-play" />
                            </a>
                        </div>
                    </>
                }

                {
                    _item.type !== BLOG_BOX.AUDIO &&
                    <div className="post-date">
                        <span className="date">{_item.day}</span>
                        <span className="month">{_item.month}</span>
                    </div>
                }

            </div>
            <div className="av-post-info">
                <div className="av-post-head">
                    <div className="post-categories">
                        <NavLink to={navUrl.blogs(route.blogs.BLOGS)}>{_item.category}</NavLink>
                    </div>
                    <div className="post-author">
                        <i className="feather feather-user" />
                        By
                        <NavLink to={navUrl.blogs(route.blogs.BLOGS)}>{_item.author}</NavLink>
                    </div>
                </div>
                <h3 className="post-title">
                    <NavLink to={navUrl.blogs(route.blogs.DETAIL)}>{_item.title}</NavLink>
                </h3>
                <div className="av-post-ftr">
                    <NavLink to={navUrl.blogs(route.blogs.DETAIL)} className="site-button button-sm gray">Read More <i className="feather feather-plus" /> </NavLink>
                    <div className="av-post-atglance">
                        <div className="post-comment">
                            <i className="feather feather-message-square" />
                            <NavLink to={navUrl.blogs(route.blogs.DETAIL)}>{_item.comments}</NavLink>
                        </div>
                        <div className="post-view">
                            <i className="feather feather-eye" />{_item.views}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionBlogsCommonBox;