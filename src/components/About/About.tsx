import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => setShowMore(!showMore);

    return (
        <div className="relative flex flex-col items-center bg-white-custom px-4 py-12 lg:px-24">
            {/* Decorative Wave */}
            <div className="absolute left-0 top-0 -z-10 w-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="h-full w-full"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#f6f3f0"
                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,138.7C672,128,768,128,864,154.7C960,181,1056,235,1152,250.7C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="max-w-5xl text-center"
            >
                <h2 className="font-bodytext-gray-800 text-6xl lg:text-7xl">
                    About
                </h2>

                {/* Images Row */}
                <div className="mt-8 flex flex-wrap justify-center gap-6">
                    <img
                        src="/images/tessa_booth.jpeg"
                        alt="Community Event"
                        className="h-32 w-32 rounded-lg object-cover shadow-md sm:h-40 sm:w-40 md:h-60 md:w-60 lg:h-80 lg:w-80"
                    />
                    <img
                        src="/images/tessa_smith_library.jpeg"
                        alt="Student Gathering"
                        className="h-32 w-32 rounded-lg object-cover shadow-md sm:h-40 sm:w-40 md:h-60 md:w-60 lg:h-80 lg:w-80"
                    />
                    <img
                        src="/images/tessa_smith_landing.jpg"
                        alt="Leadership Moment"
                        className="h-32 w-32 rounded-lg object-cover shadow-md sm:h-40 sm:w-40 md:h-60 md:w-60 lg:h-80 lg:w-80"
                    />
                </div>

                {/* Main Text */}
                <p className="text-gray-700 mt-8 text-left sm:text-lg">
                    Since I first stepped off a train into London, Ontario in September 2021, I have been learning and growing as part of Western’s community. In my first year, I learned about independence. Like many students, I lived alone for the first time and had to figure out how to make friends in a new situation where I knew nobody.
                </p>

                {/* Toggleable Text */}
                {showMore && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-gray-700 mt-4 text-left sm:text-lg"
                    >
                        <p>
                            In my second year, I learned about community. I began to find my place in the USC clubs system as a member in several clubs; and I worked to create my own - the Western Knit and Crochet Club (WKCC).
                        </p>
                        <p className="mt-4">
                            In my third year, I learned about leadership. At this point I was the Co-President of WKCC and the Vice-President Logistics of the UWO Debate Society, and people began to rely on me to ensure meetings, events, and travel ran smoothly and enjoyably.
                        </p>
                        <p className="mb-4 mt-4">
                            Now, in my fourth year, I am learning about inspiration. Now, as a USC Councillor, the President of the UWO Debate Society, and a candidate for USC President, I have worked to use my platforms to inspire, connect, and uplift students.
                        </p>
                        <span className='text-lg font-semibold text-dark-pink-custom'>
                            I have found my place at Western. I am running to help you find yours.

                        </span>
                    </motion.div>
                )}

                {/* Read More Button */}
                <button
                    onClick={toggleShowMore}
                    className="text-white hover:bg-pink-700 mt-8 rounded-full bg-light-pink-custom px-6 py-2 shadow-md transition-all"
                >
                    {showMore ? 'Read Less' : 'Read More'}
                </button>
            </motion.div>
        </div>
    );
};

export default About;
