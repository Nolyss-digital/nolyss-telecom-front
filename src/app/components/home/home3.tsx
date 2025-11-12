/**
 * @module Template-Home-Page-Style-3
 */

import { useEffect, useState } from "react";
import { loadScript } from "../../../globals/common-functions";
import { TypePageHome3 } from "../../@types/pageTypes";
import { getHome3Data } from "../../../api/home3-service";
import { SECTION_THEME } from "../../../globals/constants";
import SectionHome3Slider from "../../sections/home/home3/home3-slider";
import SectionHome3Services from "../../sections/home/home3/home3-services";
import SectionHome3Skills from "../../sections/home/home3/home3-skills";
import SectionHome3CaseStudy from "../../sections/home/home3/home3-case-study";
import SectionHome3About from "../../sections/home/home3/home3-about";
import SectionHome2Team from "../../sections/home/home2/home2-team";
import SectionHome1ITSolutions from "../../sections/home/home1/home1-it-solutions";
import SectionHome1Testimonials from "../../sections/home/home1/home1-testimonials";
import SectionHome1WhatWeDo from "../../sections/home/home1/home1-what-we-do";
import SectionHome1Blogs from "../../sections/home/home1/home1-blogs";

/**
 * 
 * @returns Markup template for sample page Home3
 */
const Home3Page = () => {

    const _home3Default: TypePageHome3 = {};
    const [results, setResults] = useState(_home3Default);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {

        getHome3Data((response: TypePageHome3) => {
            setIsFetching(false);
            setResults(response);
            loadScript("js/custom.js");
            loadScript("js/masonry-grid.js");
        })

    }, [isFetching])

    return (
        <>
            {/*SLIDER BANNER START*/}
            {
                results.slider &&
                <SectionHome3Slider _slider={results.slider!} />
            }
            {/*SLIDER BANNER END*/}

            {/*Services SECTION START */}
            {
                results.services &&
                <SectionHome3Services _services={results.services!} />
            }
            {/* Services SECTION END */}

            {/* My Skills SECTION START */}
            {
                results.skills &&
                <SectionHome3Skills _skills={results.skills!} />
            }
            {/* My Skills SECTION START */}

            {/* Case Study SECTION START */}
            {
                results.caseStudy &&
                <SectionHome3CaseStudy _caseStudy={results.caseStudy!} />
            }
            {/* Case Study SECTION END */}
            
            {/* About US SECTION START */}
            {
                results.about &&
                <SectionHome3About _about={results.about!} />
            }
            {/* About US SECTION END */}
            
            {/* Team SECTION START */}
            {
                results.team &&
                <SectionHome2Team 
                _team={results.team!} _theme={SECTION_THEME.LIGHT} />
            }
            {/* Team SECTION END */}

            {/* IT Solutions SECTION START */}
            {
                results.it &&
                <SectionHome1ITSolutions _it={results.it!} />
            }
            {/* IT Solutions SECTION START */}
            
            {/* Testimonials SECTION START */}
            {
                results.testimonials &&
                <SectionHome1Testimonials _testimonials={results.testimonials!} />
            }
            {/* Testimonials SECTION END */}

            {/* We Are About SECTION START */}
            {
                results.whatWeDo &&
                <SectionHome1WhatWeDo 
                _whatWeDo={results.whatWeDo!}
                _background={SECTION_THEME.DARK} />
            }
            {/* We Are About SECTION START */}

            {/* OUR BLOG SECTION START */}
            {
                results.blogs &&
                <SectionHome1Blogs _blogs={results.blogs!} />
            }
            {/* OUR BLOG SECTION END */}
        </>
    )
}
export default Home3Page;