/**
 * Simple API/Service to fetch Blogs data
 * @module Blogs-Service
 */

import { TypePageBlogDetail, TypePageBlogs } from "../app/@types/pageTypes";
import { publicUrlFor } from "../globals/common-functions";

/**
 * API URL 
 * Here we are fetching data from local JSON
 */
const _URL = publicUrlFor("data/data.json");

/**
 * Getting all data stuff for Template's Blogs page
 * 
 * @param {Function} completion Callback function to return data on fetch success
 */
export async function getBlogsData(completion: Function) {
    fetch(_URL)
        .then(response => response.json())
        .then(json => completion(transformToBlogs(json["blogs"])))
        .catch(error => console.error(error));
}

/**
 * Getting all data stuff for Template's BlogsWithLeftSidebar page
 * 
 * @param {Function} completion Callback function to return data on fetch success
 */
export async function getBlogsGridDataWithSidebar(completion: Function) {
    fetch(_URL)
        .then(response => response.json())
        .then(json => completion(transformToBlogsSidebar(json["blogsSidebar"])))
        .catch(error => console.error(error));
}

/**
 * Getting all data stuff for Template's BlogsStandard page
 * 
 * @param {Function} completion Callback function to return data on fetch success
 */
export async function getBlogsStandardDataWithSidebar(completion: Function) {
    fetch(_URL)
        .then(response => response.json())
        .then(json => completion(transformToBlogsSidebar(json["blogsStandardSidebar"])))
        .catch(error => console.error(error));
}

/**
 * Getting all data stuff for Template's BlogDetail page
 * 
 * @param {Function} completion Callback function to return data on fetch success
 */
export async function getBlogDetail(completion: Function) {
    fetch(_URL)
        .then(response => response.json())
        .then(json => completion(transformToBlogDetail(json["blogDetailSidebar"])))
        .catch(error => console.error(error));
}

/**
 * Function produces data object for Blogs using raw JSON data
 * @param {object} rawData raw JSON object
 * @returns Object of type Blogs
 */
const transformToBlogs = (rawData: any): TypePageBlogs => {
    // auto type casting
    var _blogs: TypePageBlogs = {};
    _blogs.blogs = rawData["blogs"];
    return _blogs;
}

/**
 * Function produces data object for Blogs using raw JSON data
 * @param {object} rawData raw JSON object
 * @returns Object of type Blogs
 */
const transformToBlogsSidebar = (rawData: any): TypePageBlogs => {
    // auto type casting
    var _blogs: TypePageBlogs = {};
    _blogs.blogs = rawData["blogs"];
    _blogs.sidebar = rawData["sidebar"];
    return _blogs;
}

/**
 * Function produces data object for Blogs using raw JSON data
 * @param {object} rawData raw JSON object
 * @returns Object of type Blogs
 */
const transformToBlogDetail = (rawData: any): TypePageBlogDetail => {
    // auto type casting
    var _detail: TypePageBlogDetail = {};
    _detail.content = rawData["content"];
    _detail.author = rawData["author"];
    _detail.pagination = rawData["pagination"];
    _detail.sidebar = rawData["sidebar"];
    _detail.comments = rawData["comments"];
    return _detail;
}