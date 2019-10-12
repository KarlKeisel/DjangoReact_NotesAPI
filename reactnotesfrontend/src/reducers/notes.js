const initialState = [
    {text: "Write code!"}
];

export default function notes(state=initialState, action) {
    let noteList = state.slice();  // Splits reducers into multiple objects

    switch (action.type) {

        case 'ADD_NOTE':  // Keep state, add a new 'text' object
            return [...state, {text: action.text}];

        case 'UPDATE_NOTE':  // Find note by index, remove it, then add new note at same index
            let noteToUpdate = noteList[action.id];
            noteToUpdate.text = action.text;
            noteList.splice(action.id, 1, noteToUpdate);
            return noteList;

        case 'DELETE_NOTE':  // Find note by index, remove it, then return noteList.
            noteList.splice(action.id, 1);
            return noteList;

        default:
            return state;
    }
}