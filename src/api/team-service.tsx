/**
 * Simple API/Service to fetch Team data
 * @module Team-Service
 */

import { TypePageTeam } from "../app/@types/pageTypes";
import { publicUrlFor } from "../globals/common-functions";

/**
 * API URL 
 * Here we are fetching data from local JSON
 */
const _URL = publicUrlFor("data/data.json");

/**
 * Getting all data stuff for Template's Team page
 * 
 * @param {Function} completion Callback function to return data on fetch success
 */
export async function getTeamData(completion: Function) {
    fetch(_URL)
        .then(response => response.json())
        .then(json => completion(transformToTeam(json["team"])))
        .catch(error => console.error(error));
}

/**
 * Function produces data object for Team using raw JSON data
 * @param {object} rawData raw JSON object
 * @returns Object of type Team
 */
const transformToTeam = (rawData: any): TypePageTeam => {
    // auto type casting
    var _team: TypePageTeam = {};
    _team.team = rawData["members"];
    return _team;
}