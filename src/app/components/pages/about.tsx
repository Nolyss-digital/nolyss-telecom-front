/**
 * @module Page-About-Us
 */

import { SECTION_THEME } from "../../../globals/constants";
import { TypePageAbout } from "../../@types/pageTypes";
import { useEffect, useState } from "react";
import { getAboutData } from "../../../api/about-service";
import { loadScript } from "../../../globals/common-functions";
import banner from '../../../globals/banner.json';
import SectionHome2About from "../../sections/home/home2/home2-about";
import SectionHome2Team from "../../sections/home/home2/home2-team";
import SectionHome1ITSolutions from "../../sections/home/home1/home1-it-solutions";
import SectionHome1Pricing from "../../sections/home/home1/home1-pricing";
import SectionHome1WhatWeDo from "../../sections/home/home1/home1-what-we-do";
import SectionHome3Services from "../../sections/home/home3/home3-services";
import SectionInnerPageBanner from "../../sections/common/banner";

/**
 * 
 * @returns Markup template for sample page About Us Page
 */
function AboutUsPage() {

    const _aboutDefault: TypePageAbout = {};
    const [results, setResults] = useState(_aboutDefault);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {

        getAboutData((response: TypePageAbout) => {
            setIsFetching(false);
            setResults(response);
            loadScript("js/custom.js")
        })

    }, [isFetching])

    return (
        <>
            {/* INNER PAGE BANNER */}
            <SectionInnerPageBanner _data={banner.about} />
            {/* INNER PAGE BANNER END */}

            {/* About US SECTION START */}
            {
                results.about &&
                <SectionHome2About
                    _about={results.about!} />
            }
            {/* About US SECTION END */}

            {/* Team SECTION START */}
            {
                results.team &&
                <SectionHome2Team 
                _team={results.team!} 
                _theme={SECTION_THEME.LIGHT} />
            }
            {/* Team SECTION END */}
            
            {/* IT Solutions SECTION START */}
            {
                results.it &&
                <SectionHome1ITSolutions
                _it={results.it!}
            />
            }
            {/* IT Solutions SECTION START */}
            
            {/* Pricing plan SECTION START */}
            {
                results.pricing &&
                <SectionHome1Pricing
                _pricing={results.pricing!}
            />
            }
            {/* Pricing plan SECTION END */}

            {/* We Are About SECTION START */}
            {
                results.whatWeDo &&
                <SectionHome1WhatWeDo
                _whatWeDo={results.whatWeDo!}
            />
            }
            {/* We Are About SECTION START */}

            {/*Services SECTION START */}
            {
                results.services &&
                <SectionHome3Services 
                _services={results.services!} 
                _theme={SECTION_THEME.LIGHT} />
            }
            {/* Services SECTION END */}
        </>
    )
}
export default AboutUsPage;