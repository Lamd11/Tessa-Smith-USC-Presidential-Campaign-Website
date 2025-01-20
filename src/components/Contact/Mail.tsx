import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Mail: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("tessasmith4usc@gmail.com");
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2500);
    };

    return (
        <div className="relative mt-4 p-4">
            <motion.div
                className="relative flex cursor-pointer items-center justify-between gap-8 rounded-3xl bg-dark-pink-custom p-4 shadow-lg transition-colors duration-500 hover:bg-black-custom hover:ease-in-out"
                onClick={() => {
                    window.open("mailto:tessasmith4usc@gmail.com");
                    handleCopy();
                }}
                whileHover="hover"
            >
                <div>
                <motion.div
                    className="absolute left-8 text-3xl text-white-custom"
                    initial={{ opacity: 0, x: "-100%" }}
                    variants={{
                        hover: {
                            opacity: 1,
                            x: "-20%",
                        },
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                >
                    <FontAwesomeIcon icon={faArrowRight} size="xs" />
                </motion.div>
                <motion.div
                    className="ml-8 text-3xl text-white-custom"
                    initial={{ x: "0%" }}
                    variants={{
                        hover: {
                            x: "20%",
                        },
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                >
                    Let’s Talk
                </motion.div>
                </div>
                <FontAwesomeIcon
                    className="ml-auto mr-4 text-white-custom"
                    icon={faMailBulk}
                    size="xl"
                />
            </motion.div>

            {copied && (
                <motion.div
                    className="absolute -bottom-16 left-1/2 -translate-x-1/2 rounded-lg bg-light-pink-custom px-4 py-2 text-sm font-medium text-black-custom shadow-md"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                >
                    Email copied to clipboard!
                </motion.div>
            )}
        </div>
    );
};

export default Mail;
