import React from "react";

import {Link} from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import {makeStyles} from "@material-ui/core";
import {styles} from "../../assets/jss/menu"

import {motion, AnimatePresence} from "framer-motion";

const useStyles = makeStyles(styles);

const MenuItem = (menuItem) => {
    const classes = useStyles();

    return (
        <AnimatePresence>
            <motion.div
                animate={{ x: [20, 40, 20] }}
                exit={{ y: 400 }}
            >
                <Link to={menuItem.link} className={classes.links}>
                    <motion.div
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ListItem button>
                            <ListItemIcon>{menuItem.icon ? menuItem.icon : <FiberManualRecordIcon/>}</ListItemIcon>
                            <ListItemText primary={menuItem.name}/>
                        </ListItem>
                    </motion.div>
                </Link>
            </motion.div>
        </AnimatePresence>
    )
};

export default MenuItem;