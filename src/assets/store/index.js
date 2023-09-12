import {createStore, combineReducers} from "redux";
import {teamReducer} from "./teamReducer.js";
import {courseReducer} from "./courseReducer.js";
import {journalReducer} from "./journalReducer.js";
import {rolesReducer} from "./rolesReducer.js";
import {filesReducer} from "./fileReducer.js";
import {searchReducer} from "./searchReducer.js";


const rootReducer = combineReducers({
    teams: teamReducer,
    courses: courseReducer,
    journals: journalReducer,
    roles: rolesReducer,
    files: filesReducer,
    search: searchReducer,
})
export let store = createStore(rootReducer);