/**
 * Defines different constant values used accross template
 * @module Constants
 */

/**
 * Route values for different pages/menus
 */
export const route = {
    INITIAL: "/",
    home: {
        HOME1: "/index",
        HOME2: "/index2",
        HOME3: "/index3"
    },
    services: {
        INITIAL: "/services",
        SERVICES: "",
        DETAIL: "/detail"
    },
    pages: {
        INITIAL: "/pages",
        ABOUT: "/about-us",
        CONTACT: "/contact-us",
        CASE_STUDY: "/case-study",
        CASE_DETAIL: "/case-detail",
        TESTIMONIALS: "/testimonials",
        FAQ: "/faq",
        PLANS: "/pricing-plans",
        TEAM: "/our-team"
    },
    blogs: {
        INITIAL: "/blogs",
        BLOGS: "",
        STANDARD: "/standard",
        LEFT_SIDEBAR: "/with-left-sidebar",
        DETAIL: "/detail"
    }
}

/**
 * Global rating measurement value (numarical array)
 */
export const OVERALL_RATING = [1, 2, 3, 4, 5]

/**
 * Values to differentiate theme/visibility
 */
export enum SECTION_THEME { 
    DARK = "dark", 
    LIGHT = "light"
}

/**
 * Values to identify banner section type
 */
export enum BANNER_TYPE { 
    IMAGE = "image", 
    TEXT = "text", 
    CONTACT = "contact" 
}

/**
 * Values to identify box type for blog list
 */
export enum BLOG_BOX { 
    IMAGE = "image", 
    VIDEO = "video", 
    AUDIO = "audio" 
}

/**
 * CSS manipulation for non clickable anchors
 */
export const stopAnchorNavigation: React.CSSProperties = {
    pointerEvents: "none",
    cursor: "default"
}