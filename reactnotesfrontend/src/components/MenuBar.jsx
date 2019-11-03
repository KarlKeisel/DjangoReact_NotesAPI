import React from "react";

import Menu from "./Menu/Menu";

import HeaderLinks from "./Menu/HeaderLinks";

// TODO Connect store to set login state. Change to class? Pass down is authenticated.

function MenuBar(props) {
    const {...rest} = props;

    return (
        <Menu
            color="transparent"
            brand="'Notez' by Karl"
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