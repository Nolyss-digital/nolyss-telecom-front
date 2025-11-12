/**
 * @module Section-Home1-What-We-Do
 */

import { SECTION_THEME } from "../../../../globals/constants";
import { TypeSectionWhatWeDo } from "../../../@types/sectionTypes";
import AvertImage from "../../../../globals/elements/avertimg";

/**
 * 
 * @param props Data supplied to display our working
 * @returns Markup for section showing our working style
 */
const SectionHome1WhatWeDo = (
    props: {
        _whatWeDo: TypeSectionWhatWeDo
        _background?: SECTION_THEME
    }
) => {

    const { _whatWeDo, _background } = props;

    // section style white (default)
    var _sectionStyle = "p-t0 site-bg-white av-whatwe-section-wrap";

    // section style gray
    if (_background && _background === SECTION_THEME.DARK) {
        _sectionStyle = "p-t120 site-bg-gray av-whatwe2-section-wrap";
    }

    return (
        <div className={"section-full p-b90 " + _sectionStyle + " wow fadeInDown"} data-wow-offset={100} data-wow-delay="0.2">
            <div className="container">
                <div className="section-content">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 m-b30">
                            <div className="av-content-title">
                                <div className="av-sm-title">{_whatWeDo.title}</div>
                                <h2 className="av-large-title">{_whatWeDo.subtitle}</h2>
                                <div dangerouslySetInnerHTML={
                                    { __html: _whatWeDo.description }
                                }></div>
                                <div className="av-list2">
                                    <ul>
                                        {
                                            _whatWeDo.features.map((_item, _index) => {
                                                return (
                                                    <li key={_index}>{_item.title}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 m-b30">
                            <div className="av-image-collage">
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
                                {
                                    _whatWeDo.video &&
                                    <a href={_whatWeDo.video!} className="mfp-video ac-text-circle-btn">
                                        <i className="fa fa-play" />
                                        <AvertImage className="spinner-object" src="images/icon/ic-3.png" alt="text" />
                                    </a>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SectionHome1WhatWeDo;