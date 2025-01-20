import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";

interface LandingProps {
  title: string;
  description: string;
  image: string;
}

const Landing: React.FC<LandingProps> = ({ title, description, image }) => {
  return (
    <div className="text-white flex min-h-screen w-full flex-col justify-center overflow-hidden bg-off-white sm:flex-row">
      <Navbar />

      {/* Content Wrapper */}
      <div className="mt-24 flex w-full flex-col sm:mt-0 sm:flex-row">
        {/* Left box */}
        <div className="flex flex-col justify-center px-6 py-8 text-center sm:w-3/4 sm:px-10 sm:text-left lg:px-16">
          <h3 className="text-gray-400 text-lg sm:text-xl">
            Your Presidential Candidate
          </h3>
          <h1 className="mb-8 mt-2 text-6xl font-bold leading-tight sm:text-8xl lg:text-9xl">
            TESSA SMITH
          </h1>
          <blockquote className="text-gray-300 mt-6 border-l-4 border-pink-custom pl-4 text-left text-2xl sm:text-3xl lg:text-4xl">
            Through my perspective, passion, and experience, I will build a USC that helps all students thrive here at Western.

          </blockquote>
        </div>

        {/* Right box */}
        <div className="my-auto flex h-4/6 items-center justify-center px-8 py-12 sm:w-1/2 sm:px-10 lg:px-16">
          <img
            src="images/tessa_about.JPG"
            alt="Tessa Smith Sitting"
            className="max-w-full rounded-lg shadow-lg sm:w-4/5 md:w-3/4 lg:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
