import { FETCH_TRAIN } from '../actions/index';

export default function trainReducer(state = {}, action) {
    switch (action.type) {
        case FETCH_TRAIN:
            console.log("Adios", action);
            return { ...state, trains: action.payload.data };
    }
    return state;
}