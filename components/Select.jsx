import React, { forwardRef, useId } from 'react';

const Select = ({ label, className = '', options = [], ...props }, ref) => {
    const id = useId();
    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className="inline-block mb-1 text-gray-200 pr-5">
                    {label}
                </label>
            )}
            <select
                className={`w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${className}`}
                ref={ref}
                id={id}
                {...props}
                defaultValue={""}
            >
                <option value="" disabled>Select</option>
                {options.map(item => (
                    <option key={item} value={item} className="bg-gray-900 text-white">
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default forwardRef(Select);
