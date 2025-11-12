/**
 * @module Section-Home2-Team
 */

import { NavLink } from "react-router-dom";
import { navUrl } from "../../../../globals/common-functions";
import { SECTION_THEME, route } from "../../../../globals/constants";
import { TypeSectionTeam } from "../../../@types/sectionTypes";
import { TypeTeamMember } from "../../../@types/reusableTypes";
import AvertImage from "../../../../globals/elements/avertimg";

/**
 * Theme styles for section
 */
const themeStyle = {
    dark: {
        // dark styles (default)
        sectionStyle: "p-t120 site-bg-dark av-team-section-wrap",
        titleStyle: "on-bg-image",
        _nameStyle: ""
    },
    light: {
        // light styles
        sectionStyle: "p-t50 site-bg-white av-team2-section-wrap",
        titleStyle: "",
        _nameStyle: "site-text-dark"
    }
}

/**
 * 
 * @param props : Data supplied to display our team
 * @returns Markup for section containing team members
 */
const SectionHome2Team = (
    props: {
        _team: TypeSectionTeam
        _theme?: SECTION_THEME
    }
) => {

    const { _team, _theme } = props;
    var _themeStyles = themeStyle.dark;

    if (_theme && _theme === SECTION_THEME.LIGHT) {
        _themeStyles = themeStyle.light;
    }

    return (
        <div className={"section-full p-b90 " + _themeStyles.sectionStyle + " wow fadeInDown"} data-wow-offset={100} data-wow-delay="0.2">
            <div className="container">
                {/* TITLE START*/}
                <div className={"section-head center " + _themeStyles.titleStyle + " m-b40"}>
                    <h2 className="av-large-title">{_team.title}</h2>
                    <p>{_team.subtitle}</p>
                </div>
                {/* TITLE END*/}
                <div className="section-content">
                    <div className="row">
                        {
                            _team.members.map((_item, _index) => {
                                return (
                                    <div key={_index} className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                        <SectionHome2TeamBox _data={_item} _theme={_theme ? _theme : SECTION_THEME.DARK} />
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

/**
 * 
 * @param props : Data supplied to display single team member
 * @returns Markup for sample team member box
 */
export const SectionHome2TeamBox = (props: {
    _data: TypeTeamMember,
    _theme: SECTION_THEME
}) => {
    const _item = props._data;
    var _nameStyle = props._theme === SECTION_THEME.LIGHT ? themeStyle.light._nameStyle : themeStyle.dark._nameStyle;
    
    return (
        <div className="av-team-section">
            <div className="av-team-media">
                <NavLink to={navUrl.pages(route.pages.TEAM)}>
                    <AvertImage src={_item.image} alt="#" />
                </NavLink>
                <ul className="av-team-social">
                    <li>
                        <a href="https://www.facebook.com" className="site-button button-sm yellow2">
                            <span className="fa-brands fa-facebook-f" />
                            &nbsp;Facebook
                        </a>
                    </li>
                </ul>
            </div>
            <div className="av-team-info">
                <div className="av-s-title">{_item.designation}</div>
                <NavLink className="av-l-title" to={navUrl.pages(route.pages.TEAM)}>
                    <h2 className={"av-title " + _nameStyle}>{_item.name}</h2>
                </NavLink>
            </div>
        </div>
    )
}

export default SectionHome2Team;