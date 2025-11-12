/**
 * Simple API/Service to fetch Cases data
 * @module Case-Study-Service
 */

import { TypePageCaseDetail, TypePageCaseStudy } from "../app/@types/pageTypes";
import { publicUrlFor } from "../globals/common-functions";

/**
 * API URL 
 * Here we are fetching data from local JSON
 */
const _URL = publicUrlFor("data/data.json");

/**
 * Getting all data stuff for Template's Case Study page
 * 
 * @param {Function} completion Callback function to return data on fetch success
 */
export async function getCasesData(completion: Function) {
    fetch(_URL)
        .then(response => response.json())
        .then(json => completion(transformToCases(json["caseStudy"])))
        .catch(error => console.error(error));
}

/**
 * Getting all data stuff for Template's Case Detail page
 * 
 * @param {Function} completion Callback function to return data on fetch success
 */
export async function getCaseDetail(completion: Function) {
    fetch(_URL)
        .then(response => response.json())
        .then(json => completion(transformToCaseDetail(json["caseDetail"])))
        .catch(error => console.error(error));
}

/**
 * Function produces data object for CaseStudy using raw JSON data
 * @param {object} rawData raw JSON object
 * @returns Array of type Cases
 */
const transformToCases = (rawData: any): TypePageCaseStudy => {
    // auto type casting
    var _cases: TypePageCaseStudy = {};
    _cases.cases = rawData["cases"];
    return _cases;
}

/**
 * Function produces data object for Case Detail using raw JSON data
 * @param {object} rawData raw JSON object
 * @returns Object of type Case Detail
 */
const transformToCaseDetail = (rawData: any): TypePageCaseDetail => {
    // auto type casting
    var _case: TypePageCaseDetail = {};
    _case.content = rawData["content"];
    _case.pagination = rawData["pagination"];
    _case.event = rawData["event"];
    return _case;
}