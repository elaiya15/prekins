import React from 'react'

import node from './img/node.png'
import paython from './img/paython.png'
import { Link  } from "react-router-dom";
import {Helmet} from "react-helmet";

const BackEnd = () => {
    const courses = [
        {
          id: 1,
          title: 'Python (django)',
          description: 'Ready to kickstart your career with Python Django? Enroll in our courses at Perkins Campus and take the first step towards a successful career in tech! ',
          image: paython, 
          link:"Python"
        },
        {
          id: 2,
          title: 'Node.js',
          description: ' Ready to kickstart your career with Node.js? Enroll in our courses at Perkins Campus and take the first step towards a successful career in tech! ',
          image: node, 
           link:"node"
        },
       
       
      ];
    
    
      return (
<>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Backend development courses Nagercoil | Perkins Campus
                </title>
                <meta name="description" content="Enhance your programming skills with our Learn Backend Development Courses at Perkins Campus. Dive into server-side languages, databases, and APIs to create robust, scalable web applications!" />
                <meta name="keywords" content=" learn backend development Courses in Nagercoil - backend development course, backend course Nagercoil, backend development, python backend developer course, node js backend developer, front and back end developer, python django course, python backend development, python and django course" />
            </Helmet>
        <div   onContextMenu={(e) => e.preventDefault()}  draggable="false" className=" select-none flex flex-col w-full py-10 mt-0 bg-[#ffffff]">
        
           <div className="relative flex flex-col px-2 md:px-[15px] lg:px-[87px] bg-[#ffffff] ">
            <div className="flex relative flex-col justify-center items-center mt-0 px-6 w-full py-10 bg-[#ffffff]">
            <h2 className="text-center w-full max-w-[565px] text-[40px] font-Poppins not-italic font-semibold  text-gray-800 ">
             Backend
            <span className="px-3 text-[#2AB6C5]  font-Poppins text-[40px] font-bold leading-[81px] text-left"> Development</span>
          </h2>
              <p className="px-0 md:px-[15px] lg:px-[87px] py-5 w-full max-w-5xl text-[17px] font-Poppins not-italic font-normal text-[#848484] text-center">
              Excel in backend development with our course, where you'll learn to build scalable server-side applications and manage databases effectively.
Discover our Backend Development course, focusing on building robust server-side applications. Master database management, server scripting, and API integration to create efficient and scalable web solutions.
              </p>
            </div>
           
            <div className="grid grid-cols-1 gap-8 px-3 mt-10 md:grid-cols-2 md:px-0 lg:grid-cols-3 lg:py-5 ">
                {courses.map((item, index) => (
                  <Link to={item.link} key={index} className="flex flex-col items-center p-4 border-[1px] border-[solid] border-[#2AB6C5] rounded-[14px] hover:border-[#2AB6C5] hover:shadow-xl hover:cursor-pointer shadow-lg">
                    <img className="flex w-16 h-16 mb-4 lg: " src={item.image} alt={item.title} />
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                    <p className="mt-2 font-Poppins not-italic  font-normal text-[16px] leading-[24px] text-[#848484] text-justify">{item.description}</p>
                  </Link>
                ))}
              </div>
          </div>
        </div>
        </>
        );
}

export default BackEnd
