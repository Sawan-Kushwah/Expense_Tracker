import React from 'react'

const SubmitButton = ({ label, className, type = "submit" }) => {

    return (
        <button
            type={type}
            className={`w-full px-4 py-2 rounded-lg ${className}  text-white font-bold  transition-all`}
        >
            {label}
        </button>
    )
}

export default SubmitButton