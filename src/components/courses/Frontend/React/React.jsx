import React from 'react'
import Duration from './duration.svg'
import Learning from './learning.svg'
import Line1 from './line1.svg'
import Line2 from './line2.svg'

import {Helmet} from "react-helmet";

import html from './img/html.png'
import ReactImg from './img/react.svg'
import Reactjs from './img/reactjs.svg'
import React2 from './img/react2.svg'

const react = () => {
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>React Js Course | Perkins Campus </title>
                <meta name="description" content=" Elevate your web development skills with the React JS Course at Perkins Campus. Learn to build dynamic, high-performance user interfaces using the latest React techniques and best practices." />
                <meta name="keywords" content=" Learn React JS Course in Nagercoil - react js course, learn react js, react js course, react web development, react js developers, react front end, react app development" />
            </Helmet>
    <div className="flex flex-col w-full h-full py-10 mt-0 select-none"  onContextMenu={(e) => e.preventDefault()}  draggable="false">
    <div className="relative flex flex-col px-5 md:px-[15px] lg:px-[87px] bg-[#ffffff] ">
      <div className="flex relative flex-col justify-center items-center mt-0 px-6 w-full py-10 bg-[#ffffff]">
      <h2 className="text-center w-full max-w-[665px] text-[#2AB6C5]   text-[40px] font-Poppins not-italic font-semibold ">
      React. js
    </h2>
        <p className="px-0 md:px-[15px] lg:px-[87px] py-5 w-full max-w-5xl text-[17px] font-Poppins not-italic font-normal text-[#848484] text-center">
        Ready to kickstart your career with REACT? Enroll in our courses at Perkins Campus and take the first step
towards a successful career in tech!
        </p>
        <div className="flex gap-10"> 
        <div className=" flex flex-col items-center justify-center gap-1 w-[150px] h-[100px] border-[1px] rounded  border-blue-400"> 
        <img draggable="false" className="w-[25px] h-[25px]" src={Duration}/>
        <p className="h-[20px] font-Poppins not-italic font-normal text-[13px] leading-[20px] text-center text-[#000000]">Duration of Course</p>
        <p className="font-Poppins not-italic font-bold text-[13px] leading-[20px] text-center text-[#2AB6C5]">60 Days</p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-1 w-[150px] h-[100px] border-[1px] rounded  border-blue-400"> 
        <img draggable="false" className="w-[25px] h-[25px]" src={Learning}/>
        <p className="h-[20px] font-Poppins not-italic font-normal text-[13px] leading-[20px] text-center text-[#000000]">Learning Mode</p>
        <p className="font-Poppins not-italic font-bold text-[13px] leading-[20px] text-center text-[#2AB6C5]">Regular/Part-time</p>
        </div>
          </div>
        </div>
<br/>
<br/>
<br/>
        <div className="flex flex-wrap justify-between h-auto lg:flex-nowrap head">
<div className="relative flex items-center  md:w-[450px] justify-center md:right-10  child2" > <img draggable="false" className="  h-[auto] w-[auto] md:w-[auto] md:h-[auto]" src={Reactjs} /> </div>
<div className=" mt-5 md:mt-0 flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className="w-[full] md:w-[464px] text-start h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> React.js </h3>
{/* <p className="">CSS coding is a language which allows you to create great visually appealing web pages about the styles, fonts, colours. CSS describes about how HTML elements are displayed on the screen. CSS saves lots of work. These CSS style sheets are external which can be stored as CSS files </p> */}

<p className="">React Js is a framework which can be used to design your Website interface. Reacts provides the hassles free flexible work experience. React js is an open-source platform with an extensive library which simplifies the coding. Most of the developers prefer to use React Js considering its feasibility. React Js lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps. React is a JavaScript library for building user interfaces, particularly single-page applications where efficient updating and rendering of dynamic content is crucial. Developed and maintained by Facebook, React promotes component-based architecture and a declarative programming style.</p>

<div>
<Button/>
</div>
 </div>
</div>

<div className="flex items-center w-full h-auto px-20">
  <img draggable="false" className="w-full h-auto px-20 md:relative md:visible" src={Line2} alt="Description of the image"/>
</div>

<div className="flex flex-wrap-reverse justify-between h-auto lg:flex-nowrap head">
<div className=" mt-5 md:mt-0 flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className=" md:w-[564px] h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2C2C2C]"> Why to learn <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> React. js?</span></h3>
<p className="">Learning React.js offers numerous benefits and opportunities for developers, particularly those interested in building modern web applications.</p>
<h3 className=" md:w-[564px] h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2C2C2C]"> React for Web Apps: </h3>
<p className="">Learning React.js offers numerous benefits and opportunities for developers, particularly those interested in building modern web applications.</p>
 </div>
