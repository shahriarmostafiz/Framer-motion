import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import React, { useEffect } from 'react';

const Counter = () => {
    const count = useMotionValue(0)
    let value = 100;
    const roundedValue = useTransform(count, Math.round)
    useEffect(() => {
        const animation = animate(count, value, { duration: 1.5 })
        return animation.stop
    }, [])
    return (
        <div>
            <motion.h1>{roundedValue}</motion.h1>
        </div>
    );
};

export default Counter;