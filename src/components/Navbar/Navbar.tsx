import React from "react";
import Button from '@mui/material/Button'
import AnimatedText from './AnimatedText';
import Menu from './Menu';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { track } from '@vercel/analytics';


const Navbar = () => {

    const [isOpen, setOpen] = React.useState(false);

    const circleVariants = {
        closed: { rotate: 0 },
        open: { rotate: 90 },
    };

    return (
        <>
            {/* Background Overlay */}
            {isOpen && (
                <div className="md:opacity-0 fixed inset-0 z-20 h-full w-full bg-off-white opacity-100 transition-opacity duration-300"></div>
            )}
            <nav className="h-22 sm:w-[90%] fixed top-0 z-50 mx-auto mt-2 w-full flex-col">
                <div className="mx-auto flex flex-wrap items-center justify-between p-4">
                    <div className="sm:gap-4 flex flex-row items-center gap-2">
                        <img
                            src="/images/logo.png" // Reference directly from public
                            alt="Tessa Smith"
                            className="sm:h-20 sm:w-20 hidden h-8 rounded-full object-cover shadow-md xxxs:block xxs:h-12 xxs:w-12"
                        />
                        <AnimatedText />
                    </div>
                    <div className="space-x-2">
                        {/* VOTE NOW button */}
                        <Button
                            onClick={() => {
                                track('vote_button_clicked'); // Track the event
                                window.open("https://westernusc.simplyvoting.com/", "_blank")
                            }}
                            variant="contained"
                            size="large"
                            sx={{
                                backgroundColor: isOpen ? "#FF4694" : "#FD75AE", // Darker pink when open, light pink otherwise
                                color: "#F9F3F3", // Off-white"
                                padding: {
                                    xs: "6px 16px", // Small screens
                                    sm: "10px 28px", // Medium screens
                                    md: "12px 36px", // Larger screens
                                },
                                fontWeight: "bold",
                                fontSize: {
                                    xs: "14px", // Small screens
                                    sm: "16px", // Medium screens
                                    md: "18px", // Larger screens
                                },
                                borderRadius: "30px",
                                "&:hover": {
                                    backgroundColor: isOpen ? "#FF3968" : "#FF3968", // Slightly lighter pink when hovered
                                },
                                "&:active": {
                                    backgroundColor: isOpen ? "#FF4694" : "#FF4694", // Slightly darker pink when clicked
                                },
                            }}
                        >
                            <h3 className="text-md sm:block xxs:text-lg">VOTE</h3>
                        </Button>
                        {/* pink-custom for menu button */}
                        <Button
                            onClick={() => setOpen(!isOpen)}
                            variant="contained"
                            size="large"
                            sx={{
                                backgroundColor: isOpen ? "#FF4694" : "#FD75AE", // Darker pink when open, light pink otherwise
                                color: "#F9F3F3", // Off-white"
                                padding: {
                                    xs: "6px 16px", // Small screens
                                    sm: "10px 28px", // Medium screens
                                    md: "12px 36px", // Larger screens
                                },
                                fontWeight: "bold",
                                fontSize: {
                                    xs: "14px", // Small screens
                                    sm: "16px", // Medium screens
                                    md: "18px", // Larger screens
                                },
                                borderRadius: "30px",
                                "&:hover": {
                                    backgroundColor: isOpen ? "#FF3968" : "#FF3968", // Slightly lighter pink when hovered
                                },
                                "&:active": {
                                    backgroundColor: isOpen ? "#FF4694" : "#FF4694", // Slightly darker pink when clicked
                                },
                            }}
                        >
                            <h3 className="text-md sm:block mr-2 hidden xxs:text-lg">MENU</h3>
                            <motion.div
                                className="space-x-1 align-middle"
                                animate={isOpen ? "open" : "closed"}
                                variants={circleVariants}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 0.3,
                                }}
                            >
                                <div className="inline-block h-2 w-2 justify-center rounded-full bg-off-white align-middle" />
                                <div className="inline-block h-2 w-2 justify-center rounded-full bg-off-white align-middle" />
                            </motion.div>
                        </Button>
                    </div>

                </div>
                <AnimatePresence>
                    {isOpen && (
                        <Menu
                            isOpen={isOpen}
                            setOpen={setOpen}
                            sections={['home', 'about', 'platform', 'contact']}
                        />
                    )}
                </AnimatePresence>
            </nav>
        </>

    )
}

export default Navbar;
