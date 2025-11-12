/**
 * App navigation flow to different places of template
 * @module App-Navigation-Routes
 */

import { Route, Routes } from "react-router-dom";
import { route } from "../globals/constants";

import HomeRoutes from "./home-routes";
import ServicesRoutes from "./services-routes";
import PagesRoutes from "./pages-routes";
import BlogRoutes from "./blog-routes";

/**
 * @returns - Describes navigation for different menus of Template Header:
 ** {@link HomeRoutes | Home Menu}
 ** {@link ServicesRoutes | Services Menu}
 ** {@link PagesRoutes | Pages Menu}
 ** {@link BlogRoutes | Blog Menu}
 */
const AppRoutes = () => {
    return (
        <Routes>
            <Route path={route.INITIAL+"*"} element={<HomeRoutes />}/>
            <Route path={route.services.INITIAL+"/*"} element={<ServicesRoutes />}/>
            <Route path={route.pages.INITIAL+"/*"} element={<PagesRoutes />}/>
            <Route path={route.blogs.INITIAL+"/*"} element={<BlogRoutes />}/>
        </Routes>
    )
}
export default AppRoutes;