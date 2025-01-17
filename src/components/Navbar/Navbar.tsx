import React from "react";
import Button from '@mui/material/Button'
import AnimatedText from './AnimatedText';
import Menu from './Menu';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

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
                <div className="fixed inset-0 z-20 h-full w-full bg-peach-custom opacity-100 transition-opacity duration-300 md:opacity-0"></div>
            )}
            <nav className="fixed top-0 z-50 mx-auto mt-2 h-20 w-[90%] flex-col">
                <div className="mx-auto flex flex-wrap items-center justify-between p-4">
                    <AnimatedText />
                    <div className="space-x-4">
                        <Button
                            className="hidden sm:block"
                            variant="contained"
                            size="large"
                            sx={{
                                backgroundColor: "#FF5C5C", // Red-custom
                                color: "#FFFFFF", // White-custom
                                padding: {
                                    xs: "8px 20px", // Small screens
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
                                    backgroundColor: "#FF1010", // Darker Red on hover
                                },
                            }}
                        >
                            VOTE
                        </Button>
                        {/* pink-custom for menu button */}
                        <Button
                            onClick={() => setOpen(!isOpen)}
                            variant="contained"
                            size="large"
                            sx={{
                                backgroundColor: isOpen ? "#FF3968" : "#FF85A2", // Darker pink when open, light pink otherwise
                                color: "#F9F3F3", // Off-white"
                                padding: {
                                    xs: "8px 20px", // Small screens
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
                                    backgroundColor: isOpen ? "#FFD1DC" : "#FF3968", // Slightly darker pink when clicked
                                },
                            }}
                        >
                            <h3 className="text-l mr-2 hidden sm:block">MENU</h3>
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
                            sections={['Home', 'About', 'Promises', 'Contact']}
                        />
                    )}
                </AnimatePresence>
            </nav>
        </>

    )
}

export default Navbar;
