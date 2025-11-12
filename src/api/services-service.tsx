/**
 * Simple API/Service to fetch Services data
 * @module Services-Service
 */

import { TypePageServices } from "../app/@types/pageTypes";
import { publicUrlFor } from "../globals/common-functions";

/**
 * API URL 
 * Here we are fetching data from local JSON
 */
const _URL = publicUrlFor("data/data.json");

/**
 * Getting all data stuff for Template's Services page
 * 
 * @param {Function} completion Callback function to return data on fetch success
 */
export async function getServicesData(completion: Function) {
    fetch(_URL)
        .then(response => response.json())
        .then(json => completion(transformToServices(json["services"])))
        .catch(error => console.error(error));
}

/**
 * Function produces data object for Services using raw JSON data
 * @param {object} rawData raw JSON object
 * @returns Object of type Services
 */
const transformToServices = (rawData: any): TypePageServices => {
    // auto type casting
    var _services: TypePageServices = {};
    _services.services = rawData["sectionServices"]
    _services.whatWeDo = rawData["sectionWhatWeDo"]
    _services.it = rawData["sectionIT"]
    _services.team = rawData["sectionTeam"]
    _services.testimonials = rawData["sectionTestimonials"]
    return _services;
}