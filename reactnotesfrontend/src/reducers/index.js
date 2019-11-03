import {combineReducers} from "redux";
import notes from "./notes";
import auth from "./auth"

const notesApp = combineReducers({
    notes, auth,
});

const rootReducer = (state, action) => {
    if (action.type === 'AUTHENTICATION_ERROR') {
        state.notes = [];
    }

    return notesApp(state, action)
};

export default rootReducer
