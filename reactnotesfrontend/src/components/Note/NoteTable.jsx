import React from "react";

import {makeStyles} from "@material-ui/core";
import classNames from "classnames"

import styles from "../../assets/jss/noteTableStyle"

import GridContainer from "../Grid/GridContainer";
import Paper from "@material-ui/core/Paper";

import NoteRow from "../NoteRow";

const useStyles = makeStyles(styles);

export default function NoteTable({notes, updateNotes, deleteNotes}) {
    const classes = useStyles();

    return (
        <Paper className={classNames(classes.container, classes.paper)}>
            <div>
                <h3>Notes</h3>
                <hr className={classes.hr} />
                <GridContainer>
                    {notes.map((note, id) => (
                        <NoteRow
                            key={`note_${id}`}
                            note={note}
                            id={id}
                            updateNotes={updateNotes}
                            deleteNotes={deleteNotes}
                        />
                    ))}
                </GridContainer>
            </div>
        </Paper>
    )
}