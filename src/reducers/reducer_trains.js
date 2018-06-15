import { SELECT_DEPARTURE, SELECT_ROW, RENDER_LIST, START_FETCH, FETCH_SUCCESS } from '../actions/index';

export let initialState = {
    city: '',
    row: '0',
    fetching: false,
    success: false,
    trains: []
}

export default function trainReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_DEPARTURE:
            return { ...state, city: action.payload };
        case SELECT_ROW:
            return { ...state, row: action.payload };
        case START_FETCH:
            return { ...state, fetching: true, success: false };
        case FETCH_SUCCESS:
            return { ...state, fetching: false, success: true, trains: [...state.trains, ...action.payload] };
        case RENDER_LIST:
            return { ...state, render: true }
    }
    return state;
}