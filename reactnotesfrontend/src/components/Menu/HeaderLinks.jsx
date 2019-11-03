/*eslint-disable*/
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../actions"

// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import {LockOpen, GitHub, Language, ExitToApp} from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";

import styles from "../../assets/jss/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const classes = useStyles();

    const isAuth = useSelector((state) => state.auth.isAuthenticated);

    const dispatch = useDispatch();
    const logout = () => dispatch(auth.logout());

    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                {isAuth
                    ? <Button
                    onClick={logout}
                    color="transparent"
                    className={classes.navLink}
                >
                    <ExitToApp className={classes.icons}/> Logout
                </Button>
                    : <Button
                    href="/login"
                    color="transparent"
                    className={classes.navLink}
                >
                    <LockOpen className={classes.icons}/> Login
                </Button>
                }

            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="github"
                    title="See the code on GitHub"
                    // placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Button
                        href="https://github.com/KarlKeisel/DjangoReact_NotesAPI"
                        target="_blank"
                        color="transparent"
                        className={classes.navLink}
                    >
                        <GitHub/>
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="website"
                    title="Check out my website!"
                    // placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Button
                        color="transparent"
                        href="https://www.karlkeisel.com/"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <Language/>
                    </Button>
                </Tooltip>
            </ListItem>
        </List>
    );
}