/**
 * @module Page-Frequently-Asked-Questions
 */

import { useEffect, useState } from "react";
import { TypePageFAQ } from "../../@types/pageTypes";
import { getFAQData } from "../../../api/faq-service";
import { loadScript } from "../../../globals/common-functions";
import banner from "../../../globals/banner.json";
import SectionInnerPageBanner from "../../sections/common/banner";
import SectionHome2FAQ from "../../sections/home/home2/home2-faq";
import SectionFAQContact from "../../sections/faq/faq-contact";

/**
 * 
 * @returns Markup template for sample page Frequently Asked Questions
 */
function FAQPage() {

    const _faqDefault: TypePageFAQ = {};
    const [results, setResults] = useState(_faqDefault);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {

        getFAQData((response: TypePageFAQ) => {
            setIsFetching(false);
            setResults(response);
            loadScript("js/custom.js");
        })

    }, [isFetching])

    return (
        <>
            {/* INNER PAGE BANNER */}
            <SectionInnerPageBanner _data={banner.faq} />
            {/* INNER PAGE BANNER END */}
            
            {/* FAQ SECTION START */}
            {
                results.faq &&
                <SectionHome2FAQ _faqs={results.faq!} />
            }
            {/* FAQ SECTION START */}
            
            {/* FAQ info SECTION START */}
            {
                results.contact &&
                <SectionFAQContact _contact={results.contact!} />
            }
            {/* FAQ info SECTION START */}
        </>
    )
}
export default FAQPage;