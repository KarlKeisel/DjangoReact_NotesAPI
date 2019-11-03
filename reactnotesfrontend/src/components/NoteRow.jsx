import React from "react";

import {makeStyles} from "@material-ui/core";

import styles from "../assets/jss/noteTableStyle"

import GridContainer from "./Grid/GridContainer";
import GridItem from "./Grid/GridItem";
import Button from "./CustomButtons/Button";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import {motion, AnimatePresence} from "framer-motion";
// TODO Play with motion? Note creation?

const useStyles = makeStyles(styles);

export default function NoteRow({note, id, updateNotes, deleteNotes}) {
    const classes = useStyles();

    return (
        <>
            <GridItem key={`note_${id}`} xs={10}>
                <h4>{note.text}</h4>
            </GridItem>

            <GridItem xs={1}>
                <Tooltip title={"Edit"}>
                <Button
                    justIcon
                    round
                    color={"warning"}
                    onClick={() => updateNotes(id)}
                >
                    <EditIcon className={classes.icons} />
                </Button>
                </Tooltip>
            </GridItem>
            <GridItem xs={1}>
                <Tooltip title={"Delete"}>
                <Button
                    justIcon
                    round
                    color={"danger"}
                    onClick={() => deleteNotes(id)}
                >
                    <DeleteIcon className={classes.icons} />
                </Button>
                </Tooltip>
            </GridItem>
        </>
    )

}