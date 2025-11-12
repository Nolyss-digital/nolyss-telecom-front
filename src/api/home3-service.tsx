/**
 * Simple API/Service to fetch Home3 page data
 * @module Home3-Service
 */

import { TypePageHome3 } from "../app/@types/pageTypes";
import { publicUrlFor } from "../globals/common-functions";

/**
 * API URL 
 * Here we are fetching data from local JSON
 */
const _URL = publicUrlFor("data/data.json");

/**
 * Getting all data stuff for Template's Home3 page
 * 
 * @param {Function} completion Callback function to return data on fetch success
 */
export async function getHome3Data(completion: Function) {
    fetch(_URL)
        .then(response => response.json())
        .then(json => completion(transformToHome3(json["home3"])))
        .catch(error => console.error(error));
}

/**
 * Function produces data object for Home3 using raw JSON data
 * @param {object} rawData raw JSON object
 * @returns Object of type Home1
 */
const transformToHome3 = (rawData: any): TypePageHome3 => {
    // auto type casting
    var _home3: TypePageHome3 = {};
    _home3.slider = rawData["sectionSlider"]
    _home3.services = rawData["sectionServices"]
    _home3.skills = rawData["sectionSkills"]
    _home3.caseStudy = rawData["sectionCaseStudy"]
    _home3.about = rawData["sectionAbout"]
    _home3.team = rawData["sectionTeam"]
    _home3.it = rawData["sectionIT"]
    _home3.testimonials = rawData["sectionTestimonials"]
    _home3.whatWeDo = rawData["sectionWhatWeDo"]
    _home3.blogs = rawData["sectionBlog"]
    return _home3;
}