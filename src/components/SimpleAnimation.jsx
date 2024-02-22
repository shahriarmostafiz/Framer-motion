import React from 'react';
import { motion } from "framer-motion"

const SimpleAnimation = () => {
    return (
        <motion.div
            className='bg-red-500 border h-32 w-32 rounded-full'
            initial={
                { opacity: 0, scale: .5 }
            }
            animate={
                { opacity: 1, scale: 1 }
            }
            transition={{
                duration: 1.5
            }}
        />
    );
};

export default SimpleAnimation;