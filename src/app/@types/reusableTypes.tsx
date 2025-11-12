/**
 * All re-usable types, used accross template
 * @module Reusable-Types
 */

/**
 * Represents type for a single sliding section for a carousel/slider
 */
export type TypeSlide = {
    /**
     * Image source for slide
     */
    image: string,

    /**
     * Title for slide
     */
    title: string,

    /**
     * Subtitle for slide
     */
    subtitle: string,

    /**
     * Video source/link (if any) for the slide
     * (optional property)
     */
    video?: string,
}

/**
 * Represents type for a single service provided
 */
export type TypeService = {
    /**
     * Icon/Image source for the service
     */
    icon: string,

    /**
     * Name of service
     */
    title: string,

    /**
     * More about the service title
     */
    subtitle?: string,

    /**
     * Serial number for service
     */
    count?: number,
}

/**
 * Represents type for public user visiting
 */
export type TypeVisitors = {
    /**
     * Time/date of visiting
     */
    time: string,

    /**
     * Number of previous visitors
     */
    previous: string,

    /**
     * Number of current visitors
     */
    current: string
}

/**
 * Represents type for a Case property
 */
export type TypeCase = {
    /**
     * Image used for case
     */
    image: string,

    /**
     * Title or subtitle for the case
     */
    subtitle: string,

    /**
     * Categories in which the case lies
     */
    categories: string[]
}

/**
 * Represents type for a Pricing Plan
 */
export type TypePlan = {
    /**
     * Discount percentage for the plan
     */
    saving: number,

    /**
     * Suitable name for the plan
     */
    name: string,

    /**
     * Currency in which the plan deals
     */
    currency: string,

    /**
     * Price for the plan
     */
    price: string,

    /**
     * Duration for the plan will be purchased
     */
    tenure: string,

    /**
     * Facilities offerd by plan
     */
    features: string[]
}

/**
 * Represents type for a Testimonial
 */
export type TypeTestimonial = {
    /**
     * Image of the client
     */
    image: string,

    /**
     * Name of client
     */
    name: string,

    /**
     * Designation of client
     */
    designation: string,

    /**
     * Words by client about the product
     */
    comment: string,

    /**
     * Overall reviews given by client
     */
    reviews: string,

    /**
     * Rating of client
     */
    rating: string
}

/**
 * Represents type for a Blog
 */
export type TypeBlog = {
    /**
     * Type of blog (i.e. Image, Audio, Video etc.)
     */
    type: string,

    /**
     * Image for the blog
     * (optional property)
     */
    image?: string,

    /**
     * Audio tracks for an audio blog
     * (optional property)
     */
    audio?: TypeAudioAlbum[],

    /**
     * Video link for a video blog
     * (optional property)
     */
    video?: {
        /**
         * Default image for the video
         */
        thumb: string,

        /**
         * Source URL for the video
         */
        link: string
    },

    /**
     * Calendar day for blog written on
     */
    day: string,

    /**
     * Month in which blog written
     */
    month: string,

    /**
     * Category of blog (i.e. News, Blog etc.)
     */
    category: string,

    /**
     * Creater of blog
     */
    author: string,

    /**
     * Suitable name of blog
     */
    title: string,

    /**
     * All comments received by different visitors
     */
    comments: string,

    /**
     * Number, how many time the blog has seen
     */
    views: string
}

/**
 * Representing the type for a Team Member
 */
export type TypeTeamMember = {
    /**
     * Image of member
     */
    image: string,

    /**
     * Name of member
     */
    name: string,

    /**
     * Designation of member
     */
    designation: string
}

/**
 * Representing the type of FAQ
 */
export type TypeFAQ = {
    /**
     * Question commenly asked
     */
    que: string,

    /**
     * Answer for the question
     */
    ans: string
}

/**
 * Representing the type for a Skill
 */
export type TypeSkill = {
    /**
     * Name of skill
     */
    title: string,

    /**
     * Percentage, how much skill aquired
     */
    percent: number
}

/**
 * Representing the type for Contact
 */
export type TypeContact = {
    /**
     * Phone number
     */
    phone: string,

    /**
     * Email address
     */
    email: string,

    /**
     * Map location or address
     */
    location: string,

    /**
     * Some description for phone number
     */
    phone_subtitle: string,

    /**
     * Some description for email
     */
    email_subtitle: string,

    /**
     * Some description for location
     */
    location_subtitle: string
}

/**
 * Representing the type for News shown in Blog section
 */
export type TypeBlogNews = {
    /**
     * Image for the news
     */
    image: string,

    /**
     * Category of news
     */
    category: string,

    /**
     * Creator/Writer of news
     */
    author: string,

    /**
     * Title of news
     */
    title: string
}

/**
 * Representing type for a Comment
 */
export type TypeCommentBody = {
    /**
     * Image of user commented
     */
    image: string,

    /**
     * Name of commenting user
     */
    name: string,

    /**
     * Words written by user for the Blog/Service/News/Product
     */
    comment: string,
}

/**
 * Represents the type for Comment list item
 */
export type TypeBlogComment = {
    /**
     * Initial comment given by visitor/user
     */
    initial: TypeCommentBody,

    /**
     * Reply comment (if any) on initial
     */
    reply?: TypeCommentBody[]
}

/**
 * Representing the type for a Audio album
 */
export type TypeAudioAlbum = {
    /**
     * Name of Album
     */
    album: string,

    /**
     * Name of audio track
     */
    trackName: string,

    /**
     * Artwork or Image for the audio track
     */
    albumArt: string,

    /**
     * Source URL for the audio track
     */
    track: string
}