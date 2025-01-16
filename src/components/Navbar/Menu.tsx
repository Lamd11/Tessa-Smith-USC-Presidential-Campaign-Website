import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
interface MenuProps {
    isOpen: boolean
    sections: string[];
}

const Menu: React.FC<MenuProps> = ({ isOpen, sections }) => {

    const handleScroll = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        // The container
        <motion.div
            className="fixed left-0 right-0 z-50 mx-auto mt-4 w-11/12 text-left md:left-auto md:w-[23%]"
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            exit="hidden" // Optional, to specify how it behaves when removed
            variants={{
                hidden: {
                    opacity: 0,
                    y: "50%", // Move down when hidden
                },
                visible: {
                    opacity: 1,
                    y: "0%", // Move up when visible
                },
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
            }}
        >
            {/* Box 1. The one with the links*/}
            <div className="rounded-3xl bg-white-custom p-4 shadow-lg">
                {/* Links being styled*/}
                {sections.map((section, index) => (
                    <motion.div
                        key={index}
                        className="relative flex cursor-pointer justify-between py-4"
                        whileHover="hover"
                        onClick={() => handleScroll(section.toLowerCase())}
                    >
                        {/* Links */}
                        <span className='text-gray-800 relative z-10 ml-8 text-3xl font-medium'>
                            {section}
                        </span>
                        {/* Background Colour */}
                        <motion.div
                            className="absolute inset-0 z-0 rounded-[3rem] bg-lavender-custom"
                            initial={{ opacity: 0, scale: 0.9 }}
                            variants={{
                                hover: {
                                    opacity: 1,
                                    scale: 1
                                }
                            }}
                            transition={{
                                duration: 0.15,
                                ease: "easeInOut",
                            }}
                        />
                        {/* Arrow symbol */}
                        <motion.div
                            className="relative z-10 my-auto mr-8"
                            initial={{ opacity: 0, scale: 0 }}
                            variants={{
                                hover: {
                                    scale: 1,
                                    opacity: 1,
                                }
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                            }}>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                size="xl"
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </div>
            {/* Box 2. Email directory*/}
            <div className="relative mt-4 flex items-start rounded-3xl bg-dark-pink-custom p-4 shadow-lg transition-colors duration-500 hover:bg-red-custom hover:ease-in-out">
                <motion.div
                    className='relative flex h-full w-full cursor-pointer justify-between py-4'
                    whileHover="hover"
                    onClick={() => window.open("mailto:xyz@yourapplicationdomain.com")}
                >
                    <motion.div
                        className="absolute ml-8 text-3xl text-white-custom"
                        initial={{ opacity: 0, x: "-100%" }}
                        variants={{
                            hover: {
                                opacity: 1,
                                x: "-20%",
                            }
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                        }}>
                        <FontAwesomeIcon
                            icon={faArrowRight}
                            size="xs"
                        />
                    </motion.div>
                    <motion.div
                        className="relative ml-8 text-3xl text-white-custom"
                        initial={{ x: "0%" }}
                        variants={{
                            hover: {
                                x: "20%"
                            }
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                        }}>
                        Let's Talk
                    </motion.div>
                    <FontAwesomeIcon 
                        className='my-auto mr-8'
                        icon={faEnvelope}
                        size="xl"
                        color="white"
                    />
                </motion.div>
            </div>

        </motion.div>
    );
}




export default Menu;