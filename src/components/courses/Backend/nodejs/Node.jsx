import React from 'react'
import Duration from './duration.svg'
import Learning from './learning.svg'
import Line1 from './line1.svg'
import Line2 from './line2.svg'
import {Helmet} from "react-helmet";


// import htmlDoc from './img/htmlDoc.png'
// import html from './img/html.png'
// import html5 from './img/Html5.svg'
// import css from './img/css.svg'
// import Bootstrap from './img/Bootstrap.svg'
// import javascript from './img/javascript.svg'
import python from './node.svg'
import django from './node2.svg'
import Node3 from './node3.svg'
const Node = () => {
 
  return ( 
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title> </title>
                <meta name="description" content="" />
                <meta name="keywords" content=" " />
            </Helmet>
    <div className="flex flex-col w-full h-full py-10 mt-0 select-none"  onContextMenu={(e) => e.preventDefault()}  draggable="false">
    <div className="relative flex flex-col px-5 md:px-[15px] gap-10  lg:px-[87px] bg-[#ffffff] ">
      <div className="flex relative flex-col justify-center items-center mt-0 px-6 w-full py-10 bg-[#ffffff]">
      <h2 className="text-center w-full max-w-[665px] text-[#2AB6C5]   text-[40px] font-Poppins not-italic font-semibold ">
      Node. js
    </h2>
        <p className="px-0 md:px-[15px] lg:px-[87px] py-5 w-full max-w-5xl text-[17px] font-Poppins not-italic font-normal text-[#848484] text-center">
        Ready to kickstart your career with Python Django? Enroll in our courses at Perkins Campus and take the first
step towards a successful career in tech!
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

<div className="relative top-0 flex flex-wrap-reverse justify-between h-auto lg:flex-nowrap head">
<div className=" mt-5 md:mt-0 flex flex-col space-y-8  md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className=" md:w-[564px] h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2C2C2C]">  <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> Node. js</span></h3>
{/* <p className="">CSS coding is a language which allows you to create great visually appealing web pages about the styles, fonts, colours. CSS describes about how HTML elements are displayed on the screen. CSS saves lots of work. These CSS style sheets are external which can be stored as CSS files </p> */}

<p className=" w-auto text-wrap  md:w-[650px]"> Node js is an open-source server script which runs on the top of Google’s open-source scripting engine V8. Node js is a light weight and fast application. It is a cross-platform Javascript run-time environment that executes Javascript code outside of a browser. Node.js uses Javascript for creating node applications and its greatest tool for building real time web applications. Developer uses Node.js to create server-side web applications and for data intensive applications. Node.js is used for server-side programming and its deployed for non-blocking, event driven servers such as traditional web sites and back-end API services. When u decide to learn Python Django, it is best to learn Python first. Diango is a python-based web framework and everything. Knowing python before learning Django is advantageous because it will help you know what is going on while developing in Django.</p>

<div>
<Button/>

</div>
 </div>
<div className="relative flex items-center  md:w-[auto] justify-center md:right-10  child2" > <img draggable="false"  className="   h-[auto] w-[auto] md:w-[350px] md:h-[auto]" src={python} /> </div>
</div>
<br/>
<div className="flex flex-wrap justify-around item-center py-5 w-[full] h-[100px] bg-[#E6FEFF] ">
      <p className="w-[auto] h-[auto] font-Poppins not-italic font-semibold text-[20px] leading-[28px] text-[#2AB6C5]" > For Further Enquires<p className="w-[162px] h-[30px] top-[1756px] left-[205px] gap-0 opacity-[0px] font-Poppins text-[17px] font-semibold leading-[30px] text-left text-[#81C592]">+91 75581 08333 </p></p>
      <ContactUs/>

       </div>
      
<div className="flex flex-wrap justify-between h-auto lg:flex-nowrap head">
<div className="relative flex items-center  md:w-[450px] justify-center md:right-10  child2" > <img draggable="false" className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={django} /> </div>

<div className=" mt-5 md:mt-0 flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className=" md:w-[full] h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2C2C2C]"> Why you want to learn  <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> Node.js?</span></h3>
{/* <p className="">CSS coding is a language which allows you to create great visually appealing web pages about the styles, fonts, colours. CSS describes about how HTML elements are displayed on the screen. CSS saves lots of work. These CSS style sheets are external which can be stored as CSS files </p> */}

<p className="">Node.js is an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. Learn Node.js is other web development technologies. Node.js is a good option for anyone to start career in programming language who wants to shine in web development.</p>
 </div>
</div>

      
<div className="flex items-center w-full h-auto px-20">
  <img className="w-full h-auto px-20 md:relative md:visible" src={Line2} alt="Description of the image"/>
</div>

<div className="flex flex-wrap-reverse justify-between h-auto lg:flex-nowrap head">
<div className=" mt-5 md:mt-0 flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className=" md:w-[564px] h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2C2C2C]"> Learn Node.js in <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> Perkins Campus</span></h3>
{/* <p className="">CSS coding is a language which allows you to create great visually appealing web pages about the styles, fonts, colours. CSS describes about how HTML elements are displayed on the screen. CSS saves lots of work. These CSS style sheets are external which can be stored as CSS files </p> */}

<p className="">Learning Node.js at Perkins Campus can provide you with a strong foundation in back-end development, opening up numerous career opportunities. By following the structured approach outlined above, engaging actively with the course content, and leveraging the resources available to you, you can gain valuable skills and experience in Node.js development.</p>

<div>
<Button/>

</div>
 </div>
<div className="relative flex items-center  md:w-[450px] justify-center md:left-10  child2" > <img draggable="false"   className=" select-none  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={Node3} /> </div>
</div>
    </div>
    </div>
    </>
  )
}

export default Node



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