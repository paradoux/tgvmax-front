import { SELECT_DEPARTURE, FETCH_TRAINS, SELECT_ROW, RENDER_LIST, START_FETCH, FETCH_SUCCESS, FETCH_FAILURE } from '../actions/index';

export let initialState = {
    city: '',
    row: '0',
    fetching: false,
    success: false,
    failure: false,
    trains: []
}

export default function trainReducer(state = initialState, action) {
    switch (action.type) {
        /*         case SELECT_DEPARTURE:
                    return { ...state, city: action.payload } */
        case START_FETCH:
            return { ...state, fetching: true, success: false, failure: false }
        case FETCH_FAILURE:
            return { ...state, fetching: false, success: false, failure: true }
        case FETCH_SUCCESS:
            return { ...state, fetching: false, success: true, failure: false, trains: [...action.payload] }
        /*         case SELECT_ROW:
                    return { ...state, row: action.payload };
                case START_FETCH:
                    return { ...state, fetching: true, success: false };
                case FETCH_SUCCESS:
                    return { ...state, fetching: false, success: true, trains: [...state.trains, ...action.payload] };
                case RENDER_LIST:
                    return { ...state, render: true } */
    }
    return state;
}