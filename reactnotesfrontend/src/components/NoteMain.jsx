import React from 'react';
import {connect} from 'react-redux';
import {notes, auth} from "../actions";

import {withStyles} from "@material-ui/core";

import styles from "../assets/jss/notesMain"
import {compose} from "redux";
import NoteTable from "./Note/NoteTable";

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
    };


    render() {

        const {classes} = this.props;

        return (
            <div>
                <h2 className={classes.title}>Welcome to Karl's Note tracker!</h2>
                <hr/>
                <div style={{textAlign: "right"}}>
                    {/* TODO Handle styling of this area, and fix <a> tag.*/}
                    {this.props.user.username} : <button onClick={this.props.logout}>logout</button>
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
                <br />
                {(this.props.notes).length === 0 && this.props.notes.constructor === Array
                    ? <h3>Enter a note and save to begin your new life of organization!</h3>
                    : <NoteTable
                        notes={this.props.notes}
                        updateNotes={this.selectForEdit}
                        deleteNotes={this.props.deleteNote}
                    />
                }
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
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles),
)(NoteMain);
