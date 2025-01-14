import React from 'react';
import Mail from './Mail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center bg-white-custom sm:flex-row">
      <div className="left-auto mx-auto my-auto flex h-1/2 w-1/2 flex-col justify-center align-middle">
        <div className='mx-auto space-y-4 text-left'>
          <h1 className="justify-center text-xl font-bold text-black-custom sm:text-2xl md:text-3xl lg:text-5xl">
            Have questions?<br />Let's discuss and make <br />things clear.
          </h1>
          <h3 className='text-m md:text-1xl lg:text-1xl font-semibold sm:text-lg'>
            All your inquiries answered <FontAwesomeIcon icon={faHeart} color="red" />
          </h3>
        </div>
        <div className='mx-auto mt-12'>
          <Mail />
        </div>
      </div>
      <div className="h-1/2 w-1/2 items-center justify-center align-middle">

      </div>
    </div>
  );
};

export default Contact;
