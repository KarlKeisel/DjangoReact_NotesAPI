import React from 'react';

import classNames from "classnames";

import {makeStyles, Typography} from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";


import MenuItem from "./MenuItem";
import {menuListTop, menuListBot} from "./menuList";

import {motion} from "framer-motion";

import styles from "../../assets/jss/headerStyle";

// TODO Make Menu look better! Look at Material React Kit

const useStyles = makeStyles(styles);

export default function Menu(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });
    const [mobileOpen, setMobileOpen] = React.useState(false);
    React.useEffect(() => {
        if (props.changeColorOnScroll) {
            window.addEventListener("scroll", headerColorChange);
        }
        return function cleanup() {
            if (props.changeColorOnScroll) {
                window.removeEventListener("scroll", headerColorChange);
            }
        };
    });

    const headerColorChange = () => {
        const {color, changeColorOnScroll} = props;
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > changeColorOnScroll.height) {
            document.body
                .getElementsByTagName("header")[0]
                .classList.remove(classes[color]);
            document.body
                .getElementsByTagName("header")[0]
                .classList.add(classes[changeColorOnScroll.color]);
        } else {
            document.body
                .getElementsByTagName("header")[0]
                .classList.add(classes[color]);
            document.body
                .getElementsByTagName("header")[0]
                .classList.remove(classes[changeColorOnScroll.color]);
        }
    };

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({...state, [side]: open});
    };

    const {color, rightLinks, leftLinks, brand, fixed, absolute} = props;
    const appBarClasses = classNames({
        [classes.appBar]: true,
        [classes[color]]: color,
        [classes.absolute]: absolute,
        [classes.fixed]: fixed
    });
    const brandComponent = <Button className={classes.title}>{brand}</Button>;


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
        <AppBar className={appBarClasses}>
            <Toolbar className={classes.container}>
                {leftLinks !== undefined ? brandComponent : null}
                <div className={classes.flex}>
                    {leftLinks !== undefined ? (
                        <Hidden smDown implementation="css">
                            {leftLinks}
                        </Hidden>
                    ) : (
                        brandComponent
                    )}
                </div>
                <div>
                    {rightLinks}
                </div>
                <motion.div
                    whileHover={{scale: 1.05}}
                >
                    <Button
                        onClick={toggleDrawer('left', true)}
                        className={classes.info}
                    >
                        <Typography variant={"h5"}>Menu</Typography>
                    </Button>
                </motion.div>
            </Toolbar>
                <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                    {sideList('left')}
                </Drawer>
        </AppBar>
    );
}
