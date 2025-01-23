import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-grey-custom text-center">
      <h1 className="text-6xl font-bold text-pink-custom">404</h1>
      <p className="mt-4 text-lg text-grey-custom">The page you are looking for does not exist.</p>
      <button
        onClick={() => navigate('/')}
        className="mt-6 rounded-lg bg-dark-blue-custom px-6 py-3 text-white-custom transition hover:bg-blue-custom"
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
