import React from 'react';

const PrimaryButton = ({ children, classes, handler }) => {
    return (
        <button
            onClick={handler}
            className={`hover:text-gray-100 bg-gradient-to-r from-[#fc4a1a] to-[#f7b733] text-white ${classes}`}
        >
            {children}
        </button>
    );
};

export default PrimaryButton;