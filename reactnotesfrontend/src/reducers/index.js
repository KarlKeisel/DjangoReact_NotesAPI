import {combineReducers} from "redux";
import notes from "./notes";
import auth from "./auth"

const notesApp = combineReducers({
    notes, auth,
});

export default notesApp