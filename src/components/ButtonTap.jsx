import { motion } from 'framer-motion';
import React from 'react';

const ButtonTap = () => {
    return (
        <>
            <motion.button
                className='bg-pink-500 rounded-md text-white px-4 py-2 '
                whileTap={{
                    scale: 0.5
                }}
            // whileHover={{
            //     scale: 1.4

            // }}
            >
                Tap me
            </motion.button>

            <motion.button
                className='bg-pink-500 rounded-md text-white px-4 py-2 '
                whileTap={{
                    scale: 0.5,

                }}
                whileHover={{
                    scale: 1.4,
                    transition: {
                        yoyo: Infinity
                    }

                }}

            >
                Tap me again
            </motion.button>

        </>
    );
};

export default ButtonTap;