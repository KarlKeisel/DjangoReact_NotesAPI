const initialState = [
    // {text: "Write code!"}  No longer needed with API Calls now in effect.
];

export default function notes(state=initialState, action) {
    let noteList = state.slice();  // Splits reducers into multiple objects

    switch (action.type) {

        case 'ADD_NOTE':  // Keep state, add a new 'text' object
            // return [...state, {text: action.text}];  // Non API Version
            return [...state, action.note];

        case 'UPDATE_NOTE':  // Find note by index, remove it, then add new note at same index
            // let noteToUpdate = noteList[action.id];  // Non API Version
            // noteToUpdate.text = action.text;  // Non API Version
            let noteToUpdate = noteList[action.index];
            noteToUpdate.text = action.note.text;
            noteList.splice(action.id, 1, noteToUpdate);
            return noteList;

        case 'DELETE_NOTE':  // Find note by index, remove it, then return noteList.
            // noteList.splice(action.id, 1);  // Non API Version
            noteList.splice(action.index, 1);
            return noteList;

        case 'FETCH_NOTES':  // API Call using thunk, grab all notes.
            return [...state, ...action.notes];

        default:
            return state;
    }
}