import axios from 'axios';

//const API_key = "dcb084c0-061c-4a14-90bd-f63b39a115b8";

const ROOT_URL = `https://ressources.data.sncf.com/api/records/1.0/search/?dataset=tgvmax&rows=30&sort=date&facet=date&facet=origine&facet=destination&refine.origine=`


export const FETCH_TRAIN = "FETCH_TRAIN"

export function fetchTrains(city) {
    const url = `${ROOT_URL}${city}`
    const request = axios.get(url)

    return {
        type: FETCH_TRAIN,
        payload: request
    };
}
