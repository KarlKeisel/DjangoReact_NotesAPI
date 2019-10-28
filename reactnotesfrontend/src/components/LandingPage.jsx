import React from "react";

import classNames from "classnames";

import {makeStyles} from "@material-ui/core";

import styles from "../assets/jss/landingPage";
import Parallax from "./Parallax/Parallax";
import GridContainer from "./Grid/GridContainer";
import GridItem from "./Grid/GridItem";
import Button from "./CustomButtons/Button";

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import {motion} from "framer-motion";
import ProductSection from "./LandingPageSections/ProductSection";

const useStyles = makeStyles(styles);

// TODO Figure out font sizing and type in style pages. (A bit soft)

function LandingPage(props) {
    const classes = useStyles();

    return (
        <div>
            <Parallax filter image={require("../assets/img/WritingAtDesk.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Your Notes Start Here.</h1>
                            <h4>
                                Ever needed to take notes and realized that you don't have any paper on hand?
                                This will change your future and make you the most organized person you have ever seen.
                                Success will come to you for help, and you'll note its number in your notes file.
                            </h4>
                            <br/>
                            <motion.div
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                            >
                                <Button
                                    color={"info"}
                                    size={"lg"}
                                    href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"}
                                    target={"_blank"}
                                    rel="noopener noreferrer"
                                >
                                    <PlayCircleOutlineIcon/>
                                    Watch video
                                </Button>
                            </motion.div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <ProductSection />
                        {/* TeamSection Here */}
                        {/* WorkSection Here */}
                </div>
            </div>
            {/*  Footer Here  */}
        </div>
)
}

export default LandingPage;