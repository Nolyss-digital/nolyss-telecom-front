/**
 * @module Page-Case-Detail
 */

import { BANNER_TYPE } from "../../../globals/constants";
import { TypePageCaseDetail } from "../../@types/pageTypes";
import { useEffect, useState } from "react";
import { getCaseDetail } from "../../../api/case-service";
import { loadScript } from "../../../globals/common-functions";
import banner from '../../../globals/banner.json';
import SectionInnerPageBanner from "../../sections/common/banner";
import SectionCaseDetailEvent from "../../sections/case-study/case-detail-event";
import SectionCaseDetailContent from "../../sections/case-study/case-detail-content";
import SectionCaseDetailPagination from "../../sections/case-study/case-detail-pagination";

/**
 * 
 * @returns Markup template for sample page Case Detail
 */
function CaseDetailPage() {

    const _caseDefault: TypePageCaseDetail = {};
    const [results, setResults] = useState(_caseDefault);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {

        getCaseDetail((response: TypePageCaseDetail) => {
            setIsFetching(false);
            setResults(response);
            loadScript("js/custom.js");
        })

    }, [isFetching])

    return (
        <>
            {/* INNER PAGE BANNER */}
            <SectionInnerPageBanner _data={banner.case_detail} _type={BANNER_TYPE.IMAGE} />
            {/* INNER PAGE BANNER END */}

            {/* Case Study SECTION START */}
            <div className="section-full p-t50 p-b90 site-bg-white">
                <div className="container">
                    <div className="section-content">
                        <div className="av-case-detail-wrap">
                            <div className="row">

                                {/* left content section */}
                                {
                                    results.content &&
                                    <div className="col-xl-8 col-lg-8 col-md-12">
                                        <div className="av-case-detail-wrap">
                                            <SectionCaseDetailContent _content={results.content!} />
                                            <SectionCaseDetailPagination _paging={results.pagination!} />
                                        </div>
                                    </div>
                                }

                                {/* right event section */}
                                {
                                    results.event &&
                                    <div className="col-xl-4 col-lg-4 col-md-12 sticky-sidebar">
                                        <SectionCaseDetailEvent _event={results.event!} />
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Case Study SECTION END */}
        </>
    )
}
export default CaseDetailPage;