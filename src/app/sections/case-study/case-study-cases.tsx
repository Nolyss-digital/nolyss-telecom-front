/**
 * @module Section-Case-Study-List
 */

import { TypeCase } from "../../@types/reusableTypes";
import AvertImage from "../../../globals/elements/avertimg";

/**
 * 
 * @param props : Data supplied to display cases
 * @returns Markup for case study list
 */
const SectionCaseStudyCases = (props: {
    _cases: TypeCase[]
}) => {
    const { _cases } = props;
    return (
        <div className="masonry-wrap row">
            {
                _cases.map((_item, _index) => {
                    return (
                        <div
                            key={_index}
                            className="masonry-item col-lg-4 col-md-6 col-sm-6 m-b30 wow fadeInDown"
                            data-wow-delay="0.2"
                        >
                            <div className="av-case-study-bx3">
                                <div className="av-case-media">
                                    {/* Image non cliquable */}
                                    <div className="av-case-media-inner">
                                        <AvertImage src={_item.image} alt="#" />
                                    </div>

                                    {/* Icône non cliquable */}
                                    {/* <div className="av-case-link">
                                        <i className="feather feather-arrow-up-right" />
                                    </div> */}
                                </div>
                                <div className="av-case-info">
                                    <div className="av-s-title">
                                        {
                                            _item.categories.map((_category, _catIndex) => {
                                                return (
                                                    <span key={_catIndex}>
                                                        {_catIndex > 0 ? ', ' : ''}
                                                        {_category}
                                                    </span>
                                                )
                                            })
                                        }
                                    </div>
                                    {/* Titre non cliquable */}
                                    <div className="av-l-title">
                                        <h2 className="av-title">{_item.subtitle}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SectionCaseStudyCases;
