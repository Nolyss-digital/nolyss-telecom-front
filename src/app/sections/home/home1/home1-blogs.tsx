/**
 * @module Section-Home1-Blogs
 */

import { TypeSectionBlog } from "../../../@types/sectionTypes";
import SectionBlogsCommonBox from "../../blogs/blog-box";

/**
 * 
 * @param props : Data supplied to display blog list
 * @returns Markup for recent blogs
 */
const SectionHome1Blogs = (
    props: {
        _blogs: TypeSectionBlog
    }
) => {
    const { _blogs } = props;
    return (
        <div className="section-full p-t120 p-b90 site-bg-white av-blog-section-wrap wow fadeInDown" data-wow-offset={100} data-wow-delay="0.2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 m-b40">
                        {/* TITLE START*/}
                        <div className="section-head left">
                            <h2 className="av-large-title">{_blogs.title}</h2>
                            <p>{_blogs.subtitle}</p>
                        </div>
                        {/* TITLE END*/}
                    </div>
                </div>
                <div className="section-content">
                    <div className="owl-carousel av-blog-carousel next-prev-top-right m-b30">
                        {
                            _blogs.blogs.map((_item, _index) => {
                                return (
                                    <div key={_index} className="item">
                                        <SectionBlogsCommonBox _data={_item} />
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

export default SectionHome1Blogs;