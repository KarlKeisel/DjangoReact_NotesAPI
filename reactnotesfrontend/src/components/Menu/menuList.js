// List for top navbar

import React from 'react';

import HomeIcon from "@material-ui/icons/Home";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NotesIcon from "@material-ui/icons/Notes";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";


export const menuListTop = [
    {
        name: "Home",
        icon: <HomeIcon />,
        link: "/",
    },
    {
        name: "Notes",
        icon: <NotesIcon />,
        link: "/notes"
    },
    {
        name: "Register",
        icon: <AssignmentIndIcon />,
        link: "/register"
    }
];

export const menuListBot = [
    {
        name: "Login",
        icon: <VpnKeyIcon />,
        link: "/login"
    },
    {
        name: "Logout",
        icon: <ExitToAppIcon />,
        link: "/logout"
    }
];