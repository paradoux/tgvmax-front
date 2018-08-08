import axios from 'axios';
import { store } from '../index';


//const API_key = "dcb084c0-061c-4a14-90bd-f63b39a115b8";

//export const FETCH_TRAIN = "FETCH_TRAIN";
export const SELECT_DEPARTURE = "SELECT_DEPARTURE";
export const SELECT_ROW = "SELECT_ROW";
export const SELECT_DATE = "SELECT_DATE";
export const FETCH_TRAINS = "FETCH_TRAINS";
export const START_FETCH = "START_FETCH";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const RENDER_LIST = "RENDER_LIST";

/* export const setDeparture = (city) => {
    return {
        type: SELECT_DEPARTURE,
        payload: city
    }
} */

export const setDate = (date) => {
    return {
        type: SELECT_DATE,
        payload: date
    }
}

export const setRow = (row) => {
    return {
        type: SELECT_ROW,
        payload: row
    }
}

export const startFetch = () => {
    return {
        type: START_FETCH
    }
}

export const fetchSuccess = (trains) => {
    return {
        type: FETCH_SUCCESS,
        payload: trains
    }
}

export const fetchFailure = () => {
    return {
        type: FETCH_FAILURE
    }
}


export const fetchTrains = (city, date = null) => {
    return async (dispatch) => {
        dispatch(startFetch())
        try {
            let trains = await axios.get(`http://localhost:8080/trains/${city}/${date}`)
            trains = trains.data
            dispatch(fetchSuccess(trains))
        }
        catch (err) {
            console.error('Sorry, the trains couldn\'t be uploaded due to the following error:' + err)
            dispatch(fetchFailure())
        }
    }
}



/* export const renderList = () => {
    return {
        type: RENDER_LIST
    }
} */

/* 
export  fetchMore(){
    let start = `0`;


    return {
        type: FETCH_MORE,
        payload: 
    }
}
*/
