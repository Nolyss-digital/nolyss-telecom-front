/**
 * @module Section-Contact-Info
 */

import { TypeSectionContact } from "../../@types/sectionTypes";

/**
 * 
 * @param props : Data supplied to display contact information
 * @returns Markup for contact information
 */
const SectionContactInfo = (props: {
    _contact: TypeSectionContact
}) => {
    const { _contact } = props;
    return (
        <>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="av-content-title">
                        <div className="av-sm-title">{_contact.title}</div>
                        <h2 className="av-large-title">{_contact.subtitle}</h2>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div dangerouslySetInnerHTML={
                                { __html: _contact.description1 }
                            }></div>
                        </div>
                        <div className="offset-lg-1 col-lg-5 col-md-6">
                            <div dangerouslySetInnerHTML={
                                { __html: _contact.description2 }
                            }></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ac-contact-info">
                <ul>
                    <li>
                        <div className="av-contact-icon-box">
                            <div className="twm-icon-box">
                                <i className="feather feather-phone-call" />
                            </div>
                            <div className="twm-icon-box-content">
                                <p>Phone Number</p>
                                <h3 className="twm-tilte">{_contact.contact.phone} call</h3>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="av-contact-icon-box">
                            <div className="twm-icon-box">
                                <i className="feather feather-mail" />
                            </div>
                            <div className="twm-icon-box-content">
                                <p>Quick You Email!</p>
                                <h3 className="twm-tilte">{_contact.contact.email}</h3>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="av-contact-icon-box">
                            <div className="twm-icon-box">
                                <i className="feather feather-map-pin" />
                            </div>
                            <div className="twm-icon-box-content">
                                <p>Your Location</p>
                                <h3 className="twm-tilte">{_contact.contact.location}</h3>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SectionContactInfo;