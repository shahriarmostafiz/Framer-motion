import { motion } from 'framer-motion';

const TransitionTypes = () => {

    return (
        <div className='space-y-6'>
            <motion.div
                initial={
                    {
                        x: "-100vh", opacity: 0
                    }
                }
                animate={
                    {
                        x: 0,
                        opacity: 1
                    }
                }
                transition={{
                    duration: 1.5
                }}

            >
                <h1>Animation Transition  Types </h1>
                <h1>Tween Type  </h1>
            </motion.div>
            {/*             
            <motion.div
                initial={
                    {
                        x: "-100vh", opacity: 0
                    }
                }
                animate={
                    {
                        x: 0,
                        opacity: 1
                    }
                }
                transition={{
                    duration: 1.5,
                    type: "spring"
                }}

            >
                <h1>Animation Transition  Types </h1>
                <h1>Tween Type  </h1>
            </motion.div> */}

            <motion.div
                initial={
                    {
                        x: "-100vh", opacity: 0
                    }
                }
                animate={
                    {
                        x: 0,
                        opacity: 1
                    }
                }
                transition={{
                    duration: 1,
                    type: "spring",
                    bounce: .7
                }}

            >
                <h1>Animation Transition  Types </h1>
                <h1>Tween Type  </h1>
            </motion.div>

        </div>
    );
};

export default TransitionTypes;