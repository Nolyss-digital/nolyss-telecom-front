/**
 * @module Template-Home-Page-Style-1
 */

import { useEffect, useState } from "react";
import { loadScript } from "../../../globals/common-functions";
import { getHome1Data } from "../../../api/home1-service";
import { TypePageHome1 } from "../../@types/pageTypes";
import SectionHome1Slider from "../../sections/home/home1/home1-slider";
import SectionHome1Services from "../../sections/home/home1/home1-services";
import SectionHome1About from "../../sections/home/home1/home1-about";
import SectionHome1CaseStudy from "../../sections/home/home1/home1-case-study";
import SectionHome1Pricing from "../../sections/home/home1/home1-pricing";
import SectionHome1WhatWeDo from "../../sections/home/home1/home1-what-we-do";
import SectionHome1ITSolutions from "../../sections/home/home1/home1-it-solutions";
import SectionHome1Testimonials from "../../sections/home/home1/home1-testimonials";
import SectionHome1Blogs from "../../sections/home/home1/home1-blogs";
import SectionHome1InstaGallery from "../../sections/home/home1/home1-insta-gallery";

/**
 * 
 * @returns Markup template for sample page Home1
 */
const Home1Page = () => {

    const _home1Default: TypePageHome1 = {};
    const [results, setResults] = useState(_home1Default);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {

        getHome1Data((response: TypePageHome1) => {
            setIsFetching(false);
            setResults(response);
            loadScript("js/custom.js")
        })

    }, [isFetching])

    return (
        <>
            {/*SLIDER BANNER START*/}
            {
                results.slider &&
                <SectionHome1Slider
                    _slider={results.slider!}
                />
            }
            {/*SLIDER BANNER END*/}

            {/* Services SECTION START */}
            {
                (results.services && results.clients)  &&
                <SectionHome1Services
                    _services={results.services!}
                    _clients={results.clients!}
                />
            }

            {/* Services SECTION END */}

            {/* About US SECTION START */}
            {
                results.about &&
                <SectionHome1About
                    _about={results.about!}
                />
                }
            {/* About US SECTION END */}

            {/* Case Study SECTION START */}
            {
                results.caseStudy &&
                <SectionHome1CaseStudy
                _caseStudy={results.caseStudy!}
            />
            }
            {/* Case Study SECTION END */}

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

            {/* IT Solutions SECTION START */}
            {
                results.it &&
                <SectionHome1ITSolutions
                _it={results.it!}
            />
            }
            {/* IT Solutions SECTION START */}

            {/* Testimonials SECTION START */}
            {
                results.testimonials &&
                <SectionHome1Testimonials
                _testimonials={results.testimonials!}
            />
            }
            {/* Testimonials SECTION END */}

            {/* OUR BLOG SECTION START */}
            {
                results.blogs &&
                <SectionHome1Blogs
                _blogs={results.blogs!}
            />
            }
            {/* OUR BLOG SECTION END */}

            {/*Insta Gallery*/}
            {
                results.instagram &&
                <SectionHome1InstaGallery
                _instagram={results.instagram!}
            />
            }
            {/*Insta Gallery*/}
        </>
    )
}
export default Home1Page;