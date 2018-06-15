import axios from 'axios';
import { store } from '../index';


//const API_key = "dcb084c0-061c-4a14-90bd-f63b39a115b8";

//export const FETCH_TRAIN = "FETCH_TRAIN";
export const SELECT_DEPARTURE = "SELECT_DEPARTURE";
export const SELECT_ROW = "SELECT_ROW";
export const SELECT_DATE = "SELECT_DATE";
export const FETCH_TRAINS = "FETCH_TRAINS";
export const START_FETCH = "START_FETCH";
export const FETCH_SUCCESS = "FETCH_SUCCESS"
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

export function setDeparture(city) {
    return {
        type: SELECT_DEPARTURE,
        payload: city
    }
}

export function setDate(date) {
    return {
        type: SELECT_DATE,
        payload: date
    }
}

export function setRow(row) {
    return {
        type: SELECT_ROW,
        payload: row
    }
}

export function startFetch() {
    return {
        type: START_FETCH
    }
}

export function fetchSuccess(trains) {
    return {
        type: FETCH_SUCCESS,
        payload: trains
    }
}

export function fetchTrains(city, row) {
    console.log(city, row)
    const ROOT_URL1 = `https://data.opendatasoft.com/api/records/1.0/search/?dataset=tgvmax%40datasncf&start=`;
    const ROOT_URL2 = `&rows=10000&facet=date&facet=destination&facet=origine&refine.origine=`;
    const tgvmaxdispo = "&exclude.od_happy_card=NON"
    return (dispatch) => {
        dispatch(startFetch())
        return (
            axios.get(`${ROOT_URL1}${row}${ROOT_URL2}${city}${tgvmaxdispo}`)
                .then((res) => res = res.data.records)
                .then((res) => dispatch(fetchSuccess(res)))
        )
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
