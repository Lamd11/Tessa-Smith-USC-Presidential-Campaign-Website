import React from 'react';

interface LandingProps {
    title: string;
    description: string;
}


const Landing: React.FC<LandingProps> = ({ title, description}) => {
  return (
    <div className="bg-blue-100 p-4 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mt-2 text-lg">{description}</p>
    </div>
  );
};

export default Landing;
