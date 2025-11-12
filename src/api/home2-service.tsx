/**
 * Simple API/Service to fetch Home2 page data
 * @module Home2-Service
 */

import { TypePageHome2 } from "../app/@types/pageTypes";
import { publicUrlFor } from "../globals/common-functions";

/**
 * API URL 
 * Here we are fetching data from local JSON
 */
const _URL = publicUrlFor("data/data.json");

/**
 * Getting all data stuff for Template's Home2 page
 * 
 * @param {Function} completion Callback function to return data on fetch success
 */
export async function getHome2Data(completion: Function) {
    fetch(_URL)
        .then(response => response.json())
        .then(json => completion(transformToHome2(json["home2"])))
        .catch(error => console.error(error));
}

/**
 * Function produces data object for Home2 using raw JSON data
 * @param {object} rawData raw JSON object
 * @returns Object of type Home1
 */
const transformToHome2 = (rawData: any): TypePageHome2 => {
    // auto type casting
    var _home2: TypePageHome2 = {};
    _home2.slider = rawData["sectionSlider"]
    _home2.about = rawData["sectionAbout"]
    _home2.clients = rawData["sectionClients"]
    _home2.services = rawData["sectionServices"]
    _home2.caseStudy = rawData["sectionCaseStudy"]
    _home2.testimonials = rawData["sectionTestimonials"]
    _home2.team = rawData["sectionTeam"]
    _home2.faq = rawData["sectionFAQ"]
    _home2.pricing = rawData["sectionPricing"]
    _home2.whatWeDo = rawData["sectionWhatWeDo"]
    _home2.instagram = rawData["sectionInstagram"]
    _home2.blogs = rawData["sectionBlog"]
    return _home2;
}