import React from "react";
import Pekings from "./img/pp 1.svg";
import facebook from "./img/facebook.png";
import instagram from "./img/instagram.png";
// import inst from "./img/in.png";
import linkedin from "./img/linkedin.png";
import x from "./img/x.png";

import p from "./img/prints.png";
import t from "./img/t.png";
import y from "./img/youTube.png";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";
 
const Footer = () => {
  return (
    <div>
    <Helmet>
                <meta charSet="utf-8" />
                <title> </title>
                <meta name="description" content="" />
                <meta name="keywords" content=" " />
            </Helmet>
      <div onContextMenu={(e) => e.preventDefault()} className="mt-3 bg-[#ffffff] justify-between  lg:px-11  py-10 flex flex-col lg:flex-row  items-center w-full  shadow-lg lg:rounded-tl-[126px] lg:rounded-tr-[126px] [box-shadow:0px_-4px_10px_6px_rgba(42,_182,_197,_0.1)]  rounded-br-none  rounded-bl-none select-none">
        <div className="flex flex-col items-center justify-between px-6 space-y-7 lg:items-start lg:px-10 lg:space-y-3">
          <img draggable="false" onContextMenu={(e) => e.preventDefault()} className=" lg:w-46 lg:h-14"  src={Pekings} alt="Pekings Logo" />
          <p className="max-w-sm text-sm text-gray-600 lg:px-1">
          We are a leading institution committed to empowering individuals with visual impairments through specialized education, cutting-edge technology, and comprehensive support services. Our dedicated team works tirelessly to foster independence and unlock each student's potential. Join us in our mission to make a difference in the lives of those we serve.
          </p>
          <h5 className="text-xl text-[#2AB6C5]">Get connected with us</h5>
          <ul className="flex space-x-4 lg:space-x-10">
            <li>
            <Link   target="_blank" to="https://www.facebook.com/profile.php?id=61554202904882&sk=about_contact_and_basic_info">  <img draggable="false" onContextMenu={(e) => e.preventDefault()} className="w-6 h-6" src={facebook} alt="Facebook" /> </Link>

             
            </li>
            <li>
             
              <Link   target="_blank" to="https://www.instagram.com/_perkins_campus/"> <img draggable="false" onContextMenu={(e) => e.preventDefault()} className="w-6 h-6" src={instagram} alt="Instagram" />  </Link>
            </li>
            <li>
            <Link   target="_blank" to="https://www.linkedin.com/in/perkins-campus-a38312290/"> <img draggable="false" onContextMenu={(e) => e.preventDefault()} className="w-6 h-6" src={linkedin} alt="LinkedIn" />  </Link>

             
            </li>
            <li>
            <Link   target="_blank" to="https://x.com/campus59812"> <img draggable="false" onContextMenu={(e) => e.preventDefault()} className="w-6 h-6" src={x} alt="X" /> </Link>
            </li>

            <li>
            <Link   target="_blank" to="https://in.pinterest.com/perkinscampus"> <img draggable="false" onContextMenu={(e) => e.preventDefault()} className="w-6 h-6" src={p} alt="X" /> </Link>
            </li>

            <li>
            <Link   target="_blank" to="https://www.tumblr.com/blog/perkins33  "> <img draggable="false" onContextMenu={(e) => e.preventDefault()} className="w-6 h-6" src={t} alt="X" /> </Link>
            </li>

            <li>
            <Link   target="_blank" to="https://www.youtube.com/channel/UCUaX2VCv5p3_akw1NVR3Tgw"> <img draggable="false" onContextMenu={(e) => e.preventDefault()} className="w-6 h-6" src={y} alt="X" /> </Link>
            </li>
          </ul>
        </div>

        <div className="relative flex flex-col items-center justify-around px-6 mt-3 space-y-6 md:mt-0 lg:px-0 lg:space-y-10">
          <h5 className="text-xl text-left text-[#2AB6C5] font-Poppins  not-italic font-semibold text-[10px] leading-[30px]">
            Quick Links
          </h5>
          <ul className="flex flex-col relative   right-5  items-start space-y-2 w-[70px] text-left lg:space-y-3">
            <li className="text-sm text-gray-600 font-Poppins text-[17px] font-light leading-[24px]  ">
              <Link to="/">Home</Link>
            </li>
            <li className="text-sm text-gray-600 font-Poppins text-[17px] font-light leading-[24px] ">
              <Link to="/about">About Us</Link>
            </li>
            <li className="text-sm text-gray-600 font-Poppins text-[17px] font-light leading-[24px] ">
              <Link to="/courses">Courses</Link>
            </li>
            <li className="text-sm text-gray-600 font-Poppins text-[17px] font-light leading-[24px] ">
              <Link to="/career">Career</Link>
            </li>
            {/* <li className="text-sm text-gray-600 font-Poppins text-[17px] font-light leading-[24px] ">
              <Link to="/workshops">Workshops</Link>
            </li> */}
            <li className="text-sm text-gray-600 font-Poppins text-[17px] font-light leading-[24px] ">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="text-sm text-gray-600 font-Poppins text-[17px] font-light leading-[24px] ">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col     py-2 justify-between px-6 space-y-2 lg:items-start lg:px-10 lg:h-[300px] ">
         <div className="space-y-2 ">
          <h5 className="text-xl mt-1 text-[#2AB6C5] font-Poppins  not-italic font-semibold  leading-[30px]">
            Office Address
          </h5> 
         
          <p className=" select-text max-w-sm text-sm text-gray-600 font-Poppins text-[20px] font-light leading-[24px] ">
            No: 389. Joe Daniel Street, Near Paalpannai, Nagercoil, Kanyakumari
            District. Tamil Nadu - 629 003
          </p>
          </div>
          <div className="space-y-2">
          <h5 className="text-xl text-[#2AB6C5] font-Poppins  not-italic font-semibold">
            Let's Talk
          </h5>
          <p className="text-sm text-gray-600 select-text">
            <span className="select-none"> Office: </span>  +91 75581 08333
          </p>
          <p className="text-sm text-gray-600 select-text">
          <span className="select-none"> Email: </span> perkinscampus@gmail.com
          </p>
          <p className="text-sm text-gray-600 select-text ">
          <span className="select-none"> Email: </span>  info@perkinscampus.com
          </p>
          
        </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-12 bg-[#2AB6C5]">
        <span className="text-sm text-white">
          2024 © perkinscampus.com. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
