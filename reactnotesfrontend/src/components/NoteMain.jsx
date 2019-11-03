import React from 'react';
import {connect} from 'react-redux';
import {notes, auth} from "../actions";

import {withStyles} from "@material-ui/core";
import styles from "../assets/jss/notesMain"

import NoteAddIcon from '@material-ui/icons/NoteAdd';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

import image from "../assets/img/ScatteredPapers.jpg"

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "./CustomButtons/Button"

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

    // Saving note under edit glitches, fixes on refresh.

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
            <div
                className={classes.pageHeader}
                style={{
                    backgroundImage: "url(" + image + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                }}
            >
                <div className={classes.menuBackground}>
                </div>
                <div className={classes.container} style={{paddingTop: "120px"}}>
                    <Paper style={{padding: "10px 5%"}}>
                        <form onSubmit={this.submitNote}>
                            <TextField
                                fullWidth
                                value={this.state.text}
                                label={"New Notes Here..."}
                                onChange={(e) => this.setState({text: e.target.value})}
                                required
                            />
                            <br/>
                            <Button
                                style={{marginLeft: "10%"}}
                                round
                                color={"info"}
                                type={"submit"}
                            >
                                <NoteAddIcon className={classes.icons}/>
                                Save Note!
                            </Button>
                            <Button
                                round
                                color={"rose"}
                                onClick={this.resetForm}
                            >
                                <RotateLeftIcon className={classes.icons} />
                                Reset Note.
                            </Button>
                        </form>
                    </Paper>
                </div>
                <br/>
                {(this.props.notes).length === 0 && this.props.notes.constructor === Array
                    ? <Paper className={classes.container} style={{textAlign: "center"}}>
                        <h2>Enter a note and save to begin your new life of organization!</h2>
                    </Paper>
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
