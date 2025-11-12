/**
 * @module Section-Contact-FAQ
 */

import { TypeContact } from "../../@types/reusableTypes";

/**
 * 
 * @param props : Data supplied to display frequently asked questions about contact section
 * @returns Markup for FAQ of contact section
 */
const SectionFAQContact = (props: {
    _contact: TypeContact
}) => {
    const { _contact } = props;
    return (
        <div className="section-full p-t0 p-b90 site-bg-white av-FAQ-info-section-wrap wow fadeInDown" data-wow-offset={100} data-wow-delay="0.2">
            <div className="container">
                <div className="section-content">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 m-b30">
                            <div className="av-icon-box-classic">
                                <div className="av-media">
                                    <span><i className="feather feather-phone-call" /></span>
                                </div>
                                <div className="av-content">
                                    <h3 className="av-title">{_contact.phone}</h3>
                                    <p>{_contact.phone_subtitle}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 m-b30">
                            <div className="av-icon-box-classic">
                                <div className="av-media">
                                    <span><i className="feather feather-mail" /></span>
                                </div>
                                <div className="av-content">
                                    <h3 className="av-title">{_contact.email}</h3>
                                    <p>{_contact.email_subtitle}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 m-b30">
                            <div className="av-icon-box-classic">
                                <div className="av-media">
                                    <span><i className="feather feather-map-pin" /></span>
                                </div>
                                <div className="av-content">
                                    <h3 className="av-title">{_contact.location}</h3>
                                    <p>{_contact.location_subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFAQContact;