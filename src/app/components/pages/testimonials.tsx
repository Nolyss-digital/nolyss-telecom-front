/**
 * @module Page-Testimonials
 */

import { useEffect, useState } from "react";
import { TypePageTestimonials } from "../../@types/pageTypes";
import { SectionHome1TestimonialsBox } from "../../sections/home/home1/home1-testimonials";
import { getTestimonialsData } from "../../../api/testimonials-service";
import { loadScript } from "../../../globals/common-functions";
import banner from "../../../globals/banner.json";
import SectionInnerPageBanner from "../../sections/common/banner";

/**
 * 
 * @returns Markup template for sample page Testimonials
 */
function TestimonialsPage() {

    const _testimonialsDefault: TypePageTestimonials = {};
    const [results, setResults] = useState(_testimonialsDefault);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {

        getTestimonialsData((response: TypePageTestimonials) => {
            setIsFetching(false);
            setResults(response);
            loadScript("js/custom.js");
        })

    }, [isFetching])

    return (
        <>
            {/* INNER PAGE BANNER */}
            <SectionInnerPageBanner _data={banner.clients} />
            {/* INNER PAGE BANNER END */}

            {/* Testimonials SECTION START */}
            <div className="section-full p-t120 p-b90 site-bg-white av-pricing-section-wrap">
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            {
                                (results.testimonials && results.testimonials!.length > 0) &&
                                results.testimonials!.map((_item, _index) => {
                                    return (
                                        <div key={_index} className="col-lg-4 col-md-6 m-b30 wow fadeInDown" data-wow-delay="0.2">
                                            <SectionHome1TestimonialsBox _data={_item} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonials SECTION END */}
        </>
    )
}
export default TestimonialsPage;