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
        <div className="left-auto mx-auto my-auto flex h-1/2 w-full flex-col justify-center">
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
        <div className="left-auto mx-auto my-auto flex h-1/2 w-full flex-col justify-center">
          <div className="mx-auto w-3/4 space-y-4">
            <h1 className="text-center text-xl font-bold text-black-custom sm:text-2xl md:text-3xl lg:text-5xl">
              Socials
            </h1>
            <ul className="mx-auto flex w-full flex-col justify-center space-y-4">
              {[
                {
                  name: 'Instagram',
                  icon: faInstagram,
                  url: 'https://www.instagram.com/councillor_tessasmith/',
                  bgColor: 'bg-pink-custom',
                  hoverColor: 'hover:bg-light-pink-custom',
                },
                {
                  name: 'Facebook',
                  icon: faFacebook,
                  url: 'https://www.facebook.com/profile.php?id=100056419703516',
                  bgColor: 'bg-blue-custom',
                  hoverColor: 'hover:bg-light-blue-custom',
                },
                {
                  name: 'LinkedIn',
                  icon: faLinkedin,
                  url: 'https://www.linkedin.com/in/example',
                  bgColor: 'bg-dark-blue-custom',
                  hoverColor: 'hover:bg-light-blue-custom',
                },
                {
                  name: 'Linktree',
                  icon: faLink,
                  url: 'https://linktr.ee/vote_tessasmith',
                  bgColor: 'bg-green-custom',
                  hoverColor: 'hover:bg-light-green-custom',
                },
              ].map((social, index) => (
                <motion.li
                  onClick={() => {
                    window.open(`${social.url}`)
                  }}
                  key={social.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 * index, type: 'spring', stiffness: 50 }}
                  className={`flex items-center space-x-4 w-full rounded-lg p-4 shadow-md ${social.bgColor} ${social.hoverColor} hover:shadow-lg`}
                >
                  <div className='text-white flex items-center space-x-4'>
                    <FontAwesomeIcon className="w-2/12 text-lg sm:text-xl md:text-2xl lg:text-3xl" icon={social.icon} />
                    <span className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">{social.name}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
