import React from 'react';
import Mail from './Mail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLink } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'; // Import Framer Motion

const Contact: React.FC = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center bg-white-custom">
      <h1 className="mx-auto mt-4 text-3xl font-bold text-black-custom sm:text-4xl md:text-5xl lg:text-7xl">
        Contact
      </h1>
      {/* Main Content */}
      <div className="flex h-full w-full flex-col sm:flex-row">
        {/* Email Section */}
        <div className="left-auto mx-auto my-auto flex h-1/2 w-1/2 flex-col justify-center">
          <div className="mx-auto space-y-4 text-left">
            <h1 className="justify-center text-xl font-bold text-black-custom sm:text-2xl md:text-3xl lg:text-5xl">
              Have questions?<br />Let's discuss and make <br />things clear.
            </h1>
            <h3 className="text-m md:text-1xl lg:text-1xl font-semibold sm:text-lg">
              All your inquiries answered <FontAwesomeIcon icon={faHeart} color="red" />
            </h3>
          </div>
          <div className="mt-12 flex justify-center">
            <Mail />
          </div>
        </div>

        {/* Social Media Section */}
        <div className="left-auto mx-auto my-auto flex h-1/2 w-1/2 flex-col justify-center">
          <div className="mx-auto space-y-4">
            <h1 className="justify-center text-xl font-bold text-black-custom sm:text-2xl md:text-3xl lg:text-5xl">
              Socials
            </h1>
            <ul className="space-y-4">
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
