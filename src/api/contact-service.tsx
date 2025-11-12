/**
 * Simple API/Service to fetch Contact data
 * @module Contact-Service
 */

import { TypePageContact } from "../app/@types/pageTypes";
import { publicUrlFor } from "../globals/common-functions";

/**
 * API URL 
 * Here we are fetching data from local JSON
 */
const _URL = publicUrlFor("data/data.json");

/**
 * Getting all data stuff for Template's Contact page
 * 
 * @param {Function} completion Callback function to return data on fetch success
 */
export async function getContactData(completion: Function) {
    fetch(_URL)
        .then(response => response.json())
        .then(json => completion(transformToContact(json["contact"])))
        .catch(error => console.error(error));
}

/**
 * Function produces data object for Contact using raw JSON data
 * @param {object} rawData raw JSON object
 * @returns Object of type Contact
 */
const transformToContact = (rawData: any): TypePageContact => {
    // auto type casting
    var _contact: TypePageContact = {};
    _contact.contact = rawData["sectionContact"]
    return _contact;
}