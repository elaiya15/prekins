import React from 'react'

import Html from './img/Html.png'
import react from './img/react.png'
import node from './img/node.png'
import { Link  } from "react-router-dom";
import {Helmet} from "react-helmet";

const FullStack = () => {
    const courses = [
        {
          id: 1,
          title: 'HTML,CSS, Javascript, Python(django) & MySQL',
          description: 'Ready to kickstart your career with these full stack courses such as HTML, CSS, Javascript, Python Django, MySQL? Enroll in our courses at Perkins Campus and take the first step towards a successful career in tech!',
          image: Html, 
          link:"/courses/list/fullstack/html"
        },
        {
          id: 2,
          title: 'React. js, Python(django) & MySQL',
          description: ' Ready to kickstart your career with Full Stack development Courses? Enroll in our courses at Perkins Campus and take the first step towards a successful career in tech! ',
          image: react, 
           link:"/courses/list/fullstack/rpdm"
        },
        {
          id: 3,
          title: 'React. js, Node. js & MySQL ',
          description: 'Ready to kickstart your career with React Js, Python Django, MySQL or Mongo DB – full stack development package? Enroll in our courses at Perkins Campus and take the first step towards a successful career in tech! ',
          image: node, 
          link:"/courses/list/fullstack/rnm"
    
        },
       
      ];
    
    
      return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <title> Full stack development Courses Nagercoil | Perkins Campus
</title>
                <meta name="description" content=" Master the art of Full Stack Development at Perkins Campus. From frontend aesthetics to backend functionality, gain the skills to build dynamic, end-to-end web applications that meet modern industry standards." />
                <meta name="keywords" content="  
 	
Learn Full stack development Courses in Nagercoil - full stack python, fullstack javascript, python full stack development, django and react, full stack development using python, python full stack courses, node js react, full stack development in python" />
            </Helmet>
        <div className="flex flex-col w-full py-10 mt-0 bg-[#ffffff] select-none"  onContextMenu={(e) => e.preventDefault()}  draggable="false">
        <div className="relative flex flex-col px-2 md:px-[15px] lg:px-[87px] bg-[#ffffff] ">
         <div className="flex relative flex-col justify-center items-center mt-0 px-6 w-full py-10 bg-[#ffffff]">
         <h2 className="text-center w-full max-w-[565px] text-[40px] font-Poppins not-italic font-semibold  text-gray-800 ">
      Full Stack
         <span className="px-3 text-[#2AB6C5]  font-Poppins text-[40px] font-bold leading-[81px] text-left"> Development</span>
       </h2>
           <p className="px-0 md:px-[15px] lg:px-[87px] py-5 w-full max-w-5xl text-[17px] font-Poppins not-italic font-normal text-[#848484] text-center">
           Full stack development courses are to develop the front end and back end of the Website. Full Stack development courses includes front end (HTML, CSS, Javascript) along with frameworks and back end a programming language, APIs, NodeJS) integrating with databases (Oracle, MongoDB, and SQL). The Front end is the UI part of the Application and back end take care of the data management servers.
           </p>
         </div>
           
            <div className="grid grid-cols-1 gap-8 px-3 mt-10 md:px-0 md:grid-cols-2 lg:grid-cols-3 lg:py-5 ">
                {courses.map((item, index) => (
                  <Link to={item.link} key={index} className="flex flex-col relative items-center   p-4 border-[1px] border-[solid] border-[#2AB6C5] rounded-[14px] hover:border-[#2AB6C5] hover:shadow-xl hover:cursor-pointer shadow-lg">
                    <img draggable="false" className="flex w-16 h-16 mb-4 lg: " src={item.image} alt={item.title} />
                    <h3 className="w-[full] h-auto text-xl font-semibold text-gray-800 text-center [word-wrap:break-word] ">{item.title}</h3>
                    <p className="mt-2 font-Poppins not-italic  font-normal text-[16px] leading-[24px] text-[#848484] text-justify">{item.description}</p>
                  </Link>
                ))}
              </div>
          </div>
        </div>
        </>
        );
}

export default FullStack
