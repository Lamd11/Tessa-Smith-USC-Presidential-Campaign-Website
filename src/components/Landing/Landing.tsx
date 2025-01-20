import React from "react";
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar'

interface LandingProps {
  title: string;
  description: string;
  image: string;
}


const Landing: React.FC<LandingProps> = ({ title, description, image }) => {


  return (

    <div className="text-white relative flex h-screen w-full justify-center overflow-hidden bg-off-white text-center">
      {/* This is the landing image */}
      <Navbar/>
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
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      {/* Description. Text underneath image */}
      <motion.h2
        className="absolute bottom-28 right-10 text-3xl font-bold text-off-white md:text-5xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5}}
        style={{
          backgroundColor: '#141619', // Black box
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        {description} <br /> 2025-2026
      </motion.h2>
    </div>
  );
};

export default Landing;
