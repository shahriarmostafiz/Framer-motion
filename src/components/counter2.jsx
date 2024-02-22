import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';

const Counter2 = ({ value }) => {
    const count = useMotionValue(0)
    const roundedValue = useTransform(count, Math.round)
    useEffect(() => {
        const animatedValue = animate(count, value, {
            duration: 1.5
        })
    }, [])

    return (
        <motion.div>
            {roundedValue}
        </motion.div>
    );
};

Counter2.propTypes = {
    value: Number
};

export default Counter2;