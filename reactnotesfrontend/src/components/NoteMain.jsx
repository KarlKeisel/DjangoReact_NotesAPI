import React from 'react';
import {connect} from 'react-redux';
import {notes} from "../actions";

// Kept import to remind about links through 'react-router-dom'
// import {Link} from "react-router-dom";

class NoteMain extends React.Component {
    render() {
        return (
            <div>
                <h2>Welcome to Karl's Note tracker!</h2>
                <hr/>

                <h3>Notes</h3>
                <table>
                    <tbody>
                    {this.props.notes.map(note => (
                        <tr>
                            <td>{note.text}</td>
                            <td>
                                <button>Edit</button>
                            </td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

// Linking states to the component
const mapStateToProps = state => {
    return {
        notes: state.notes,
    }
};

// Linking actions to the component
const mapDispatchToProps = dispatch => {
    return {
        addNote: (text) => {
            dispatch(notes.addNote(text));
        },
        updateNote: (id, text) => {
            dispatch(notes.updateNote(id, text));
        },
        deleteNote: (id) => {
            dispatch(notes.deleteNote(id));
        },
    }
};

// Linking redux to NoteMain component
export default connect(mapStateToProps, mapDispatchToProps)(NoteMain);
