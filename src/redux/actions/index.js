import axios from 'axios'

export const START_FETCH = 'START_FETCH'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

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

/* Allows us to dispatch an action at each stage of the request (start, success, failure ) */
export const fetchTrains = (city, date = null) => {
    return async (dispatch) => {
        dispatch(startFetch())
        /* Waits for the results of the request before dispatching fetchSuccess */
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