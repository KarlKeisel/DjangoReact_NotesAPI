// Sets up the functions that follow the reducers\notes.js

// Non API React Note Actions
// export const addNote = text => {
//     return {
//         type: 'ADD_NOTE',
//         text
//     }
// };

// export const updateNote = (id, text) => {
//     return {
//         type: 'UPDATE_NOTE',
//         id,
//         text
//     }
// };

// export const deleteNote = id => {
//     return {
//         type: 'DELETE_NOTE',
//         id
//     }
// };

// Using thunk, setting up API calls to Django Server

const headers = {"Content-Type": "application/json"};
const apiRoute = "http://localhost:8000/api/notes/";

export const fetchNotes = () => {
  return dispatch => {
      return fetch(apiRoute, {headers, })
          .then(res => res.json())
          .then(notes => {
              return dispatch({
                  type: 'FETCH_NOTES',
                  notes
              })
          })
  }
};

export const addNote = text => {
    return dispatch => {
        let body = JSON.stringify({text, });
        return fetch(apiRoute, {headers, method: "POST", body})
            .then(res => res.json())
            .then(note => {
                return dispatch({
                    type: 'ADD_NOTE',
                    note
                })
            })
    }
};

export const updateNote = (index, text) => {
    return (dispatch, getState) => {

        let body = JSON.stringify({text, });
        let noteId = getState().notes[index].id;

        return fetch(`${apiRoute}${noteId}/`, {headers, method: "PUT", body})
            .then(res => res.json())
            .then(note => {
                return dispatch({
                    type: 'UPDATE_NOTE',
                    note,
                    index
                })
            })
    }
};

export const deleteNote = index => {
    return (dispatch, getState) => {
        let noteId = getState().notes[index].id;

        return fetch(`${apiRoute}${noteId}/`, {headers, method: "DELETE"})
            .then(res => {
                if (res.ok) {
                    return dispatch({
                        type: 'DELETE_NOTE',
                        index
                    })
                }
            })
    }
};