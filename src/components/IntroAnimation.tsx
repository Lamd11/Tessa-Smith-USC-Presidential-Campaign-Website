import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const IntroAnimation = () => {
    return (
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
            <motion.div
                className="absolute left-0 top-0 z-20 h-full w-full overflow-hidden bg-light-blue-custom"
                initial={{ y: 0 }}
                animate={{ y: '-100%' }}
                transition={{ duration: 0.5, delay: 1.5 }}
            >
            </motion.div>
            <motion.div
                className="absolute left-0 top-0 z-10 h-full w-full overflow-hidden bg-white-custom"
                initial={{  y: 0 }}
                animate={{  y: '-100%' }}
                transition={{ duration: 0.3, delay: 4.5 }}
            >
            </motion.div>

            <motion.div
                className="absolute z-30"
                initial={{
                    left: '5%',    // Start near the left edge
                    bottom: '5%',  // Start near the bottom edge
                    scale: 1.5,      // Larger size initially
                    originX: 0,
                    originY: 0,
                }}
                animate={{
                    bottom: ['5%', '5%', '40%', '40%', '50%'], // Move upward (70% of the parent container's height)
                    scale: [1.5, 1.5, 1, 1, 1],      // Shrink to normal size
                }}
                transition={{
                    times: [0, 0.2, 0.4, 0.42],
                    duration: 3.5,   // Animation duration
                    delay: 0,      // Start after 1 second
                    ease: [0.43, 0.13, 0.23, 0.96], // Smooth easing
                }}
            >
                {/* First line of text */}
                <div className="absolute h-[3rem] overflow-hidden md:h-[8rem]">
                    <motion.div
                        initial={{
                            y: '100%',
                        }}
                        animate={{
                            y: ['100%', '0%', '0%', '-100%']
                        }}
                        transition={{
                            times: [0, 0.1, 0.8, 0.9],
                            delay: 0,
                            duration: 3.0,
                            ease: [0.43, 0.13, 0.23, 0.96], // Smooth easing
                        }}
                    >
                        <h1 className="text-5xl font-extrabold text-black-custom md:text-9xl">
                            We think
                        </h1>
                    </motion.div>
                </div>

                <div className="relative h-[3rem] overflow-hidden md:h-[8rem]">
                    <motion.div
                        initial={{
                            y: '100%',
                        }}
                        animate={{
                            y: ['100%', '0%', '0%', '-100%']
                        }}
                        transition={{
                            times: [0, 0.1, 0.9, 1.0],
                            delay: 2.7,
                            duration: 2,
                            ease: [0.43, 0.13, 0.23, 0.96], // Smooth easing
                        }}
                    >
                        <h1 className="text-5xl font-extrabold text-black-custom md:text-9xl">
                            Vote <span className='text-red-custom'>TESSA SMITH</span>
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
                            y: ['100%', '0%', '0%', '-110%']
                        }}
                        transition={{
                            times: [0, 0.1, 0.7, 0.9],
                            duration: 2.0,
                            delay: 1.0, // Delayed appearance after the first line
                            ease: [0.43, 0.13, 0.23, 0.96], // Smooth easing
                        }}
                    >
                        <h1 className="text-5xl font-extrabold text-black-custom md:text-9xl">
                            It's time to speak
                        </h1>
                    </motion.div>
                </div>
                <div className="relative h-[3rem] overflow-hidden md:h-[8rem]">
                    <motion.div
                        initial={{
                            y: '100%',
                        }}
                        animate={{
                            y: ['100%', '0%', '0%', '-100%']
                        }}
                        transition={{
                            times: [0, 0.1, 0.7, 0.9],
                            duration: 2.0,
                            delay: 1.0, // Delayed appearance after the first line
                            ease: [0.43, 0.13, 0.23, 0.96], // Smooth easing
                        }}
                    >
                        <h1 className="text-5xl font-extrabold text-black-custom md:text-9xl">
                            Your voice matters
                        </h1>
                    </motion.div>
                </div>
            </motion.div>
        </div>

    );
};
export default IntroAnimation;
