import {container} from "./general";

const landingPageStyle = {
    container,
    pageHeader: {
        minHeight: "100vh",
        height: "auto",
        display: "inherit",
        position: "relative",
        margin: "0",
        padding: "0",
        border: "0",
        alignItems: "center",
        "&:before,&:after": {
            position: "absolute",
            zIndex: "-1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: '""'
        },
        "& footer li a,& footer li a:hover,& footer li a:active": {
            color: "#FFFFFF"
        },
        "& footer": {
            position: "absolute",
            bottom: "0",
            width: "100%"
        }
    },
    menuBackground: {
        height: "100px",
        width: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        position: "fixed",
        top: "0",
        left: "0",
    },
    icons: {
        width: "17px",
        height: "17px",
        color: "#FFFFFF",
    },

};

export default landingPageStyle;