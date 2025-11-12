/**
 * @module Section-Home2-What-We-Do
 */

import { NavLink } from "react-router-dom";
import { navUrl } from "../../../../globals/common-functions";
import { route } from "../../../../globals/constants";
import { TypeSectionWhatWeDo } from "../../../@types/sectionTypes";
import AvertImage from "../../../../globals/elements/avertimg";

/**
 * 
 * @param props Data supplied to display our working
 * @returns Markup for section showing our working style
 */
const SectionHome2WhatWeDo = (
    props: {
        _whatWeDo: TypeSectionWhatWeDo
    }
) => {
    const { _whatWeDo } = props;
    return (
        <div className="section-full p-t120 p-b90 site-bg-white av-whatwe-section-wrap wow fadeInDown" data-wow-offset={100} data-wow-delay="0.2">
            <div className="container">
                <div className="section-content">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 ">
                            <div className="av-content-title">
                                <div className="av-sm-title">{_whatWeDo.title}</div>
                                <h2 className="av-large-title">{_whatWeDo.subtitle}</h2>
                                <p className="p-text">{_whatWeDo.description}</p>
                                <div className="av-icon-column">
                                    <div className="row">
                                        {
                                            _whatWeDo.features.map((_item, _index) => {
                                                return (
                                                    <div key={_index} className="col-xl-6 col-lg-12 col-md-6 m-b30">
                                                        <div className="av-icon-style-3-blocks">
                                                            <div className="av-media">
                                                                <span><AvertImage src={_item.icon} alt="icon" /></span>
                                                            </div>
                                                            <div className="av-content">
                                                                <h3 className="av-title">
                                                                    <NavLink to={navUrl.services(route.services.DETAIL)}>{_item.title}</NavLink>
                                                                </h3>
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
                        <div className="col-lg-6 col-md-12 m-b30 sticky-sidebar">
                            <div className="av-image-collage2">
                                <div className="av-media-1">
                                    <AvertImage src={_whatWeDo.image1} alt="#" />
                                </div>
                                <div className="av-media-2">
                                    <AvertImage src={_whatWeDo.image2} alt="#" />
                                </div>
                                <div className="pie-wrap">
                                    <svg viewBox="0 0 64 64" className="pie">
                                        <circle r="25%" cx="50%" cy="50%" style={{ strokeDasharray: '19.3 100' }} />
                                        <circle id="pinky" r="25%" cx="50%" cy="50%" style={{ strokeDasharray: '56.3 100', strokeDashoffset: '-19.3' }}>
                                        </circle>
                                    </svg>
                                    <div className="pie-content">
                                        <h3 className="av-title">{_whatWeDo.delivery}</h3>
                                        <p>Deliver</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SectionHome2WhatWeDo;