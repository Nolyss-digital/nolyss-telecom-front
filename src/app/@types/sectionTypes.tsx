/**
 * All Section types, used for different page sections
 * @module Section-Types
 */

import * as RT from './reusableTypes';

/**
 * Represents type for page banner section
 */
export type TypeSectionBanner = {
    /**
     * Title for the banner
     */
    title: string,

    /**
     * Page subtitle displayed in banner
     */
    crumb: string,

    /**
     * Image for page, source URL
     */
    image: string
}

/**
 * Represents type for page slider section
 */
export type TypeSectionSlider = {
    /**
     * Slides array, containing image, title etc.
     */
    slides: RT.TypeSlide[]
}

/**
 * Represents type for page services section
 */
export type TypeSectionServices = {
    /**
     * Services data array for the section
     */
    services: RT.TypeService[]
}

/**
 * Represents type for page clients section
 */
export type TypeSectionClients = {
    /**
     * Array containing source URL for clients images/logos
     */
    clients: string[]
}

/**
 * Represents type for page about section
 */
export type TypeSectionAbout = {
    /**
     * Image describing about us, source URL
     */
    image: string,

    /**
     * Title for section
     */
    title: string,

    /**
     * Description for the section (HTML string)
     */
    description: string,

    /**
     * Mission of our company
     */
    mission: string,

    /**
     * Vision of our company
     */
    vision: string,

    /**
     * Total experience in market
     */
    experience: string,

    /**
     * Visitors counting on website
     */
    visitors: RT.TypeVisitors,

    /**
     * Video link, describing more about
     * (optional property)
     */
    video?: string
}

/**
 * Represents type for page case study section
 */
export type TypeSectionCaseStudy = {
    /**
     * Title for the section
     */
    title: string,

    /**
     * Subtitle for the section
     */
    subtitle: string,

    /**
     * Cases data array
     */
    cases: RT.TypeCase[]
}

/**
 * Represents type for page pricing plan section
 */
export type TypeSectionPricing = {
    /**
     * Title for the section
     */
    title: string,

    /**
     * Subtitle for the section
     */
    subtitle: string,

    /**
     * Pricing plans data array
     */
    plans: RT.TypePlan[]
}

/**
 * Represents type for page what-we-do section
 */
export type TypeSectionWhatWeDo = {
    /**
     * Title for the section
     */
    title: string,

    /**
     * Subtitle for the section
     */
    subtitle: string,

    /**
     * Description about our work (HTML string)
     */
    description: string,

    /**
     * Features what we provide (data array)
     */
    features: {
        /**
         * Icon for the feature
         */
        icon: string,

        /**
         * Title for the feature
         */
        title: string
    }[],

    /**
     * Image for the section, source URL
     */
    image1: string,

    /**
     * One more image for the section, source URL
     */
    image2: string,

    /**
     * Video link for more about
     * (optional property)
     */
    video?: string,

    /**
     * Delivery data description
     */
    delivery: string
}

/**
 * Represents type for page IT section
 */
export type TypeSectionIT = {
    /**
     * Title for the section
     */
    title: string,

    /**
     * Subtitle for the section
     */
    subtitle: string,

    /**
     * Description for the section
     */
    description: string,

    /**
     * Image for the section, source URL
     */
    image: string
}

/**
 * Represents type for page testimonial section
 */
export type TypeSectionTestimonials = {
    /**
     * Title for the section
     * (optional property)
     */
    title?: string,

    /**
     * Subtitle for the section
     * (optional property)
     */
    subtitle?: string,

    /**
     * Feedbacks provided by different clients, data array 
     */
    testimonials: RT.TypeTestimonial[]
}

/**
 * Represents type for page blog section
 */
export type TypeSectionBlog = {
    /**
     * Title for the section
     */
    title: string,

    /**
     * Subtitle for the section
     */
    subtitle: string,

    /**
     * Blogs data array
     */
    blogs: RT.TypeBlog[]
}

/**
 * Represents type for page instagram section
 */
export type TypeSectionInstagram = {
    /**
     * Images source URL data array
     */
    images: string[]
}

