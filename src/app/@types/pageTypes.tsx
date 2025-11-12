/**
 * All Page types, used for different page
 * @module Page-Types
 */

import * as ST from "./sectionTypes"
import * as RT from "./reusableTypes"

/**
 * Represents data type for page Home1
 */
export type TypePageHome1 = {
    slider?: ST.TypeSectionSlider,
    services?: ST.TypeSectionServices,
    clients?: ST.TypeSectionClients,
    about?: ST.TypeSectionAbout,
    caseStudy?: ST.TypeSectionCaseStudy,
    pricing?: ST.TypeSectionPricing,
    whatWeDo?: ST.TypeSectionWhatWeDo,
    it?: ST.TypeSectionIT,
    testimonials?: ST.TypeSectionTestimonials,
    blogs?: ST.TypeSectionBlog,
    instagram?: ST.TypeSectionInstagram
}

/**
 * Represents data type for page Home2
 */
export type TypePageHome2 = {
    slider?: ST.TypeSectionSlider,
    about?: ST.TypeSectionAbout,
    clients?: ST.TypeSectionClients,
    services?: ST.TypeSectionServices,
    caseStudy?: ST.TypeSectionCaseStudy,
    testimonials?: ST.TypeSectionTestimonials,
    team?: ST.TypeSectionTeam,
    faq?: ST.TypeSectionFAQ,
    pricing?: ST.TypeSectionPricing,
    whatWeDo?: ST.TypeSectionWhatWeDo,
    instagram?: ST.TypeSectionInstagram,
    blogs?: ST.TypeSectionBlog
}

/**
 * Represents data type for page Home3
 */
export type TypePageHome3 = {
    slider?: ST.TypeSectionSlider,
    services?: ST.TypeSectionServices,
    skills?: ST.TypeSectionSkills,
    caseStudy?: ST.TypeSectionCaseStudy,
    about?: ST.TypeSectionAbout,
    team?: ST.TypeSectionTeam,
    it?: ST.TypeSectionIT,
    testimonials?: ST.TypeSectionTestimonials,
    whatWeDo?: ST.TypeSectionWhatWeDo,
    blogs?: ST.TypeSectionBlog
}

/**
 * Represents data type for page About
 */
export type TypePageAbout = {
    about?: ST.TypeSectionAbout,
    team?: ST.TypeSectionTeam,
    it?: ST.TypeSectionIT,
    pricing?: ST.TypeSectionPricing,
    whatWeDo?: ST.TypeSectionWhatWeDo,
    services?: ST.TypeSectionServices
}

/**
 * Represents data type for page Services
 */
export type TypePageServices = {
    services?: ST.TypeSectionServices,
    whatWeDo?: ST.TypeSectionWhatWeDo,
    it?: ST.TypeSectionIT,
    team?: ST.TypeSectionTeam,
    testimonials?: ST.TypeSectionTestimonials
}

/**
 * Represents data type for page Case-Study
 */
export type TypePageCaseStudy = {
    cases?: RT.TypeCase[]
}

/**
 * Represents data type for page Case-Detail
 */
export type TypePageCaseDetail = {
    content?: ST.TypeSectionCaseContent,
    pagination?: ST.TypeSectionCasePagination,
    event?: ST.TypeSectionCaseEvent
}

/**
 * Represents data type for page Testimonials
 */
export type TypePageTestimonials = {
    testimonials?: RT.TypeTestimonial[];
}

/**
 * Represents data type for page Pricing-Plans
 */
export type TypePagePricing = {
    pricing?: ST.TypeSectionPricing,
    it?: ST.TypeSectionIT,
    whatWeDo?: ST.TypeSectionWhatWeDo,
    team?: ST.TypeSectionTeam
}

/**
 * Represents data type for page FAQ
 */
export type TypePageFAQ = {
    faq?: ST.TypeSectionFAQ,
    contact?: RT.TypeContact
}

/**
 * Represents data type for page Contact-Us
 */
export type TypePageContact = {
    contact?: ST.TypeSectionContact
}

/**
 * Represents data type for page Our-Team
 */
export type TypePageTeam = {
    team?: RT.TypeTeamMember[]
}

/**
 * Represents data type for page Blogs
 */
export type TypePageBlogs = {
    blogs?: RT.TypeBlog[],
    sidebar?: ST.TypeSectionBlogSidebar
}

/**
 * Represents data type for page Blog-Detail
 */
export type TypePageBlogDetail = {
    content?: ST.TypeSectionBlogContent,
    author?: ST.TypeSectionAuthor,
    pagination?: ST.TypeSectionCasePagination,
    sidebar?: ST.TypeSectionBlogSidebar,
    comments?: ST.TypeSectionBlogComment 
}