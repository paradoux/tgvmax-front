import { combineReducers } from 'redux'
import trainReducer from './reducer_trains'

const rootReducer = combineReducers({
    request_results: trainReducer
})

export default rootReducer