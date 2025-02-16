import React, { forwardRef, useId } from 'react';

const Input = ({ type = "text", label, className = "", ...props }, ref) => {
    const id = useId();
    return (
        <div className="w-full mb-3">
            {label && (
                <label htmlFor={id} className="inline-block mb-1 pl-1 text-gray-200">
                    {label}
                </label>
            )}
            <input
                type={type}
                id={id}
                className={`w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${className}`}
                {...props}
                ref={ref}
            />
        </div>
    );
};

export default forwardRef(Input);
