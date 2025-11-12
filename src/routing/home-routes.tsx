/**
 * App navigation flow to different places of Home Menu
 * @module Home-Navigation-Routes
 */

import { Route, Routes } from "react-router-dom";
import { route } from "../globals/constants";
import Home1Page from "../app/components/home/home1";
import Home2Page from "../app/components/home/home2";
import Home3Page from "../app/components/home/home3";

/**
 * @returns Describes navigation for different sub-menus of Home Menu:
 ** {@link Home1Page | Home Page Style 1}
 ** {@link Home2Page | Home Page Style 2}
 ** {@link Home3Page | Home Page Style 3}
 */
const HomeRoutes = () => {
    return (
        <Routes>
            <Route path={route.INITIAL} element={<Home1Page />} />
            <Route path={route.home.HOME1} element={<Home1Page />} />
            <Route path={route.home.HOME2} element={<Home2Page />} />
            <Route path={route.home.HOME3} element={<Home3Page />} />
        </Routes>
    )
}
export default HomeRoutes;