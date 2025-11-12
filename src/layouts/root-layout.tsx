/**
 * @module Root-Layout
 */

import { useLocation } from "react-router-dom";
import { setHeader } from "../globals/layout-functions";
import AppRoutes from "../routing/app-routes";
import SectionFooter from "../app/sections/common/footer";

/**
 * 
 * @returns Wrapper Element, Entire {@link AppRoutes | template flow} loaded inside this global layout
 */
const RootLayout = () => {

    const currentpath = useLocation().pathname;

    return (
        <>
            <div className="page-wraper">

                {/* Page Header */}
                {
                    setHeader(currentpath)
                }

                {/* CONTENT START */}
                <div className="page-content">
                    <AppRoutes />
                </div>
                {/* CONTENT END */}

                {/* Page Footer */}
                <SectionFooter />

                {/* BUTTON TOP START */}
                <button className="scroltop"><span className="fa fa-angle-up  relative" id="btn-vibrate" /></button>
            </div>
        </>
    )
}
export default RootLayout;