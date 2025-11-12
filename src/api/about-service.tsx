/**
 * Simple API/Service to fetch About data
 * @module About-Service
 */

import { TypePageAbout } from "../app/@types/pageTypes";
import { publicUrlFor } from "../globals/common-functions";

/**
 * API URL 
 * Here we are fetching data from local JSON
 */
const _URL = publicUrlFor("data/data.json");

/**
 * Getting all data stuff for Template's About page
 * 
 * @param {Function} completion Callback function to return data on fetch success
 */
export async function getAboutData(completion: Function) {
    fetch(_URL)
        .then(response => response.json())
        .then(json => completion(transformToAbout(json["about"])))
        .catch(error => console.error(error));
}

/**
 * Function produces data object for About using raw JSON data
 * @param {object} rawData raw JSON object
 * @returns Object of type About
 */
const transformToAbout = (rawData: any): TypePageAbout => {
    // auto type casting
    var _about: TypePageAbout = {};
    _about.about = rawData["sectionAbout"]
    _about.team = rawData["sectionTeam"]
    _about.it = rawData["sectionIT"]
    _about.pricing = rawData["sectionPricing"]
    _about.whatWeDo = rawData["sectionWhatWeDo"]
    _about.services = rawData["sectionServices"]
    return _about;
}