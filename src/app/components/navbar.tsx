"use client";
import { useState, useRef, useEffect } from 'react';
import { FaHome, FaBars } from 'react-icons/fa';
import MobileNav from './mobile-nav';
import Dropdown from './dropdown';
import Link from 'next/link';

const NavigationBar: React.FC = () => (
  <div className="flex gap-0 justify-center pr-20 pl-10 max-w-full bg-red-600 w-[1130px] max-md:flex-wrap max-md:px-5">
    <Link href={"/"}>
    <div className="shrink-0 border-r mt-1 border-solid aspect-[1.14] border-blue-800 border-opacity-30 w-[52px] flex justify-center items-center hover:bg-red-800 hover:border-blue-600">
      <FaHome />
    </div>
    </Link>
    <NavItem text="समाचार" />
    <NavItem text="समाज" />
    <Dropdown text="राजनीत" />
    <NavItem text="प्रदेश" />
    <NavItem text="राष्ट्रिय" />
    <Dropdown text="समाचार"/>
    <NavItem text="विचार" />
    <NavItem text="मनोरञ्जन" />
    <NavItem text="खेलकुद" />
    <NavItem text="अन्य" />
  </div>
);

const NavItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="justify-center p-4 border-r border-solid border-blue-800 border-opacity-30">
    {text}
  </div>
);

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navbarRef = useRef(null); // Create a ref for the navbar

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Close navbar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    // Add click event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navbarRef]);

  return (
    <>
      <nav className="flex justify-between items-center px-16 w-full text-lg leading-6 text-white bg-red-600 shadow-sm max-md:px-5 max-md:max-w-full">
        {/* Desktop Navigation Bar */}
        <div className="hidden md:flex justify-center items-center w-full">
          <NavigationBar />
        </div>

        {/* Hamburger Icon for Mobile */}
        <nav className="flex justify-between items-center px-4 w-full text-lg leading-6 text-white bg-red-600 shadow-sm md:hidden">
          {/* Logo on the left */}
          <div className="flex items-center">
            <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-auto" />
            {/* Add your logo image here */}
          </div>

          {/* Hamburger icon on the right */}
          <div className="flex justify-center items-center h-10 md:hidden ml-auto" onClick={toggleSidebar}>
            <FaBars size={30}/>
          </div>
        </nav>

        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <div ref={navbarRef}>
            <MobileNav />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
