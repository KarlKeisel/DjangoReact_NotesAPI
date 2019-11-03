import React from 'react';

import {motion} from 'framer-motion';
import {makeStyles, Typography} from "@material-ui/core";

//images
import image from '../assets/img/NotLostButHere.jpg';

import styles from "../assets/jss/sidePage"
import GridContainer from "./Grid/GridContainer";
import GridItem from "./Grid/GridItem";

const useStyles = makeStyles(styles);

const NotFound = () => {
    const classes = useStyles();

    return (
        <div
            className={classes.pageHeader}
            style={{
                backgroundImage: "url(" + image + ")",
                backgroundSize: "cover",
                backgroundPosition: "top center"
            }}
        >
            <div className={classes.container}>
                <GridContainer justify={"center"}>
                    <h1 style={{letterSpacing: "10px"}}>404</h1>
                </GridContainer>
            </div>
        </div>
    )
};

export default NotFound