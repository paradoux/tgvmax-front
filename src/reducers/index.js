import { combineReducers } from 'redux';
import trainReducer from './reducer_trains';

const rootReducer = combineReducers({
    trains: trainReducer
})

export default rootReducer;