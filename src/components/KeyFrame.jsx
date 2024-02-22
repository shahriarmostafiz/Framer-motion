import { motion } from 'framer-motion';
import React from 'react';

const KeyFrame = () => {
    return (
        <motion.div
            className='w-32 h-32 bg-blue-500  m-4 border rounded '
            // style={{
            //     width: 400,
            //     height: 400,
            //     ...props.style,
            //     display: "flex",
            //     placeItems: "center",
            //     placeContent: "center",
            // }}
            animate={{

                rotate: [0, 90, 180, 270, 0],
                scale: [1, 1, 2, 2, 1],
                backgroundColor: ["#0af", "rgb(25,255,57)", "#fa0", "rgb(233,31,212)"]
            }}
            transition={{
                duration: 1,
                repeat: 2,
                // repeatType: "reverse",
            }}
        // animate={
        //     {
        //         borderRadius: ["20%", "20%", "50%", "50 %", "20%"],
        //         rotate: [0, 90, 180, 270, 0],
        //         scale: [1, 1, 2, 2, 1],
        //         backgroundColor: ["red", "yellow", "pink", "gold", "purple"]

        //     }

        // }
        // transition={{
        //     duration: 1.7
        // }}
        />
    );
};

export default KeyFrame;