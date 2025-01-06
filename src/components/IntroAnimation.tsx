import React from 'react';
import { motion } from 'framer-motion';

/*
Intro animation for the landing page using Framer Motion.
*/
const IntroAnimation = () => {
    return (
        <motion.div
            className="absolute left-0 top-0 z-50 h-full w-full overflow-hidden bg-navy-blue-custom"
            initial={{ opacity: 1, y: 0}}
            animate={{ opacity: 1, y: '-100%'}}
            transition={{ duration: 1.5, delay: 4 }}
        >
            <motion.div
                className="absolute"
                initial={{
                    left: '5%',    // Start near the left edge
                    bottom: '5%',  // Start near the bottom edge
                    scale: 1.5,      // Larger size initially
                    originX: 0,
                    originY: 0,
                }}
                animate={{
                    left: '5%',    // Stay aligned to the left
                    bottom: '70%', // Move upward (70% of the parent container's height)
                    scale: 1,      // Shrink to normal size
                }}
                transition={{
                    duration: 0.75,   // Animation duration
                    delay: 0.8,      // Start after 1 second
                    ease: [0.43, 0.13, 0.23, 0.96], // Smooth easing
                }}
            >
                {/* First line of text */}
                <div className="relative h-[3rem] overflow-hidden md:h-[8rem]">
                    <motion.div
                        initial={{
                            y: '100%',
                        }}
                        animate={{
                            y: '0%',
                        }}
                        exit={{
                            y: '-100%', // Move up and disappear
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.43, 0.13, 0.23, 0.96], // Smooth easing
                        }}
                    >
                        <h1 className="text-5xl font-extrabold text-off-white md:text-9xl">
                            We think
                        </h1>
                    </motion.div>
                </div>

                {/* Second line of text */}
                <div className="relative h-[3rem] overflow-hidden md:h-[8rem]">
                    <motion.div
                        initial={{
                            y: '100%',
                        }}
                        animate={{
                            y: '0%',
                        }}
                        exit={{
                            y: '-100%', // Move up and disappear
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 1.3, // Delayed appearance after the first line
                            ease: [0.43, 0.13, 0.23, 0.96], // Smooth easing
                        }}
                    >
                        <h1 className="text-5xl font-extrabold text-off-white md:text-9xl">
                            It's time to speak
                        </h1>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default IntroAnimation;
