import { motion } from 'framer-motion';
import React from 'react';

const Words = () => {
    const intro = "Hi! I am Shahriar I am a MERN Stack Developer"
    const introArray = intro.split(" ")
    return (
        <div className='text-3xl font-bold m-4 text-green-600'>
            {
                introArray.map((word, idx) => <motion.span
                    initial={{
                        opacity: 0

                    }}
                    animate={
                        {
                            opacity: 1,
                            color: "#6bf2b8"
                        }
                    }
                    transition={{
                        duration: .7,
                        delay: idx / 10
                    }}

                    key={idx}>{word} {" "}</motion.span>)
            }
        </div>
    );
};

export default Words;