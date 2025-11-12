/**
 * @module Section-Home2-FAQ
 */

import { TypeSectionFAQ } from "../../../@types/sectionTypes";
import AvertImage from "../../../../globals/elements/avertimg";

/**
 * 
 * @param props : Data supplied to display FAQ
 * @returns Section with frequently asked questions
 */
const SectionHome2FAQ = (
    props: {
        _faqs: TypeSectionFAQ
    }
) => {
    const { _faqs } = props;
    return (
        <div className="section-full p-t120 p-b90 site-bg-white av-FAQ-section-wrap wow fadeInDown" data-wow-offset={100} data-wow-delay="0.2">
            <div className="container">
                <div className="section-content">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 m-b30">
                            <div className="av-faq-info-wrap">
                                <div className="av-content-title">
                                    <h2 className="av-large-title2">{_faqs.title}</h2>
                                    <p className="p-text">{_faqs.subtitle}</p>
                                </div>
                                <div className="av-faq-info">
                                    <div className="accordion av-acdn" id="sf-faq-accordion">
                                        {
                                            _faqs.faqs.map((_item, _index) => {
                                                return (
                                                    <div key={_index} className="accordion-item">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#FAQ"+_index} aria-expanded="false">
                                                            {_item.que}
                                                        </button>
                                                        <div id={"FAQ"+_index} className="accordion-collapse collapse" data-bs-parent="#sf-faq-accordion">
                                                            <div className="accordion-body">
                                                                {_item.ans}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 m-b30 sticky-sidebar">
                            <div className="av-faq-media">
                                <div className="av-media-1">
                                    <AvertImage src={_faqs.image} alt="#" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SectionHome2FAQ;