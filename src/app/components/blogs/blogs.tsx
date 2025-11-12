/**
 * @module Page-Blog-List
 */

import { TypePageBlogs } from "../../@types/pageTypes";
import { useEffect, useState } from "react";
import { getBlogsData } from "../../../api/blogs-service";
import { loadScript } from "../../../globals/common-functions";
import banner from "../../../globals/banner.json";
import SectionInnerPageBanner from "../../sections/common/banner";
import SectionPagination from "../../sections/common/pagination";
import SectionBlogsCommonBox from "../../sections/blogs/blog-box";

/**
 * 
 * @returns Markup template for sample page Blog List
 */
function BlogsPage() {

    const _blogsDefault: TypePageBlogs = {};
    const [results, setResults] = useState(_blogsDefault);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {

        getBlogsData((response: TypePageBlogs) => {
            setIsFetching(false);
            setResults(response);
            loadScript("js/custom.js");
        })

    }, [isFetching])

    return (
        <>
            {/* INNER PAGE BANNER */}
            <SectionInnerPageBanner _data={banner.blogs} />
            {/* INNER PAGE BANNER END */}

            {/* Blog SECTION START */}
            {
                results.blogs &&
                <div className="section-full p-t120 p-b120 site-bg-white av-case3-section-wrap">
                    <div className="container">
                        <div className="section-content">
                            <div className="masonry-wrap row">
                                {
                                    results.blogs!.map((_item, _index) => {
                                        return (
                                            <div key={_index} className="masonry-item col-lg-4 col-md-6 m-b30 wow fadeInDown" data-wow-delay="0.2">
                                                <SectionBlogsCommonBox _data={_item} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <SectionPagination />
                        </div>
                    </div>
                </div>
            }
            {/* Blog Study SECTION END */}
        </>
    )
}
export default BlogsPage;