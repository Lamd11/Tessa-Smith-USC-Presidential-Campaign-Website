import React from 'react';

const About: React.FC = () => {
    return (
        <div className="relative flex flex-col items-center bg-white-custom px-4 py-12 lg:px-24">
            {/* Top Section */}
            <div className="relative flex flex-col items-center">
                <div className="relative text-center">
                    <h1 className="text-6xl font-bold leading-tight text-dark-pink-custom lg:text-8xl">
                        I REALLY LOVE TO TALK WITH PEOPLE
                    </h1>
                    <p className="font-handwriting text-black mt-4 text-xl">Tessa Hope</p>
                </div>
                <div className="mt-8 sm:mr-0 lg:mt-0">
                    <img
                        src="/images/tessa_about.JPG" // Reference directly from public
                        alt="Tessa Smith Sitting"
                        className="max-w-full rounded-lg shadow-lg lg:w-96"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
