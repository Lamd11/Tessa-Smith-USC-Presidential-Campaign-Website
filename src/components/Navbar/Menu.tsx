import React from 'react';
import { motion } from 'framer-motion';
import { easeInOut } from 'motion';

interface MenuProps {
    isOpen: boolean
    sections: string[];
}

const Menu: React.FC<MenuProps> = ({ isOpen, sections }) => {
    return (
        <motion.div
            className="fixed left-0 right-0 z-50 rounded-2xl bg-white-custom text-left md:right-auto"
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            variants={{
                hidden: {
                    opacity: 0,
                    y: "50%",
                },
                visible: {
                    opacity: 1,
                    y: "0%",
                }
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut",
            }}
        >
            <div className="p-4">
                {sections.map((section, index) => (
                    <div key={index} className="text-gray-800 ml-4 py-2 text-2xl font-bold">
                        {section}
                    </div>
                ))}
            </div>
            

        </motion.div>
    );
}




export default Menu;