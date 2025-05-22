// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nave from './img/pp 1.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStatus, setActiveStatus] = useState("");
  const location = useLocation();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const simplifyOutput = (input) => {
      const parts = input.split('/');
      const firstPart = parts[0];
      const formattedPart = firstPart.charAt(0).toUpperCase() + firstPart.slice(1).toLowerCase();
      return formattedPart;
    };
    const path = location.pathname === "/" ? "Home" : simplifyOutput(location.pathname.split('/')[1]);
    setActiveStatus(path);
  }, [location]);

  return (
    <>
      <div className="px-5 md:px-[15px] lg:px-[82px] flex items-center justify-between w-full h-[100px] bg-white select-none" onContextMenu={(e) => e.preventDefault()}  draggable="false"  >
        <img className="h-16" src={Nave} alt="Logo" />
        <button className="md:hidden text-[#2EB6C4] focus:outline-none" onClick={handleMenuToggle}>
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
        <ul className="hidden space-x-5 lg:space-x-16 md:flex">
          {["Home", "About", "Courses", "Career", "Gallery", "Blogs","Contact"].map((item) => (
            <li
              key={item}
              className={`flex flex-col items-center space-y-2 font-semibold parent ${activeStatus === item ? "text-[#2EB6C4]" : "text-[#2C2C2C]"}`}
            >
              <Link onClick={() => setActiveStatus(item)} to={`/${item === "Home" ? "" : item.toLowerCase()}`} className="font-Poppins text-[17px] font-normal leading-[20px] text-left hover:text-[#2EB6C4] ">
                {item.replace(/([A-Z])/g, ' $1').trim()}
              </Link>
              <div className={`${activeStatus === item ? "w-[10px] h-[10px] rounded-[10px] bg-[#2EB6C4] visible" : "invisible"}`}></div>
            </li>
          ))}
        </ul>
      </div>
      {menuOpen && (
        <div className="relative w-full shadow-lg top-5">
          <ul className="relative flex flex-col items-center py-4 space-y-6">
            {["Home", "About", "Courses", "Career", "Gallery", "Blogs","Contact"].map((item) => (
              <li
                key={item}
                className={`flex flex-col hover:text-[#2EB6C4] items-center space-y-2 font-semibold parent ${activeStatus === item ? "text-[#2EB6C4]" : "text-[#000000]"}`}
                onClick={() => setActiveStatus(item)}
              >
                <Link to={`/${item === "Home" ? "" : item.toLowerCase()}`} className="font-semibold">
                  {item.replace(/([A-Z])/g, ' $1').trim()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
