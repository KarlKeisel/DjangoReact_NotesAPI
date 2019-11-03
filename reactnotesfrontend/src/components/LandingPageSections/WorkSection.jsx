import React from "react";

import {makeStyles} from "@material-ui/core";

import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Button from "../CustomButtons/Button";

import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

import styles from "../../assets/jss/landingPageSections/workStyle";
import {motion} from "framer-motion";

const useStyles = makeStyles(styles);

export default function WorkSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify={"center"}>
                <GridItem cs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Get started now</h2>
                    <h4 className={classes.description}>
                        Click to get started now! It's free and takes only a moment to start the new, orgainized you!
                    </h4>
                    <br />
                    <motion.div style={{textAlign: "center"}}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                    >
                        <Button
                            color="primary"
                            size={"lg"}
                            href={"/register"}
                        >
                            <AssignmentTurnedInIcon/>
                            Register
                        </Button>
                    </motion.div>
                </GridItem>
            </GridContainer>
        </div>
    )
}