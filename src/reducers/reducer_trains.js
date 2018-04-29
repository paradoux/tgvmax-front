import FETCH_TRAIN from '../actions/index';

export default function trainReducer(state = {}, action) {
    switch (action.type) {
        case FETCH_TRAIN:
            return { ...state, trains: action.payload.data.records[0].recordid };
    }
    return state;
}