<div className="relative flex items-center  md:w-[450px] justify-center md:left-10  child2" > <img draggable="false" className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={ReactImg} /> </div>
</div>
<div>
<h3 className=" md:w-[564px] h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2C2C2C]"> Why to learn <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> React for Native Apps:</span></h3>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">React Native: React Native extends the principles of React to mobile app development, allowing developers to use the same codebase and skills to build native apps for iOS and Android. It compiles to native code, offering the performance and look-and-feel of native apps.</p>
</div>
<br/>
      <div className="flex flex-wrap mt-10 justify-around item-center py-5 w-[full] h-[100px] bg-[#E6FEFF] ">
      <p className="w-[auto] h-[auto] font-Poppins not-italic font-semibold text-[20px] leading-[28px] text-[#2AB6C5]" > For Further Enquires<p className="w-[162px] h-[30px] top-[1756px] left-[205px] gap-0 opacity-[0px] font-Poppins text-[17px] font-semibold leading-[30px] text-left text-[#81C592]">+91 75581 08333 </p></p>
      <ContactUs/>
       </div>
       <br/>
       <br/>

       <div className="flex flex-wrap justify-between h-auto py-20 lg:flex-nowrap head">
<div className="relative flex items-center  md:w-[450px] justify-center md:right-10  child2" > <img draggable="false" className="  h-[auto] w-[auto] md:w-[auto] md:h-[auto]" src={React2} /> </div>
<div className=" mt-5 md:mt-0 flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className="w-[full] md:w-[464px] text-start h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#030303]"> Why React JS<span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> for Career?</span> </h3>
{/* <p className="">CSS coding is a language which allows you to create great visually appealing web pages about the styles, fonts, colours. CSS describes about how HTML elements are displayed on the screen. CSS saves lots of work. These CSS style sheets are external which can be stored as CSS files </p> */}

<p className="">Students choose React.js for their career for several compelling reasons. Here are the key factors that make React.js an attractive choice for students aiming to build a successful career in web development React JS is a powerful tool for front-end developers to build UIs as it makes the process of UI building faster, efficient, and effective. While there are a variety of front-end frameworks which are very popular, like Angular and Vue. js, React JS is the perfect framework to get started with.</p>
<p className="">In recent growing tech arena, one of the most evolving technology which gained popularity is React Js. React Js – Javascript library developed by Facebook which has revolutionized the way web application are built and maintained</p>

<div>
<Button/>
</div>
 </div>
</div>


        </div>
        </div>
        </>
  )
}

export default react





import {useNavigate  } from "react-router-dom";


export const Button = () => {

  const navigate = useNavigate();

  const Enroll=()=>{
    navigate("/contact"); }
  
  return (
    <div>
 <button onClick={Enroll}  className="font-Poppins not-italic font-semibold text-[20px] leading-[30px] box-border w-[220px] h-[60px] bg-[#FFFFFF] border-[1px] border-[solid] border-[#2AB6C5] rounded-[10px]  text-[#87C38C] "> Enroll Now</button>

    </div>
  )
}


export const ContactUs = () => {

  const navigate = useNavigate();

  const Enroll=()=>{
    navigate("/contact"); }
  
  return (
    <div>
      <p onClick={Enroll} className="w-[auto] px-2 h-[40px] py-2 hover:cursor-pointer  rounded text-center border-[2px]  border-[solid] bg-[#2AB6C5] border-[#2AB6C5]  font-Poppins not-italic font-bold text-[20px] leading-[20px] text-[#FFFFFF]">Contact Us </p>
 
    </div>
  )
}