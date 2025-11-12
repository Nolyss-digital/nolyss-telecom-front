/**
 * App navigation flow to different places of Blog Menu
 * @module Blogs-Navigation-Routes
 */

import { Route, Routes } from "react-router-dom";
import { route } from "../globals/constants";
import BlogsPage from "../app/components/blogs/blogs";
import BlogsDetailPage from "../app/components/blogs/blogs-detail";
import BlogsStandardPage from "../app/components/blogs/blogs-standard";
import BlogsWithLeftSidebarPage from "../app/components/blogs/blogs-with-left-sidebar";

/**
 * @returns Describes navigation for different sub-menus of Blog Menu:
 ** {@link BlogsPage}
 ** {@link BlogsDetailPage}
 ** {@link BlogsStandardPage}
 ** {@link BlogsWithLeftSidebarPage}
 */
const BlogRoutes = () => {
    return (
        <Routes>
            <Route path={route.blogs.BLOGS} element={<BlogsPage />} />
            <Route path={route.blogs.DETAIL} element={<BlogsDetailPage />} />
            <Route path={route.blogs.STANDARD} element={<BlogsStandardPage />} />
            <Route path={route.blogs.LEFT_SIDEBAR} element={<BlogsWithLeftSidebarPage />} />
        </Routes>
    )
}
export default BlogRoutes;