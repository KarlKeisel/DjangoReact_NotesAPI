import React from "react";

import {makeStyles} from "@material-ui/core";

import styles from "../assets/jss/noteTableStyle"

import GridItem from "./Grid/GridItem";
import Button from "./CustomButtons/Button";
import Tooltip from "@material-ui/core/Tooltip";

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(styles);

export default function NoteRow({note, id, updateNotes, deleteNotes}) {
    const classes = useStyles();

    return (
        <>
            <GridItem xs={10}>
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