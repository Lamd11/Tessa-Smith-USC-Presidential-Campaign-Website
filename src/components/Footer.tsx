import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
                            url: 'https://www.instagram.com/councillor_tessasmith/',
                            hoverColor: 'hover:text-light-pink-custom',
                        },
                        {
                            name: 'Facebook',
                            icon: faFacebook,
                            url: 'https://www.facebook.com/profile.php?id=100056419703516',
                            hoverColor: 'hover:text-light-blue-custom',
                        },
                        {
                            name: 'LinkedIn',
                            icon: faLinkedin,
                            url: 'https://www.linkedin.com/in/example',
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
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <a
                        href="https://drive.google.com/file/d/1u-xRKcbDsws5N-m7_THfaFs_EzvRw_ak/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 text-sm underline"
                    >
                        Platform Document
                    </a>
                    <a
                        href="https://forms.gle/LM7jCgKC9AnBnHri8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 text-sm underline"
                    >
                        Suggestion Box
                    </a>
                    <a
                        href="https://docs.google.com/document/d/1l49fSnR09mxw1a-d5otiBEN7D9LapKJ_eyFnWB1S9xk/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 text-sm underline"
                    >
                        Human-rights Diversification Motion
                    </a>
                    <a
                        href="https://docs.google.com/document/d/1_MLv6rp_UFbm_cgI5ChUIgYtcVdWfs-j5zMnlEpHiNs/edit?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300 text-sm underline"
                    >
                        Campus and Community Resources
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
