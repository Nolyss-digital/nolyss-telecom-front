/**
 * @module Page-Pricing-Plans
 */

import { SECTION_THEME } from "../../../globals/constants";
import { loadScript } from "../../../globals/common-functions";
import { TypePagePricing } from "../../@types/pageTypes";
import { useEffect, useState } from "react";
import { getPricingData } from "../../../api/pricing-service";
import banner from "../../../globals/banner.json";
import SectionInnerPageBanner from "../../sections/common/banner";
import SectionHome1Pricing from "../../sections/home/home1/home1-pricing";
import SectionHome1ITSolutions from "../../sections/home/home1/home1-it-solutions";
import SectionHome2WhatWeDo from "../../sections/home/home2/home2-what-we-do";
import SectionHome2Team from "../../sections/home/home2/home2-team";

/**
 * 
 * @returns Markup template for sample page Pricing Plan
 */
function PricingPlansPage() {

    const _pricingDefault: TypePagePricing = {};
    const [results, setResults] = useState(_pricingDefault);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {

        getPricingData((response: TypePagePricing) => {
            setIsFetching(false);
            setResults(response);
            loadScript("js/custom.js")
        })

    }, [isFetching])

    return (
        <>
            {/* INNER PAGE BANNER */}
            <SectionInnerPageBanner _data={banner.pricing} />
            {/* INNER PAGE BANNER END */}

            {/* Pricing plan SECTION START */}
            {
                results.pricing &&
                <SectionHome1Pricing
                _pricing={results.pricing!}
            />
            }
            {/* Pricing plan SECTION END */}

            {/* IT Solutions SECTION START */}
            {
                results.it &&
                <SectionHome1ITSolutions
                _it={results.it!}
            />
            }
            {/* IT Solutions SECTION START */}

            {/* We Are About SECTION START */}
            {
                results.whatWeDo &&
                <SectionHome2WhatWeDo 
                _whatWeDo={results.whatWeDo!} />
            }
            {/* We Are About SECTION START */}

            {/* Team SECTION START */}
            {
                results.team &&
                <SectionHome2Team 
                _team={results.team!} _theme={SECTION_THEME.LIGHT} />
            }
            {/* Team SECTION END */}
        </>
    )
}
export default PricingPlansPage;