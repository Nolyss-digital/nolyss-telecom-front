/**
 * Simple API/Service to fetch Home1 page data
 * @module Home1-Service
 */

import { TypePageHome1 } from "../app/@types/pageTypes";
import { publicUrlFor } from "../globals/common-functions";

/**
 * API URL 
 * Here we are fetching data from local JSON
 */
const _URL = publicUrlFor("data/data.json");

/**
 * Getting all data stuff for Template's Home1 page
 * 
 * @param {Function} completion Callback function to return data on fetch success
 */
export async function getHome1Data(completion: Function) {
    fetch(_URL)
        .then(response => response.json())
        .then(json => completion(transformToHome1(json["home1"])))
        .catch(error => console.error(error));
}

/**
 * Function produces data object for Home1 using raw JSON data
 * @param {object} rawData raw JSON object
 * @returns Object of type Home1
 */
const transformToHome1 = (rawData: any): TypePageHome1 => {
    // auto type casting
    var _home1: TypePageHome1 = {};
    _home1.slider = rawData["sectionSlider"]
    _home1.services = rawData["sectionServices"]
    _home1.clients = rawData["sectionClients"]
    _home1.about = rawData["sectionAbout"]
    _home1.caseStudy = rawData["sectionCaseStudy"]
    _home1.pricing = rawData["sectionPricing"]
    _home1.whatWeDo = rawData["sectionWhatWeDo"]
    _home1.it = rawData["sectionIT"]
    _home1.testimonials = rawData["sectionTestimonials"]
    _home1.blogs = rawData["sectionBlog"]
    _home1.instagram = rawData["sectionInstagram"]
    return _home1;
}