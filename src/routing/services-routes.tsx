/**
 * App navigation flow to different places of Services Menu
 * @module Services-Navigation-Routes
 */

import { Route, Routes } from "react-router-dom";
import { route } from "../globals/constants";
import ServicesPage from "../app/components/services/services";
import ServicesDetailPage from "../app/components/services/services-detail";

/**
 * @returns - Describes navigation for different sub-menus of Services Menu:
 ** {@link ServicesPage}
 ** {@link ServicesDetailPage}
 */
const ServicesRoutes = () => {
    return (
        <Routes>
            <Route path={route.services.SERVICES} element={<ServicesPage />} />
            <Route path={route.services.DETAIL} element={<ServicesDetailPage />} />
        </Routes>
    )
}
export default ServicesRoutes;