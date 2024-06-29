"use client";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

// Add a text prop to the component
const Dropdown = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { text: "ड्यासबोर्ड", href: "#" },
    { text: "सेटिङ्हरू", href: "#" },
    { text: "आम्दानी", href: "#" },
    { text: "साइन आउट", href: "#" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        id="dropdownButton"
        onClick={toggleDropdown}
        className="md:flex justify-center items-center p-4 border-r border-solid border-blue-800 border-opacity-30 hidden"
      >
        {text}
        <div className="ml-2 md:block hidden">
          <FaAngleDown />
        </div>
      </div>

      {isOpen && (
        <div
          id="dropdownMenu"
          className="absolute z-10 -mt bg-red-600 divide-y divide-gray-100 shadow w-44"
        >
          <ul className="py-2 text-sm text-white">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block px-4 py-2 hover:bg-white hover:text-black"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
