import { motion } from 'framer-motion';
import React from 'react';

const Box = ({ text }) => {
    return (
        <motion.div
            initial={
                { x: -50, opacity: 0 }
            }
            whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                    duration: 1
                }
            }}
            viewport={{
                once: false
            }}

            className='h-64 w-64 bg-pink-800 rounded text-white flex justify-center items-center m-8'
        >
            {text}
        </motion.div>
    );
};

const ScrollReveal = () => {
    const greetings = "Hi Hello Namaste Salam Greetings Hola Ahoy"
    const greetingsArray = greetings.split(" ")
    return (
        <div>

            {
                greetingsArray.map((greeting, idx) => (
                    <Box key={idx} text={greeting} />
                ))
            }
        </div>

    )
}
export default ScrollReveal