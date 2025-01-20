import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className="w-full bg-black-custom py-8 text-white-custom">
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
