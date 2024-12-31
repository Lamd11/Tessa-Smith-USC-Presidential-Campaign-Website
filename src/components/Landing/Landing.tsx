import React from 'react';
import Button from '@mui/material/Button'
import { motion } from 'framer-motion';

interface LandingProps {
  title: string;
  description: string;
  image: string;
}


const Landing: React.FC<LandingProps> = ({ title, description, image }) => {
  return (

    <div className="text-white relative flex h-screen w-full items-center justify-center overflow-hidden bg-off-white text-center">\

      {/* This is the landing image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="h-2/3 w-2/3 rounded-md bg-cover bg-center shadow-lg"
          style={{ backgroundImage: `url('${image}')` }}
        >
        </div>
      </div>

      {/* Title. Text above the landing image */}
      <motion.h1
        className="absolute left-10 top-28 text-4xl font-extrabold text-off-white md:text-6xl"
        style={{
          backgroundColor: '#141619', // Black box
          padding: '10px',
          borderRadius: '5px',
        }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {title}
      </motion.h1>

      <motion.h2
        className="absolute bottom-28 right-10 text-3xl font-bold text-off-white md:text-5xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{
          backgroundColor: '#141619', // Black box
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        {description} <br /> 2025-2026
      </motion.h2>

      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          whileHover={{
            scale: 1.1,
            backgroundColor: "#0A21C0", // Navy Blue
            boxShadow: "0px 0px 20px 5px #0A21C0", // Blue glow
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-md"
        >
          <Button
            variant="contained"
            size="large"
            style={{
              backgroundColor: "#0A21C0", // Blue-custom
              color: "#F0F1FA", // Off-white
              padding: "12px 36px",
              fontWeight: "bold",
              fontSize: "18px",
              borderRadius: "30px",
            }}
          >
            VOTE NOW
          </Button>
        </motion.div>
      </motion.div>




    </div>
  );
};

export default Landing;
