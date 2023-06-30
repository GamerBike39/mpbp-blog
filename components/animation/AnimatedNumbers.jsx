'use client'

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useInView } from "framer-motion";



const AnimatedNumbers = ({ value, timeAnimation }) => {

    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: timeAnimation });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, motionValue, value]);

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current && latest.toFixed(0) <= value)
                ref.current.textContent = latest.toFixed(0);
        });

        return () => springValue.on('change');
    }, [springValue, value]);



    return (
        <span ref={ref}>
            {value}
        </span>
    )

}

export default AnimatedNumbers;