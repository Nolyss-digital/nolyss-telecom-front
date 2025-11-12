/**
 * Simple API/Service to fetch Pricing plans data
 * @module Pricing-Service
 */

import { TypePagePricing } from "../app/@types/pageTypes";
import { publicUrlFor } from "../globals/common-functions";

/**
 * API URL 
 * Here we are fetching data from local JSON
 */
const _URL = publicUrlFor("data/data.json");

/**
 * Getting all data stuff for Template's Pricing page
 * 
 * @param {Function} completion Callback function to return data on fetch success
 */
export async function getPricingData(completion: Function) {
    fetch(_URL)
        .then(response => response.json())
        .then(json => completion(transformToPricing(json["pricing"])))
        .catch(error => console.error(error));
}

/**
 * Function produces data object for Pricing using raw JSON data
 * @param {object} rawData raw JSON object
 * @returns Object of type Pricing
 */
const transformToPricing = (rawData: any): TypePagePricing => {
    // auto type casting
    var _pricing: TypePagePricing = {};
    _pricing.pricing = rawData["sectionPricing"]
    _pricing.it = rawData["sectionIT"]
    _pricing.whatWeDo = rawData["sectionWhatWeDo"]
    _pricing.team = rawData["sectionTeam"]
    return _pricing;
}