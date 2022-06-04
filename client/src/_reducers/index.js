import {combineReducers} from "redux";
import user from './user_reducer';
import piker from "./piker_reducer";
import modal from "./modal_reducer";

const rootReducer = combineReducers({
    user,
    piker,
    modal
})

export default rootReducer;