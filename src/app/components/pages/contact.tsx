/**
 * @module Page-Contact-Us
 */

import { BANNER_TYPE } from "../../../globals/constants";
import { TypePageContact } from "../../@types/pageTypes";
import { useEffect, useState } from "react";
import { getContactData } from "../../../api/contact-service";
import { loadScript } from "../../../globals/common-functions";
import banner from "../../../globals/banner.json";
import SectionInnerPageBanner from "../../sections/common/banner";
import SectionContactInfo from "../../sections/contact/contct-info";
import SectionContactForm from "../../sections/contact/contact-form";
import SectionContactAdvert from "../../sections/contact/contact-advert";

/**
 * 
 * @returns Markup template for sample page Contact Us
 */
function ContactUsPage() {

    const _contactDefault: TypePageContact = {};
    const [results, setResults] = useState(_contactDefault);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {

        getContactData((response: TypePageContact) => {
            setIsFetching(false);
            setResults(response);
            loadScript("js/custom.js");
        })

    }, [isFetching])

    return (
        <>
            {/* INNER PAGE BANNER */}
            <SectionInnerPageBanner _data={banner.contact} _type={BANNER_TYPE.CONTACT} />
            {/* INNER PAGE BANNER END */}

            {/* Case Study SECTION START */}
            <div className="section-full p-t120 p-b90 site-bg-white">
                <div className="container">
                    <div className="section-content">
                        {
                            results.contact &&
                            <div className="av-contact-info-section wow fadeInDown" data-wow-delay="0.2">
                                <SectionContactInfo _contact={results.contact!} />
                            </div>
                        }
                        <div className="av-contact-fm-section wow fadeInDown" data-wow-delay="0.2">
                            <div className="row">
                                <div className="col-lg-8 col-md-7 m-b30">
                                    <SectionContactForm />
                                </div>
                                <div className="col-lg-4 col-md-5 m-b30">
                                    <SectionContactAdvert />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Case Study SECTION END */}
        </>
    )
}
export default ContactUsPage;