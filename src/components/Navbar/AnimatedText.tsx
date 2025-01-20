import React from 'react';
import { motion } from "framer-motion";

const AnimatedText: React.FC = () => {
    const firstName = "TESSA";
    const lastName = "SMITH";
    return (
        <div className='flex gap-2 text-xl font-semibold text-dark-pink-custom md:text-4xl'>
            <motion.div
                className="inline-block"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.25,
                        }
                    }
                }}
                transition={{
                    staggerChildren: 0.025,
                }}
            >
                {/* First name: TESSA */}
                {firstName.split("").map((l, i) => (
                    <div
                        className="relative inline-block overflow-hidden"
                        key={i}
                    >
                        <motion.span
                            className="inline-block"
                            variants={{
                                hidden: { y: "100%" },
                                visible: { y: "0%" },
                            }}
                            transition={{
                                duration: 0.25,
                                ease: "easeInOut",
                            }}
                        >
                            {l}
                        </motion.span>
                    </div>
                ))}
            </motion.div>
            <motion.div
                className="inline-block"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.25,
                        }
                    }
                }}
                transition={{
                    staggerChildren: 0.025,
                }}
            >
                {/* Last name: SMITH */}
                {lastName.split("").map((l, i) => (
                    <div
                        className="relative inline-block overflow-hidden"
                        key={i}
                    >
                        <motion.span
                            className="inline-block"
                            variants={{
                                hidden: { y: "100%" },
                                visible: { y: "0%" },
                            }}
                            transition={{
                                duration: 0.25,
                                ease: "easeInOut",
                            }}
                        >
                            {l}
                        </motion.span>
                    </div>
                ))}
            </motion.div>
        </div>

    );
}

export default AnimatedText;