/**
 * @module Page-Our-Team
 */

import { SECTION_THEME } from "../../../globals/constants";
import { SectionHome2TeamBox } from "../../sections/home/home2/home2-team";
import { TypePageTeam } from "../../@types/pageTypes";
import { useEffect, useState } from "react";
import { getTeamData } from "../../../api/team-service";
import { loadScript } from "../../../globals/common-functions";
import banner from "../../../globals/banner.json";
import SectionInnerPageBanner from "../../sections/common/banner";

/**
 * 
 * @returns Markup template for sample page Our Team
 */
function OurTeamPage() {

    const _teamDefault: TypePageTeam = {};
    const [results, setResults] = useState(_teamDefault);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {

        getTeamData((response: TypePageTeam) => {
            setIsFetching(false);
            setResults(response);
            loadScript("js/custom.js");
        })

    }, [isFetching])

    return (
        <>
            {/* INNER PAGE BANNER */}
            <SectionInnerPageBanner _data={banner.team} />
            {/* INNER PAGE BANNER END */}

            {/* Team SECTION START */}
            {
                results.team &&
                <div className="section-full p-t120 p-b90 site-bg-white av-team2-section-wrap">
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                {
                                    results.team!.map((_item, _index) => {
                                        return (
                                            <div key={_index} className="col-lg-3 col-md-6 col-sm-6 m-b30 wow fadeInDown" data-wow-delay="0.2">
                                                <SectionHome2TeamBox _data={_item} _theme={SECTION_THEME.LIGHT} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* Team SECTION END */}
        </>
    )
}
export default OurTeamPage;