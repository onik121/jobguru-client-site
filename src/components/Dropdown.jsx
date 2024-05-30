import React, { useState } from 'react';

const Dropdown = ({ label, items, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (item) => {
        onSelect(item);
        setIsOpen(false); 
    };


    return (
        <div className="relative">
            <button className="inline-flex items-center button h-[47px]" onClick={toggleDropdown}>
                {label}
                <svg className="fill-current h-4 w-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    {isOpen ? <path d="M5 12l5-5 5 5z" /> : <path d="M5 8l5 5 5-5z" /> }
                </svg>
            </button>
            {isOpen && (
                <ul className="absolute bg-white text-black pt-1 drop-down">
                    {items.map((item, index) => {
                        const [firstValue, secondValue] = item.split(' ');
                        return (
                            <li key={index} className="py-2 px-4 cursor-pointer" onClick={() => handleSelect(item)}>
                                ${firstValue} - ${secondValue}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
