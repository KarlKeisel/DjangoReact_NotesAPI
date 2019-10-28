import React from 'react';

import {motion} from 'framer-motion';
import {Typography} from "@material-ui/core";

//images
import forest from '../assets/img/ForestFog.jpg';

const style = {
    img: {
        height: "100%",
        width: "100%",
        position: "absolute",

    },
    text: {
        textAlign: "center",
        position: "center"
    }
};


const NotFound = () => {
    return (
        <div>
            {/*<img src={forest} alt="Forest" style={style.img} />*/}
            {/*    <motion.div*/}
            {/*        animate={{scale: 0.1}}*/}
            {/*        transition={{duration: 30}}*/}
            {/*    >*/}
            {/*        <Typography*/}
            {/*            variant={"h2"}*/}
            {/*            color={"secondary"}*/}
            {/*        >*/}
            {/*            Not Found*/}
            {/*        </Typography>*/}
            {/*        <Typography*/}
            {/*            color={"secondary"}*/}
            {/*            variant={"subtitle1"}*/}
            {/*        >*/}
            {/*            The page you're looking for does not exist.*/}
            {/*        </Typography>*/}
            {/*    </motion.div>*/}
        </div>
    )
};

export default NotFound