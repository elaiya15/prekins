import React from 'react'

import Html from './img/module-1.png'
import react from './img/module-2.png'
import wordpress from './img/module-3.png'
import { Link  } from "react-router-dom";
import {Helmet} from "react-helmet";

const DigitalMarketing = () => {
    const courses = [
        {
          id: 1,
          title: 'Fragment 01',
          description: 'Perkins Campus offers a foundational Digital Marketing Module 1 course that covers the basics of key components including Search Engine Optimization (SEO), Search Engine Marketing (SEM), Social Media Optimization (SMO), and Email Marketing. ',
         text:"(Digital Marketing Basic)",
          image: Html, 
          link:"/courses/list/digital/Fragment_1"
        },
        {
          id: 2,
          title: 'Fragment 02',
          description: 'Perkins Campus provides an Advanced Digital Marketing Course in Module 2, offering in-depth instruction on advanced concepts and strategies in digital marketing. Designed to build upon foundational knowledge, this course equips students with the skills needed to excel in the dynamic digital marketing landscape, covering areas such as advanced SEO, SEM, social media marketing, email marketing, content marketing, digital analytics, and strategy development.',
         text:"(Digital Marketing Advanced)",  
          image: react, 
           link:"/courses/list/digital/Fragment_2"
        },
      ];
    
    
      return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Digital Marketing Courses Nagercoil | Perkins Campus
                </title>
                <meta name="description" content="Explore the world of digital strategy with our Digital Marketing Courses at Perkins Campus. Master SEO, social media, and analytics to drive impactful campaigns and grow your online presence effectively." />
                <meta name="keywords" content="Learn Digital Marketing Couses in Nagercoil - digital marketing course, online marketing courses, social media marketing course, social media marketing course online,online marketing courses for beginners, digital media marketing course, email marketing course" />
            </Helmet>
        <div className="flex flex-col w-full py-10 mt-0 select-none" onContextMenu={(e) => e.preventDefault()}  draggable="false">
          <div className="relative flex flex-col px-2 md:px-[15px] lg:px-[87px] bg-[#ffffff] ">
            <div className="flex relative flex-col justify-center items-center mt-0 px-6 w-full py-10 bg-[#ffffff]">
            <h2 className="text-center w-full max-w-[565px] text-[40px] font-Poppins not-italic font-semibold  text-gray-800 ">
            Digital            <span className="px-3 text-[#2AB6C5]  font-Poppins text-[40px] font-bold leading-[81px] text-left"> Marketing
</span>
          </h2>
              <p className="px-0 md:px-[15px] lg:px-[87px] py-5 w-full max-w-5xl text-[17px] font-Poppins not-italic font-normal text-[#848484] text-center">
              Transform your career with our Digital Marketing course. Master SEO, social media marketing, and analytics to enhance your brand's online presence and drive growth.
              </p>
            </div>
              <div className="grid grid-cols-1 gap-8 px-3 mt-10 md:px-0 md:grid-cols-2 lg:grid-cols-3 lg:py-5 ">
                {courses.map((item, index) => (
                  <Link to={item.link} key={index} className="flex flex-col relative items-center   p-4 border-[1px] border-[solid] border-[#2AB6C5] rounded-[14px] hover:border-[#2AB6C5] hover:shadow-xl hover:cursor-pointer shadow-lg">
                    <img className="flex w-16 h-16 mb-4 lg: " src={item.image} alt={item.title} />
                    <h3 className="w-[full] h-auto text-xl font-semibold text-gray-800 text-center [word-wrap:break-word] ">{item.title}</h3>
                    <small className="w-[full] h-auto mt-2 [word-wrap:break-word] not-italic font-normal text-[13px] leading-[18px] text-center text-[#7FC593] ">{item.text}</small>
                    <p className="mt-2 font-Poppins  text-[12px] font-normal leading-[18.5px] text-[#848484] text-center">{item.description}</p>
                  </Link>
                ))}
              </div>
          </div>
        </div>
        </>
        );
}

export default DigitalMarketing
