/**
 * Defines various functions that manipulate different layout's visibility/occurance
 * @module Layout-Functions
 */

import { route } from "./constants";
import SectionHeader1 from "../app/sections/common/header/header1";
import SectionHeader2 from "../app/sections/common/header/header2";
import SectionHeader3 from "../app/sections/common/header/header3";

/**
 * Sets header section for the template according to current page
 * @param _path : URL for visible page
 * @returns : suitable Header section for current page
 */
export const setHeader = (_path: string) => {
    switch (_path) {
        case route.home.HOME3:
            return <SectionHeader3 />;
        case route.home.HOME2:
            return <SectionHeader2 />;
        default:
            return <SectionHeader1 />;
    }
}