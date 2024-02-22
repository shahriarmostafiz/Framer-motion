import { motion } from "framer-motion";

const Variants = () => {
    const shapeVariants = {
        initial: {
            y: "-100vh",
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                type: "spring",


            }
        },


    }
    return (
        <motion.div
            variants={shapeVariants}
            animate="animate"
            initial="initial"
            className="bg-green-400 h-32 w-32 rounded m-4 border "
        >

        </motion.div>
    );
};

export default Variants;