/**
 * @module Template-Home-Page-Style-2
 */

import { useEffect, useState } from "react";
import { loadScript } from "../../../globals/common-functions";
import { TypePageHome2 } from "../../@types/pageTypes";
import { getHome2Data } from "../../../api/home2-service";
import SectionHome2Slider from "../../sections/home/home2/home2-slider";
import SectionHome2About from "../../sections/home/home2/home2-about";
import SectionHome2CaseStudy from "../../sections/home/home2/home2-case-study";
import SectionHome2Services from "../../sections/home/home2/home2-services";
import SectionHome2Testimonials from "../../sections/home/home2/home2-testimonials";
import SectionHome2Team from "../../sections/home/home2/home2-team";
import SectionHome2FAQ from "../../sections/home/home2/home2-faq";
import SectionHome2Pricing from "../../sections/home/home2/home2-pricing";
import SectionHome2WhatWeDo from "../../sections/home/home2/home2-what-we-do";
import SectionHome1InstaGallery from "../../sections/home/home1/home1-insta-gallery";
import SectionHome1Blogs from "../../sections/home/home1/home1-blogs";

/**
 * 
 * @returns Markup template for sample page Home2
 */
const Home2Page = () => {

    const _home2Default: TypePageHome2 = {};
    const [results, setResults] = useState(_home2Default);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {

        getHome2Data((response: TypePageHome2) => {
            setIsFetching(false);
            setResults(response);
            loadScript("js/custom.js")
            loadScript("js/masonry-grid.js");
        })

    }, [isFetching])

    return (
        <>
            {/*SLIDER BANNER START*/}
            {
                results.slider &&
                <SectionHome2Slider
                    _slider={results.slider!} />
            }

            {/*SLIDER BANNER END*/}

            {/* About US SECTION START */}
            {
                results.about &&
                <SectionHome2About
                    _about={results.about!}
                    _clients={results.clients} />
            }
            {/* About US SECTION END */}

            {/*Services SECTION START */}
            {
                results.services &&
                <SectionHome2Services 
                _services={results.services!} />
            }
            {/* Services SECTION END */}

            {/* Case Study SECTION START */}
            {
                results.caseStudy &&
                <SectionHome2CaseStudy 
                _caseStudy={results.caseStudy!} />
            }
            {/* Case Study SECTION END */}

            {/* Testimonials SECTION START */}
            {
                results.testimonials &&
                <SectionHome2Testimonials 
                _testimonials={results.testimonials!} />
            }
            {/* Testimonials SECTION END */}

            {/* Team SECTION START */}
            {
                results.team &&
                <SectionHome2Team 
                _team={results.team!} />
            }
            {/* Team SECTION END */}

            {/* FAQ SECTION START */}
            {
                results.faq &&
                <SectionHome2FAQ 
                _faqs={results.faq!} />
            }
            {/* FAQ SECTION START */}

            {/* Pricing plan SECTION START */}
            {
                results.pricing && 
                <SectionHome2Pricing 
                _pricing={results.pricing!} />
            }
            {/* Pricing plan SECTION END */}

            {/* We Are About SECTION START */}
            {
                results.whatWeDo &&
                <SectionHome2WhatWeDo 
                _whatWeDo={results.whatWeDo!} />
            }
            {/* We Are About SECTION START */}

            {/*Insta Gallery*/}
            {
                results.instagram &&
                <SectionHome1InstaGallery 
                _instagram={results.instagram!} />
            }
            {/*Insta Gallery*/}

            {/* OUR BLOG SECTION START */}
            {
                results.blogs &&
                <SectionHome1Blogs 
                _blogs={results.blogs!} />
            }
            {/* OUR BLOG SECTION END */}
        </>
    )
}
export default Home2Page;