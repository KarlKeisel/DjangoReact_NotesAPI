import React from 'react';

import {makeStyles, Typography} from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid";

import MenuItem from "./Menu/MenuItem";
import {menuListTop, menuListBot} from "./Menu/menuList";

import {motion} from "framer-motion";

import {Link} from "react-router-dom";

import styles from "../assets/jss/headerStyle";

// TODO Make Menu look better! Look at Material React Kit

const useStyles = makeStyles(styles);

export default function Menu() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [side]: open});
    };

    // TODO Work on Logout / Login toggles

    const sideList = side => (
        <div
            className={classes.drawer}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {menuListTop.map((menuItem) =>
                    <MenuItem
                        name={menuItem.name}
                        link={menuItem.link}
                        icon={menuItem.icon}
                        key={menuItem.name}
                    />)}
                <Divider/>
                {menuListBot.map((menuItem) =>
                    <MenuItem
                        name={menuItem.name}
                        link={menuItem.link}
                        icon={menuItem.icon}
                        key={menuItem.name}
                    />)}
            </List>
        </div>
    );

    return (
        <div className={classes.appBar}>
            <Grid container justify={"center"}>
                <Grid item xs={4}>
                    <motion.div
                        whileHover={{scale: 1.05}}
                    >
                        <Button
                            onClick={toggleDrawer('left', true)}
                            className={classes.primary}
                        >
                            <Typography variant={"h5"}>Menu</Typography>
                        </Button>
                    </motion.div>
                </Grid>
                <Grid item xs={6}>
                        <Typography
                            variant={"h5"}
                        > Notez
                        </Typography>
                </Grid>
                <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                    {sideList('left')}
                </Drawer>
            </Grid>
        </div>
    );
}
