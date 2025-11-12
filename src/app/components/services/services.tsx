/**
 * @module Page-Services
 */

import { loadScript } from "../../../globals/common-functions";
import { SECTION_THEME } from "../../../globals/constants";
import { TypePageServices } from "../../@types/pageTypes";
import { useEffect, useState } from "react";
import { getServicesData } from "../../../api/services-service";
import banner from "../../../globals/banner.json";
import SectionInnerPageBanner from "../../sections/common/banner";
import SectionHome1Services from "../../sections/home/home1/home1-services";
import SectionHome1WhatWeDo from "../../sections/home/home1/home1-what-we-do";
import SectionHome1ITSolutions from "../../sections/home/home1/home1-it-solutions";
import SectionHome2Team from "../../sections/home/home2/home2-team";
import SectionHome2Testimonials from "../../sections/home/home2/home2-testimonials";

/**
 * 
 * @returns Markup template for sample page Services
 */
function ServicesPage() {

    const _servicesDefault: TypePageServices = {};
    const [results, setResults] = useState(_servicesDefault);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {

        getServicesData((response: TypePageServices) => {
            setIsFetching(false);
            setResults(response);
            loadScript("js/custom.js")
        })

    }, [isFetching])

    return (
        <>
            {/* INNER PAGE BANNER */}
            <SectionInnerPageBanner _data={banner.services} />
            {/* INNER PAGE BANNER END */}

            {/* Services SECTION START */}
            {
                results.services  &&
                <SectionHome1Services
                    _services={results.services!}
                    _background={SECTION_THEME.LIGHT}
                />
            }
            {/* Services SECTION END */}
            
            {/* We Are About SECTION START */}
            {
                results.whatWeDo &&
                <SectionHome1WhatWeDo
                _whatWeDo={results.whatWeDo!}
                _background={SECTION_THEME.DARK}
            />
            }
            {/* We Are About SECTION START */}
            
            {/* IT Solutions SECTION START */}
            {
                results.it &&
                <SectionHome1ITSolutions
                _it={results.it!}
            />
            }
            {/* IT Solutions SECTION START */}
            
            {/* Team SECTION START */}
            {
                results.team &&
                <SectionHome2Team 
                _team={results.team!} _theme={SECTION_THEME.LIGHT} />
            }
            {/* Team SECTION END */}

            {/* Testimonials SECTION START */}
            {
                results.testimonials &&
                <SectionHome2Testimonials 
                _testimonials={results.testimonials!} />
            }
            {/* Testimonials SECTION END */}
        </>
    )
}
export default ServicesPage;