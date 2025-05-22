/* eslint-disable no-unused-vars */
import React from 'react'

import Html from './img/Html.png'
import Designs from './img/Design.png'
import UX from './img/UX.png'
import Visual from './img/Visual.png'
import { Link  } from "react-router-dom";
import {Helmet} from "react-helmet";

const Design = () => {
    const courses = [
        {
          id: 1,
          title: 'UI Designing',
          description: 'Unlock your creativity and shape the future of digital experiences! Join our UI Design course at Perkins Campus and embark on a journey of innovation and design mastery. Let’s turn your passion for design into a rewarding career. ',
          image: Html, 
          link:"/courses/list/design/ui"
        },
        {
          id: 2,
          title: 'Visual & UI Designing',
          description: ' Are you ready to unlock your creativity and dive into the exciting world of visual and user interface (UI) design? Our comprehensive course is designed to provide you with the skills and knowledge needed to excel in both disciplines. ',
          image: Visual, 
           link:"/courses/list/design/visual_ui"
        },
        {
          id: 3,
          title: 'UX/UI Designing ',
          description: 'Discover the art of crafting seamless digital experiences with our UX/UI Designing course.',

          image: UX, 
          link:"/courses/list/design/ui_ux_design"
    
        },
        {
          id: 4,
          title: 'Visual & UX/UI Designing ',
          description: ' Our Visual UX/UI Designing courses offer a comprehensive exploration of design principles, tools, and techniques to create visually stunning and user-friendly digital experiences. ',
          image: Designs, 
          link:"/courses/list/design/visual_ui_ux_design"
    
        },
        
       
      ];
    
    
      return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>UI/ UX designing Courses Nagercoil | Perkins Campus
                </title>
                <meta name="description" content="    Refine your design skills with our UI/UX Designing Courses at Perkins Campus. Learn to create intuitive, user-centered interfaces that elevate user experiences and meet industry demands." />
                <meta name="keywords" content=" learn UI/UX Designing Courses in Nagercoil - ui and ux designing courses, UX designing, Ui Designing, Visual UI designing, Visual UX and UI Designing" />
            </Helmet>
        <div className="flex flex-col w-full py-10 mt-0 select-none">
          <div className="relative flex flex-col px-2 md:px-[15px] lg:px-[87px] bg-[#ffffff] ">
            <div className="flex relative flex-col justify-center items-center mt-0 px-6 w-full py-10 bg-[#ffffff]">
            <h2 className="text-center w-full max-w-[565px] text-[40px] font-Poppins not-italic font-semibold  text-gray-800 ">
            UX/UI 
            <span className="px-3 text-[#2AB6C5]  font-Poppins text-[40px] font-bold leading-[81px] text-left"> Designing</span>
          </h2>
              <p className="px-0 md:px-[15px] lg:px-[87px] py-5 w-full max-w-5xl text-[17px] font-Poppins not-italic font-normal text-[#848484] text-center">
              Elevate your skills with our UI/UX Designing course. Learn to create intuitive, user-friendly interfaces and compelling user experiences that enhance engagement and satisfaction
              </p>
            </div>
           
            <div className="grid grid-cols-1 gap-8 px-3 mt-10 md:px-0 md:grid-cols-2 lg:grid-cols-3 lg:py-5 ">
                {courses.map((item, index) => (
                  <Link to={item.link} key={index} className="flex flex-col relative items-center   p-4 border-[1px] border-[solid] border-[#2AB6C5] rounded-[14px] hover:border-[#2AB6C5] hover:shadow-xl hover:cursor-pointer shadow-lg">
                    <img draggable="false" className="flex w-16 h-16 mb-4 lg: " src={item.image} alt={item.title} />
                    <h3 className="w-[full] h-auto text-xl font-semibold text-gray-800 text-center [word-wrap:break-word] ">{item.title}</h3>
                    <p className="mt-2 font-Poppins not-italic  font-normal text-[16px] leading-[24px] text-[#848484] text-center">{item.description}</p>
                  </Link>
                ))}
              </div>
          </div>
        </div>
        </>
        );
}

export default Design
