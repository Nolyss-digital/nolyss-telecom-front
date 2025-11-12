/**
 * @module Page-Case-Study
 */

import { TypePageCaseStudy } from "../../@types/pageTypes";
import { useEffect, useState } from "react";
import { getCasesData } from "../../../api/case-service";
import { loadScript } from "../../../globals/common-functions";
import banner from '../../../globals/banner.json';
import SectionInnerPageBanner from "../../sections/common/banner";
import SectionCaseStudyCases from "../../sections/case-study/case-study-cases";
import SectionPagination from "../../sections/common/pagination";

/**
 * 
 * @returns Markup template for sample page Case Study
 */
function CaseStudyPage() {

    const _casesDefault: TypePageCaseStudy = {};
    const [results, setResults] = useState(_casesDefault);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {

        getCasesData((response: TypePageCaseStudy) => {
            setIsFetching(false);
            setResults(response);
            loadScript("js/custom.js");
        })

    }, [isFetching])

    return (
        <>
            {/* INNER PAGE BANNER */}
            <SectionInnerPageBanner _data={banner.case_study} />
            {/* INNER PAGE BANNER END */}

            {/* Case Study SECTION START */}
            {
                results.cases &&
                <div className="section-full p-t120 p-b120 site-bg-white av-case3-section-wrap">
                    <div className="container">
                        <div className="section-content">
                            <SectionCaseStudyCases _cases={results.cases!} />
                            <SectionPagination />
                        </div>
                    </div>
                </div>
            }
            {/* Case Study SECTION END */}
        </>
    )
}
export default CaseStudyPage;