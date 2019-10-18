import React from 'react';
import {connect} from 'react-redux';
import {notes, auth} from "../actions";

// Kept import to remind about links through 'react-router-dom'
// import {Link} from "react-router-dom";

class NoteMain extends React.Component {
    state = {
        text: "",
        updateNoteId: null,
    };

    componentDidMount() {
        this.props.fetchNotes();
    }

    resetForm = () => {
        this.setState({text: "", updateNoteId: null})
    };

    selectForEdit = (id) => {
        let note = this.props.notes[id];
        this.setState({text: note.text, updateNoteId: id})
    };

    submitNote = (e) => {
        e.preventDefault();
        this.state.updateNoteId === null ?
            this.props.addNote(this.state.text)
                .then(this.resetForm) :  // API Version to help with chaining.
            this.props.updateNote(this.state.updateNoteId, this.state.text)
                .then(this.resetForm);
        // this.resetForm();  // Non API version.
        // TODO Find a way to focus on 'input-line' on submit.
    };

    render() {
        return (
            <div>
                <h2>Welcome to Karl's Note tracker!</h2>
                <hr/>
                <div style={{textAlign: "right"}}>
                    {/* TODO Handle styling of this area, and fix <a> tag.*/}
                    {this.props.user.username} (<a onClick={this.props.logout}>logout</a>)
                </div>

                <h3>Add new note</h3>
                <form onSubmit={this.submitNote}>
                    <input
                        className={'input-line'}
                        value={this.state.text}
                        placeholder={'Enter new note...'}
                        onChange={(e) => this.setState({text: e.target.value})}
                        required/>
                    <input type={'submit'} value={'Save Note'}/>
                    <button onClick={this.resetForm}>Reset</button>
                </form>

                <h3>Notes</h3>
                <table>
                    <tbody>
                    {this.props.notes.map((note, id) => (
                        <tr key={`note_${id}`}>
                            <td>{note.text}</td>
                            <td>
                                <button onClick={() => this.selectForEdit(id)}>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => this.props.deleteNote(id)}>Delete</button>
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
        user: state.auth.user,
    }
};

// Linking actions to the component
const mapDispatchToProps = dispatch => {
    return {
        addNote: (text) => {
            // dispatch(notes.addNote(text));  // Non API Version
            return dispatch(notes.addNote(text));  // API Version to allow additional callbacks.
        },
        updateNote: (id, text) => {
            // dispatch(notes.updateNote(id, text));  // Non API Version
            return dispatch(notes.updateNote(id, text));  // API Version
        },
        deleteNote: (id) => {
            dispatch(notes.deleteNote(id));
        },
        fetchNotes: () => {
            dispatch(notes.fetchNotes());
        },
        logout: () => dispatch(auth.logout()),
    }
};

// Linking redux to NoteMain component
export default connect(mapStateToProps, mapDispatchToProps)(NoteMain);
