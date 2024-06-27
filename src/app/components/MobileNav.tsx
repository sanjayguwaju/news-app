import React from "react";

const MobileNav = () => {
  return (
    <>
      <div className="bg-red-600 w-64 h-screen fixed top-0 left-0 z-50">
        <div className="flex items-center justify-between p-4 bg-red-700">
          <img
            src="https://placehold.co/50x50.png?text=Logo"
            alt="news logo"
            className="h-10 w-10"
          />
          <span className="text-white text-2xl font-bold">newsaone</span>
          <button className="text-white text-xl">
            <img
              src="https://openui.fly.dev/openui/24x24.svg?text=⬅️"
              alt="close menu"
            />
          </button>
        </div>
        <nav className="mt-4">
          <ul className="text-white text-lg">
            <li className="py-2 px-4 hover:bg-red-500 cursor-pointer">
              समाचार
            </li>
            <li className="py-2 px-4 hover:bg-red-500 cursor-pointer">
              राजनीति
            </li>
            <li className="py-2 px-4 hover:bg-red-500 cursor-pointer">समाज</li>
            <li className="py-2 px-4 hover:bg-red-500 cursor-pointer">विचार</li>
            <li className="py-2 px-4 hover:bg-red-500 cursor-pointer">
              अर्थतन्त्र
            </li>
            <li className="py-2 px-4 hover:bg-red-500 cursor-pointer">
              राष्ट्रिय
            </li>
            <li className="py-2 px-4 hover:bg-red-500 cursor-pointer">
              अन्तर्राष्ट्रिय
            </li>
            <li className="py-2 px-4 hover:bg-red-500 cursor-pointer">कृषि</li>
            <li className="py-2 px-4 hover:bg-red-500 cursor-pointer">
              अन्तर्वार्ता
            </li>
            <li className="py-2 px-4 hover:bg-red-500 cursor-pointer">
              शिक्षा
            </li>
            <li className="py-2 px-4 hover:bg-red-500 cursor-pointer">
              स्वास्थ्य
            </li>
            <li className="py-2 px-4 hover:bg-red-500 cursor-pointer">
              विज्ञान प्रविधि
            </li>
            <li className="py-2 px-4 hover:bg-red-500 cursor-pointer">
              खेलकुद
            </li>
            <li className="py-2 px-4 hover:bg-red-500 cursor-pointer">
              मनोरञ्जन
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
