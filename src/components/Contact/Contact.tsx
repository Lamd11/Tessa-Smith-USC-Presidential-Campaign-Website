import React from 'react';
import Mail from './Mail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons

const Contact: React.FC = () => {
  return (
    <div className="my-20 flex w-full flex-col items-center bg-white-custom align-middle sm:my-24 sm:flex-row">

      {/* Main Content */}
      <div className="my-auto flex h-full w-full flex-col sm:flex-row">
        {/* Email Section */}
        <div className="left-auto mx-auto my-auto flex h-full w-full flex-col justify-center">
          <div className="mx-auto space-y-4 text-left">
            <h1 className="text-6 justify-center text-5xl font-bold text-black-custom">
              Have questions?<br />I'd loved to chat!
            </h1>
            <h3 className="text-m md:text-1xl lg:text-1xl font-semibold sm:text-lg">
              All your inquiries answered <FontAwesomeIcon icon={faHeart} color="red" />
            </h3>
          </div>
          <div className="mt-12 flex justify-center">
            <Mail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
