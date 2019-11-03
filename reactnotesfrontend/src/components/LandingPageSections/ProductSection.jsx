import React from "react";

import {makeStyles} from "@material-ui/core";

import VerifiedUser from "@material-ui/icons/VerifiedUser";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import StyleIcon from '@material-ui/icons/Style';

import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import InfoArea from "../InfoArea/InfoArea";

import styles from "../../assets/jss/landingPageSections/productStyle"

const useStyles = makeStyles(styles);

export default function ProductSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>Let's talk notes</h2>
                    <h5 className={classes.description}>
                        We both know that the world cannot operate on memory alone.
                        You wanted to throw a surprise party for your friend and you forgot to hire the clown.
                        He was crushed, and you are now one rich friend short because you did not remember.
                        Now the you have the ability to never have to remember anything again.
                    </h5>
                    <h5 className={classes.description}>
                        With 'Notez' you always have that clown ready.
                    </h5>
                </GridItem>
            </GridContainer>
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            title={"Always Notez"}
                            description={"Always online, and ready to keep you prepared and ready for when you need it the most. Using a Python Django backend connected to a SQL database your data will be waiting for you."}
                            icon={SpeakerNotesIcon}
                            iconColor={"info"}
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            icon={VerifiedUser}
                            description={"With state of the art user authentication to our backend via Redux and Fetch requests, only you will have access to your private notes. Those skeletons are safe with us."}
                            title={"Secured Access"}
                            iconColor={"success"}
                            vertical
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <InfoArea
                            icon={StyleIcon}
                            description={"Not just another note app, ours uses advanced JSS and Material-UI and React to provide an aesthetics to take your experience to the next level."}
                            title={"Modern Looks"}
                            iconColor={"primary"}
                            vertical
                        />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )

}