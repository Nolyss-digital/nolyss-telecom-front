/**
 * Simple API/Service to fetch FAQ data
 * @module FAQ-Service
 */

import { TypePageFAQ } from "../app/@types/pageTypes";
import { publicUrlFor } from "../globals/common-functions";

/**
 * API URL 
 * Here we are fetching data from local JSON
 */
const _URL = publicUrlFor("data/data.json");

/**
 * Getting all data stuff for Template's FAQ page
 * 
 * @param {Function} completion Callback function to return data on fetch success
 */
export async function getFAQData(completion: Function) {
    fetch(_URL)
        .then(response => response.json())
        .then(json => completion(transformToFAQ(json["faq"])))
        .catch(error => console.error(error));
}

/**
 * Function produces data object for FAQ using raw JSON data
 * @param {object} rawData raw JSON object
 * @returns Object of type FAQ
 */
const transformToFAQ = (rawData: any): TypePageFAQ => {
    // auto type casting
    var _faq: TypePageFAQ = {};
    _faq.faq = rawData["sectionFAQ"]
    _faq.contact = rawData["sectionFAQContact"]
    return _faq;
}