import {combineReducers} from "redux";
import notes from "./notes";

const notesApp = combineReducers({
    notes,
});

export default notesApp