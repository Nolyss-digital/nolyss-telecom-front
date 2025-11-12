/**
 * App navigation flow to different places of Pages Menu
 * @module Pages-Navigation-Routes
 */

import { Route, Routes } from "react-router-dom";
import { route } from "../globals/constants";
import AboutUsPage from "../app/components/pages/about";
import CaseDetailPage from "../app/components/pages/case-detail";
import CaseStudyPage from "../app/components/pages/case-study";
import TestimonialsPage from "../app/components/pages/testimonials";
import ContactUsPage from "../app/components/pages/contact";
import FAQPage from "../app/components/pages/faq";
import PricingPlansPage from "../app/components/pages/plans";
import OurTeamPage from "../app/components/pages/team";

/**
 * @returns Describes navigation for different sub-menus of Pages Menu:
 ** {@link AboutUsPage}
 ** {@link CaseDetailPage}
 ** {@link CaseStudyPage}
 ** {@link TestimonialsPage}
 ** {@link ContactUsPage}
 ** {@link FAQPage}
 ** {@link PricingPlansPage}
 ** {@link OurTeamPage}
 */
const PagesRoutes = () => {
    return (
        <Routes>
            <Route path={route.pages.ABOUT} element={<AboutUsPage />} />
            <Route path={route.pages.CASE_DETAIL} element={<CaseDetailPage />} />
            <Route path={route.pages.CASE_STUDY} element={<CaseStudyPage />} />
            <Route path={route.pages.TESTIMONIALS} element={<TestimonialsPage />} />
            <Route path={route.pages.CONTACT} element={<ContactUsPage />} />
            <Route path={route.pages.FAQ} element={<FAQPage />} />
            <Route path={route.pages.PLANS} element={<PricingPlansPage />} />
            <Route path={route.pages.TEAM} element={<OurTeamPage />} />
        </Routes>
    )
}
export default PagesRoutes;