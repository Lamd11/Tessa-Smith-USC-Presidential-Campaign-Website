import React from 'react';
import Mail from './Mail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import { motion } from 'framer-motion'; // Import Framer Motion

const Contact: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-white-custom sm:flex-row">
      
      {/* Main Content */}
      <div className="my-auto flex h-full w-full flex-col sm:flex-row">
        {/* Email Section */}
        <div className="left-auto mx-auto my-auto flex h-1/2 w-full flex-col justify-center">
          <div className="mx-auto space-y-4 text-left">
            <h1 className="justify-center text-3xl font-bold text-black-custom lg:text-5xl">
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
      </div>


      {/* Form Section */}
      <div className="left-auto mx-auto my-auto flex h-1/2 w-full flex-col justify-center">
        <div className="mx-auto w-3/4 space-y-6">
          <h1 className="text-center text-3xl font-bold text-black-custom lg:text-5xl">
            Send a Message
          </h1>
          <form className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-black-custom">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-full rounded-md border px-4 py-2 text-black-custom shadow-md"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-black-custom">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-full rounded-md border px-4 py-2 text-black-custom shadow-md"
                required
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-black-custom">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter the subject"
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-full rounded-md border px-4 py-2 text-black-custom shadow-md"
                required
              />
            </div>

            {/* Content Field */}
            <div>
              <label htmlFor="content" className="block text-sm font-semibold text-black-custom">
                Message
              </label>
              <textarea
                id="content"
                name="content"
                placeholder="Enter your message"
                rows={5}
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-full rounded-md border px-4 py-2 text-black-custom shadow-md"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500 w-full rounded-md px-6 py-3 text-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-1"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
