import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-center text-2xl font-bold">Contact Us</h2>
      <form className="mx-auto mt-4 max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium">Name</label>
          <input id="name" type="text" className="w-full border p-2" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium">Email</label>
          <input id="email" type="email" className="w-full border p-2" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium">Message</label>
          <textarea id="message" className="w-full border p-2" placeholder="Your Message" rows={4}></textarea>
        </div>
        <button type="submit" className="rounded bg-blue-500 p-2 text-white">Send</button>
      </form>
    </div>
  );
};

export default Contact;
