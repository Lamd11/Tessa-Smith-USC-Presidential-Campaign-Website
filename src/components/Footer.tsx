import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons

const Footer: React.FC = () => {
    return (
        <div className="w-full bg-black-custom py-8 text-white-custom">

            {/* Social Media Icons */}
            <div className="mb-6 flex items-center justify-center space-x-6">
                <div className="border-gray-600 flex-grow border-t"></div> {/* Left line */}
                <div className="flex space-x-6">
                    {[
                        {
                            name: 'Instagram',
                            icon: faInstagram,
                            url: 'https://www.instagram.com/tessasmith4usc/',
                            hoverColor: 'hover:text-light-pink-custom',
                        },
                        {
                            name: 'LinkedIn',
                            icon: faLinkedin,
                            url: 'https://ca.linkedin.com/in/tessa-smith-4206a8230',
                            hoverColor: 'hover:text-light-blue-custom',
                        },
                        {
                            name: 'Linktree',
                            icon: faLink,
                            url: 'https://linktr.ee/vote_tessasmith',
                            hoverColor: 'hover:text-light-green-custom',
                        },
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-lg ${social.hoverColor}`}
                        >
                            <FontAwesomeIcon icon={social.icon} className="text-4xl" />
                        </a>
                    ))}
                </div>
                <div className="border-gray-600 flex-grow border-t"></div> {/* Right line */}
            </div>
            {/* Footer Content */}
            <div className="mx-auto my-auto flex h-full w-full flex-col items-center justify-center text-center">
                <p className="mb-4 text-sm">
                    Copyright © {new Date().getFullYear()} Tessa Smith. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
