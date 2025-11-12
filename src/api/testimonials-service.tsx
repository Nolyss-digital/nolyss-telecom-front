/**
 * Simple API/Service to fetch Testimonials data
 * @module Testimonials-Service
 */

import { TypePageTestimonials } from "../app/@types/pageTypes";
import { publicUrlFor } from "../globals/common-functions";
/**
 * API URL 
 * Here we are fetching data from local JSON
 */
const _URL = publicUrlFor("data/data.json");

/**
 * Getting all data stuff for Template's Testimonials page
 * 
 * @param {Function} completion Callback function to return data on fetch success
 */
export async function getTestimonialsData(completion: Function) {
    fetch(_URL)
        .then(response => response.json())
        .then(json => completion(transformToTestimonials(json["testimonials"])))
        .catch(error => console.error(error));
}

/**
 * Function produces data object for Testimonials using raw JSON data
 * @param {object} rawData raw JSON object
 * @returns Object of type Testimonials
 */
const transformToTestimonials = (rawData: any): TypePageTestimonials => {
    // auto type casting
    var _testimonials: TypePageTestimonials = {};
    _testimonials.testimonials = rawData["testimonials"];
    return _testimonials;
}