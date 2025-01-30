import React from "react";
import Button from '@mui/material/Button'
import AnimatedText from './AnimatedText';
import Menu from './Menu';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import ReactGA from "react-ga4";



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
                <div className="fixed inset-0 z-20 h-full w-full bg-off-white opacity-100 transition-opacity duration-300 md:opacity-0"></div>
            )}
            <nav className="h-22 fixed top-0 z-50 mx-auto mt-2 w-full flex-col sm:w-[90%]">
                <div className="mx-auto flex flex-wrap items-center justify-between p-4">
                    <div className="flex flex-row items-center gap-2 sm:gap-4">
                        <img
                            src="/images/logo.png" // Reference directly from public
                            alt="Tessa Smith"
                            className="h-[2rem] w-[2rem] rounded-full object-cover shadow-md sm:h-20 sm:w-20"
                        />
                        <AnimatedText />
                    </div>
                    <div className="space-x-2">
                        {/* VOTE NOW button */}
                        <Button
                            onClick={() => {
                                ReactGA.event({
                                    category: "Button",
                                    action: "Vote button clicked",
                                    label: "Vote Button",
                                });
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
                            <h3 className="text-md sm:block sm:text-lg">VOTE</h3>
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
                            <h3 className="text-md mr-2 hidden sm:block sm:text-lg">MENU</h3>
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
