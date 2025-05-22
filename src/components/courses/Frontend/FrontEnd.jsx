import React from 'react'

import Html from './img/Html.png'
import react from './img/react.png'
import wordpress from './img/wordpress.png'
import { Link  } from "react-router-dom";
import {Helmet} from "react-helmet";

const FrontEnd = () => {
    const courses = [
        {
          id: 1,
          title: 'HTML,CSS,Bootstrap,Javascript',
          description: 'Ready to kickstart your career with HTML? Enroll in our courses at Perkins Campus and take the first step towards a successful career in tech!',
          image: Html, 
          link:"/courses/list/frontend/html"
        },
        {
          id: 2,
          title: 'React. js',
          description: 'Ready to kickstart your career with REACT? Enroll in our courses at Perkins Campus and take the first step towards a successful career in tech!',
          image: react, 
           link:"/courses/list/frontend/react"
        },
        {
          id: 3,
          title: 'Wordpress ',
          description: 'Ready to kickstart your career with WORDPRESS? Enroll in our courses at Perkins Campus and take the first step towards a successful career in tech! ',
          image: wordpress, 
          link:"/courses/list/frontend/wordpress"
    
        },
       
      ];
    
    
      return (
        <div className="flex flex-col w-full py-10 mt-0 select-none"  onContextMenu={(e) => e.preventDefault()}  draggable="false">
        <Helmet>
                <meta charSet="utf-8" />
                <title> Front End Development Courses Nagercoil | Perkins Campus</title>
                <meta name="description" content="Unlock your web development potential with our Learn Frontend Courses at Perkins Campus, Nagercoil, India. Master HTML, CSS, and JavaScript to build stunning, responsive websites from scratch!" />
                <meta name="keywords" content=" 
Learn frontend development Courses in Nagercoil - front end development course, learn front end development in Nagercoil, html css javascript course
, html css course, best front end development course, react front end, web development front end, Perkins Campus, Nagercoil" />
            </Helmet>
          <div className="relative flex flex-col px-2 md:px-[15px] lg:px-[87px] bg-[#ffffff] ">
            <div className="flex relative flex-col justify-center items-center mt-0 px-6 w-full py-10 bg-[#ffffff]">
            <h2 className="text-center w-full max-w-[565px] text-[40px] font-Poppins not-italic font-semibold  text-gray-800 ">
        Frontend
            <span className="px-3 text-[#2AB6C5]  font-Poppins text-[40px] font-bold leading-[81px] text-left"> Development</span>
          </h2>
              <p className="px-0 md:px-[15px] lg:px-[87px] py-5 w-full max-w-5xl text-[17px] font-Poppins not-italic font-normal text-[#848484] text-center">
              Advance your career with our Front-End Development course. Learn to build responsive, visually stunning websites, and create seamless user experiences.
Explore our Front-End Development course and delve into creating responsive, visually captivating websites. Gain expertise in crafting user-centric interfaces and optimizing web performance for an exceptional digital presence.

              </p>
            </div>
           
            <div className="grid grid-cols-1 gap-8 px-3 mt-10 md:px-0 md:grid-cols-2 lg:grid-cols-3 lg:py-5 ">
                {courses.map((item, index) => (
                  <Link to={item.link} key={index} className="flex flex-col items-center p-4 border-[1px] border-[solid] border-[#2AB6C5] rounded-[14px] hover:border-[#2AB6C5] hover:shadow-xl hover:cursor-pointer shadow-lg">
                    <img className="flex w-16 h-16 mb-4 lg: " src={item.image} alt={item.title} />
                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                    <p className="mt-2 font-Poppins not-italic  font-normal text-[16px] leading-[24px] text-[#848484] text-center">{item.description}</p>
                  </Link>
                ))}
              </div>
          </div>
        </div>
        );
}

export default FrontEnd
