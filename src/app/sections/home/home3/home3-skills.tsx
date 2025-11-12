/**
 * @module Section-Home3-Skills
 */

import { NavLink } from "react-router-dom";
import { navUrl } from "../../../../globals/common-functions";
import { route } from "../../../../globals/constants";
import { TypeSectionSkills } from "../../../@types/sectionTypes";
import React from "react";
import AvertImage from "../../../../globals/elements/avertimg";

/**
 * 
 * @param props : Data supplied to display skills
 * @returns Markup for section containing different skills
 */
const SectionHome3Skills = (
    props: {
        _skills: TypeSectionSkills
    }
) => {

    const { _skills } = props;
    const _progress = (count: number) => {
        return {
            '--progress-bar-count': count + '%'
        } as React.CSSProperties
    }

    return (
        <div className="section-full p-t120 p-b90 site-bg-white av-skils-section-wrap wow fadeInDown" data-wow-offset={100} data-wow-delay="0.2">
            <div className="container">
                <div className="section-content">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="av-content-title">
                                <div className="av-sm-title">{_skills.title}</div>
                                <h2 className="av-large-title">{_skills.subtitle}</h2>
                                <div dangerouslySetInnerHTML={
                                    { __html: _skills.description1 }
                                }></div>
                                <div className="av-client-logo-list">
                                    <ul>
                                        {
                                            _skills.clients.map((_cItem, _cIndex) => {
                                                return (
                                                    <li key={_cIndex}>
                                                        <NavLink to={navUrl.pages(route.pages.ABOUT)}>
                                                            <AvertImage src={_cItem} alt="#" />
                                                        </NavLink>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="av-pg-bar-wrap">
                                <div dangerouslySetInnerHTML={
                                    { __html: _skills.description2 }
                                }></div>
                                <div className="wt-box m-b30 wow">
                                    {
                                        _skills.skills.map((_sItem, _sIndex) => {
                                            return (
                                                <div key={_sIndex} className="our-skills-item">
                                                    <span className="progressText text-black">{_sItem.title}</span>
                                                    <div className="progress-box">
                                                        <div className="progress">
                                                            <div className="progress-bar wow progress-bar-anim site-bg-primary" data-wow-delay="0ms" data-wow-duration="2000ms" role="progressbar" style={_progress(_sItem.percent)} >
                                                                <span>{_sItem.percent}%</span>
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
                </div>
            </div>
        </div>
    )
}
export default SectionHome3Skills;