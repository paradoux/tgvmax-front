import axios from 'axios';

//const API_key = "dcb084c0-061c-4a14-90bd-f63b39a115b8";

const ROOT_URL = `https://data.opendatasoft.com/api/records/1.0/search/?dataset=tgvmax%40datasncf&start=`;
const ROOT_URL2 = `&rows=40&facet=date&facet=destination&facet=origine&refine.origine=`;

//export const FETCH_TRAIN = "FETCH_TRAIN";
export const FETCH_MORE = "FETCH_MORE";
export const SELECT_DEPARTURE = "SELECT_DEPARTURE";
export const RENDER_LIST = "RENDER_LIST";

/* 
export function fetchTrains(city) {
    const tgvmaxdispo = "&exclude.od_happy_card=NON"
    const url = `${ROOT_URL}${start}${ROOT_URL2}${city}${tgvmaxdispo}`
    const request = axios.get(url)

    return {
        type: FETCH_TRAIN,
        payload: request
    };
}
 */

export function selectDeparture(city) {
    return {
        type: SELECT_DEPARTURE,
        payload: city
    }
}

export function renderList() {
    return {
        type: RENDER_LIST
    }
}

/* 
export function fetchMore(){
    let start = `0`;


    return {
        type: FETCH_MORE,
        payload: 
    }
}
*/
