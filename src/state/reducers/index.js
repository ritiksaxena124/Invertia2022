import {combineReducers} from "redux";
import clubReducers from "./clubReducers";

const reducers = combineReducers({
    clubName: clubReducers,
});

export default reducers;