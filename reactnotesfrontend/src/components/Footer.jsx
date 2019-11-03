import React from "react";

import PropTypes from "prop-types";

import classNames from "classnames";

import {List, ListItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";

import styles from "../assets/jss/footerStyle"

const useStyles = makeStyles(styles);

export default function Footer(props) {
    const classes = useStyles();
    const {whiteFont} = props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    const aClasses = classNames({
        [classes.a]: true,
        [classes.footerWhiteFont]: whiteFont
    });

    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href={"https://www.karlkeisel.com/"}
                                className={classes.block}
                                target={"_blank"}
                            >
                                KarlKeisel.Com
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href={"https://github.com/KarlKeisel/DjangoReact_NotesAPI"}
                                className={classes.block}
                                target={"_blank"}
                            >
                                Github
                            </a>
                        </ListItem>
                    </List>
                </div>
                <br />
                <div className={classes.right}>
                    <a
                        href={"https://wwww.creative-tim.com?ref=mkr-footer"}
                        className={aClasses}
                        target={"_blank"}
                    >
                        Theme by Creative Tim
                    </a>
                </div>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    whiteFont: PropTypes.bool
};