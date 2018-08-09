import { START_FETCH, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/index';

export let initialState = {
    fetching: false,
    success: false,
    failure: false,
    trains: []
}

export default function trainReducer(state = initialState, action) {
    switch (action.type) {
        case START_FETCH:
            return { ...state, fetching: true, success: false, failure: false }
        case FETCH_FAILURE:
            return { ...state, fetching: false, success: false, failure: true }
        case FETCH_SUCCESS:
            return { ...state, fetching: false, success: true, failure: false, trains: action.payload }
    }
    return state;
}