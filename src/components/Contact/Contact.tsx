import React from 'react';
import Mail from './Mail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons

const Contact: React.FC = () => {
  return (
    <div className="my-20 flex w-full flex-col items-center bg-white-custom align-middle sm:my-24 sm:flex-row">
  <div className="my-auto flex h-full w-full flex-col justify-center space-y-6 sm:flex-row sm:space-y-0">
    <div className="left-auto mx-auto my-auto flex h-full w-full flex-col justify-center">
      <div className="mx-auto space-y-4 text-left">
        <h1 className="justify-center text-6xl font-bold text-black-custom sm:text-7xl">
          Have questions?<br />I'd love to chat!
        </h1>
        <h3 className="text-xl font-semibold sm:text-lg md:text-xl lg:text-2xl">
          All your inquiries answered <FontAwesomeIcon icon={faHeart} color="red" />
        </h3>
      </div>
      <div className="mt-12 flex w-full justify-center sm:mt-8">
        <Mail />
      </div>
    </div>
  </div>
</div>

  );
};

export default Contact;
