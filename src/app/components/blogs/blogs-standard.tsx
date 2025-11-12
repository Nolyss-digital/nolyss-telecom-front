/**
 * @module Page-Standard-Blog
 */

import { TypePageBlogs } from "../../@types/pageTypes";
import { useEffect, useState } from "react";
import { getBlogsStandardDataWithSidebar } from "../../../api/blogs-service";
import { loadScript } from "../../../globals/common-functions";
import banner from "../../../globals/banner.json";
import SectionInnerPageBanner from "../../sections/common/banner";
import SectionBlogsSidebar from "../../sections/blogs/blogs-sidebar";
import SectionPagination from "../../sections/common/pagination";
import SectionBlogsCommonBox from "../../sections/blogs/blog-box";

/**
 * 
 * @returns Markup template for sample page Standard Blog List
 */
function BlogsStandardPage() {

    const _blogsDefault: TypePageBlogs = {};
    const [results, setResults] = useState(_blogsDefault);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {

        getBlogsStandardDataWithSidebar((response: TypePageBlogs) => {
            setIsFetching(false);
            setResults(response);
            loadScript("js/custom.js");
        })

    }, [isFetching])

    return (
        <>
            {/* INNER PAGE BANNER */}
            <SectionInnerPageBanner _data={banner.blog_standard} />
            {/* INNER PAGE BANNER END */}

            {/* Blog SECTION START */}
            {
                (results.blogs && results.blogs!.length > 0) &&
                <div className="section-full p-t120 p-b120 site-bg-white av-case3-section-wrap">
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-xl-8 col-lg-8 col-md-12">
                                    <div className="masonry-wrap row">
                                        {
                                            results.blogs!.map((_item, _index) => {
                                                return (
                                                    <div key={_index} className="masonry-item col-lg-12 m-b30 wow fadeInDown" data-wow-delay="0.2">
                                                        <SectionBlogsCommonBox _data={_item} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <SectionPagination />
                                </div>
                                {/* SIDE BAR START */}
                                <div className="col-xl-4 col-lg-4 col-md-12 sticky-sidebar">
                                    <SectionBlogsSidebar _data={results.sidebar!} />
                                </div>
                                {/* SIDE BAR END */}
                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* Blog Study SECTION END */}
        </>
    )
}
export default BlogsStandardPage;