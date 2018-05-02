import axios from 'axios';

//const API_key = "dcb084c0-061c-4a14-90bd-f63b39a115b8";

const ROOT_URL = `https://data.opendatasoft.com/api/records/1.0/search/?dataset=tgvmax%40datasncf&rows=40&sort=-date&facet=date&facet=destination&facet=origine&refine.origine=`

export const FETCH_TRAIN = "FETCH_TRAIN"

export function fetchTrains(city) {
    const tgvmaxdispo = "&exclude.od_happy_card=NON"
    const url = `${ROOT_URL}${city}${tgvmaxdispo}`
    const request = axios.get(url)

    return {
        type: FETCH_TRAIN,
        payload: request
    };
}