/**
 * Represents type for page team section
 */
export type TypeSectionTeam = {
    /**
     * Title for the section
     */
    title: string,

    /**
     * Subtitle for the section
     */
    subtitle: string,

    /**
     * Team members data array
     */
    members: RT.TypeTeamMember[]
}

/**
 * Represents type for page FAQ section
 */
export type TypeSectionFAQ = {
    /**
     * Title for the section
     */
    title: string,

    /**
     * Subtitle for the section
     */
    subtitle: string,

    /**
     * Image source URL for the section
     */
    image: string,

    /**
     * Question and answers, data array
     */
    faqs: RT.TypeFAQ[]
}

/**
 * Represents type for page skills section
 */
export type TypeSectionSkills = {
    /**
     * Title for the section
     */
    title: string,

    /**
     * Subtitle for the section
     */
    subtitle: string,

    /**
     * Description for the section (HTML string)
     */
    description1: string,

    /**
     * More description for the section (HTML string)
     */
    description2: string,

    /**
     * Clients data array (image/logo source URLs)
     */
    clients: string[],

    /**
     * Skills data array
     */
    skills: RT.TypeSkill[]
}

/**
 * Represents type for page contact section
 */
export type TypeSectionContact = {
    /**
     * Title for the section
     */
    title: string,

    /**
     * Subtitle for the section
     */
    subtitle: string,

    /**
     * Description for the section (HTML string)
     */
    description1: string,

    /**
     * More description for the section (HTML string)
     */
    description2: string,

    /**
     * Phone, email and location data
     */
    contact: RT.TypeContact
}

/**
 * Represents type for page case-study-content section
 */
export type TypeSectionCaseContent = {
    /**
     * Categories included by the case
     */
    categories: string[],

    /**
     * Title for the section
     */
    title: string,

    /**
     * Detail about case (HTML string)
     */
    detail: string
}

/**
 * Represents type for page case-study-pagination section
 */
export type TypeSectionCasePagination = {
    /**
     * Title for the previous Case/Blog/News etc.
     */
    prev: string,

    /**
     * Title for the upcoming Case/Blog/News etc.
     */
    next: string
}

/**
 * Represents type for page case-study-event section
 */
export type TypeSectionCaseEvent = {
    /**
     * Time of event
     */
    time: string,

    /**
     * Date of event
     */
    date: string,

    /**
     * Categories of event
     */
    categories: string,

    /**
     * Phone number for the event
     */
    phone: string,

    /**
     * Website for the event
     */
    website: string,

    /**
     * Loation of event
     */
    location: string
}

/**
 * Represents type for page blog-sidebar section
 */
export type TypeSectionBlogSidebar = {
    /**
     * Services data array to be displayed
     */
    services: string[],

    /**
     * Recent news data array, related to blog
     */
    news: RT.TypeBlogNews[]
}

/**
 * Represents type for page blog-content section
 */
export type TypeSectionBlogContent = {
    /**
     * Categories in which the blog has written
     */
    category: string,

    /**
     * Creator of blog
     */
    author: string,

    /**
     * Day on which blog published
     */
    day: string,

    /**
     * Month of blog
     */
    month: string,

    /**
     * Suitable title for blog
     */
    title: string,

    /**
     * Detail of blog (HTML String)
     */
    detail: string
}

/**
 * Represents type for page author section
 */
export type TypeSectionAuthor = {
    /**
     * Image of the person/creator
     */
    image: string,

    /**
     * Name of author
     */
    name: string,

    /**
     * A short descripton about author
     */
    about: string,

    /**
     * Author facebook profile URL
     */
    fb: string,

    /**
     * Author twitter/x profile URL
     */
    x: string,

    /**
     * Author instagram profile URL
     */
    insta: string,

    /**
     * Author linkedin profile URL
     */
    lin: string
}

/**
 * Represents type for page blog-comment section
 */
export type TypeSectionBlogComment = {
    /**
     * Total comments received on blog
     */
    count: number

    /**
     * All comments listing
     */
    comments: RT.TypeBlogComment[]
}