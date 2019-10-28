import {
    primaryColor,
    infoColor,
    grayColor,
    drawerWidth,
    links,
} from "./general"

const absolute = {
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    width: "300px",
};

const listSettings = {
    margin: "0",
    padding: "0",
};

const styles = {
    links,
    drawer: {
        width: drawerWidth,
    },
    nav: {
        display: "flex",
        justify_content: "center",
        align_items: "center",
        ...absolute,
    },
    background: {
        ...absolute,
        background: infoColor,
    },
    button: {
        outline: "none",
        border: "none",
        webkitUserSelect: "none",
        mozUserSelect: "none",
        msUserSelect: "none",
        cursor: "pointer",
        position: "absolute",
        top: "18px",
        left: "15px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        background: "transparent",
    },
    ul: {
        ...listSettings,
        padding: "25px",
        position: "absolute",
        top: "100px",
        width: "230px",
    },
    li: {
        ...listSettings,
        listStyle: "none",
        marginBottom: "20px",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
    },
    // Keeping placeholders for reference
    iconPlaceholder: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        flex: "40px 0",
        marginRight: "20px",
    },
    textPlaceholder: {
        borderRadius: "5px",
        width: "200px",
        height: "20px",
        flex: "1",
    },
    refresh: {
        padding: "10px",
        position: "absolute",
        background: "rgba(0, 0, 0, 0.4)",
        borderRadius: "10px",
        width: "20px",
        height: "20px",
        top: "10px",
        right: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
    },
};

export {styles}