import { SELECT_DEPARTURE } from '../actions/index';
import { RENDER_LIST } from '../actions/index';

export default function trainReducer(state = { departure: '', start: '0', render: false }, action) {
    switch (action.type) {
        case SELECT_DEPARTURE:
            return { ...state, departure: action.payload };
        case RENDER_LIST:
            return { ...state, render: true }
    }
    return state;
}