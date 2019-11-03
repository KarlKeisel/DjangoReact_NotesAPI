import React from "react";

import { useSelector } from "react-redux";

import Menu from "./Menu/Menu";

import HeaderLinks from "./Menu/HeaderLinks";

function MenuBar(props) {
    const {...rest} = props;

    const user = useSelector((state) => state.auth.user);

    return (
        <Menu
            color="transparent"
            brand={user ? `'Notez' by ${user.username}` : "'Notez' by Karl"}
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
                height: 400,
                color: "white"
            }}
            {...rest}
        />
    )
}

export default MenuBar