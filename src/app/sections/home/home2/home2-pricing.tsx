/**
 * @module Section-Home2-Pricing-Plans
 */

import { NavLink } from "react-router-dom";
import { navUrl, publicUrlFor } from "../../../../globals/common-functions";
import { route } from "../../../../globals/constants";
import { TypeSectionPricing } from "../../../@types/sectionTypes";

/**
 * 
 * @param props : Data supplied having different pricing plans
 * @returns Markup for section showing different pricing plans
 */
const SectionHome2Pricing = (
    props: {
        _pricing: TypeSectionPricing
    }
) => {
    const { _pricing } = props;
    return (
        <div className="section-full p-t120 p-b0 site-bg-white av-pricing2-section-wrap av-bg-half-bg-wrap wow fadeInDown" data-wow-offset={100} data-wow-delay="0.2">
            <div className="av-bg-half-bg" style={{ backgroundImage: `url(${publicUrlFor("images/background/BG-3.jpg")})` }} />
            <div className="container">
                {/* TITLE START*/}
                <div className="section-head center on-bg-image m-b40">
                    <h2 className="av-large-title">{_pricing.title}</h2>
                    <p>{_pricing.subtitle}</p>
                </div>
                {/* TITLE END*/}
                <div className="section-content">
                    <div className="row d-flex justify-content-center">
                        {
                            _pricing.plans.map((_item, _index) => {
                                return (
                                    <div key={_index} className="col-lg-4 col-md-6">
                                        <div className="av-price-bx">
                                            <div className="av-price-head">
                                                {
                                                    (_item.saving > 0) &&
                                                    <div className="av-offer-badge">Save {_item.saving}%</div>
                                                }
                                                <h2 className="av-title">{_item.name}</h2>
                                                <div className="av-price-digit">
                                                    <span className="av-price-icon">{_item.currency}</span>
                                                    <span className="av-price">{_item.price}</span>
                                                    <span className="av-price-duration">/{_item.tenure}</span>
                                                </div>
                                            </div>
                                            <div className="av-price-info">
                                                <div className="av-list">
                                                    <ul>
                                                        {
                                                            _item.features.map((_feature, _fIndex) => {
                                                                return (
                                                                    <li key={_fIndex}>{_feature}</li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="av-readmore-btn">
                                                    <NavLink to={navUrl.pages(route.pages.CONTACT)} className="site-button button-sm white">Sign Up For Free <i className="feather feather-plus" /> </NavLink>
                                                </div>
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
    )
}
export default SectionHome2Pricing;