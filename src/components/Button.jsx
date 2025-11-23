import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const baseStyles = "px-12 py-4 rounded font-medium transition-all duration-300 cursor-pointer";

    const variants = {
        primary: "bg-red-500 text-white hover:bg-red-600 border border-transparent",
        outline: "bg-transparent text-black border border-gray-400 hover:bg-gray-100",
        secondary: "bg-green-500 text-white hover:bg-green-600 border border-transparent"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
