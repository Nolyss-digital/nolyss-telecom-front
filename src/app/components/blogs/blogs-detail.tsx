/**
 * @module Page-Blog-Detail
 */

import { BANNER_TYPE } from "../../../globals/constants";
import { TypePageBlogDetail } from "../../@types/pageTypes";
import { useEffect, useState } from "react";
import { getBlogDetail } from "../../../api/blogs-service";
import { loadScript } from "../../../globals/common-functions";
import banner from "../../../globals/banner.json";
import SectionInnerPageBanner from "../../sections/common/banner";
import SectionBlogsSidebar from "../../sections/blogs/blogs-sidebar";
import SectionBlogComments from "../../sections/blogs/blogs-comments";
import SectionCaseDetailPagination from "../../sections/case-study/case-detail-pagination";
import SectionBlogAuthor from "../../sections/blogs/blog-author";
import SectionBlogDetailContent from "../../sections/blogs/blog-detail-content";

/**
 * 
 * @returns Markup template for sample page Blog Detail
 */
function BlogsDetailPage() {

    const _blogDefault: TypePageBlogDetail = {};
    const [results, setResults] = useState(_blogDefault);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {

        getBlogDetail((response: TypePageBlogDetail) => {
            setIsFetching(false);
            setResults(response);
            loadScript("js/custom.js");
        })

    }, [isFetching])

    return (
        <>
            {/* INNER PAGE BANNER */}
            <SectionInnerPageBanner _data={banner.blog_detail} _type={BANNER_TYPE.IMAGE} />
            {/* INNER PAGE BANNER END */}

            {/* Case Study SECTION START */}
            {
                results.content &&
                <div className="section-full p-t50 p-b90 site-bg-white">
                    <div className="container">
                        <div className="section-content">
                            <div className="av-case-detail-wrap">
                                <div className="row">
                                    <div className="col-xl-8 col-lg-8 col-md-12">
                                        <div className="av-blog-detail-wrap">
                                            <div className="av-content-info">

                                                {/* content */}
                                                <SectionBlogDetailContent _content={results.content!} />

                                                {/* author */}
                                                <SectionBlogAuthor _author={results.author!} />
                                            </div>

                                            {/* prev next pagination */}
                                            <SectionCaseDetailPagination _paging={results.pagination!} />
                                        </div>
                                    </div>

                                    {/* SIDE BAR START */}
                                    <div className="col-xl-4 col-lg-4 col-md-12 sticky-sidebar">
                                        <SectionBlogsSidebar _data={results.sidebar!} />
                                    </div>
                                    {/* SIDE BAR END */}
                                </div>

                                {
                                    results.comments &&
                                    <div className="av-blog-comment-section p-t50" id="comment-list">
                                        <div className="comments-area" id="comments">
                                            <SectionBlogComments _comments={results.comments!} />
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* Case Study SECTION END */}
        </>
    )
}
export default BlogsDetailPage;