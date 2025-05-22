import React from 'react'
import Duration from './duration.svg'
import Learning from './learning.svg'
// import Line1 from './line1.svg'
import Line2 from './line2.svg'



import html from './img/html.png'
import Word from './img/Word.svg'
const Wordpress = () => {
  return (
    <div className="flex flex-col w-full h-full py-10 mt-0">
    <div className="relative flex flex-col px-5 md:px-[15px] lg:px-[87px] bg-[#ffffff] ">
      <div className="flex relative flex-col justify-center items-center mt-0 px-6 w-full py-10 bg-[#ffffff]">
      <h2 className="text-center w-full max-w-[665px] text-[#2AB6C5]   text-[40px] font-Poppins not-italic font-semibold ">
      Wordpress
    </h2>
        <p className="px-0 md:px-[15px] lg:px-[87px] py-5 w-full max-w-5xl text-[17px] font-Poppins not-italic font-normal text-[#848484] text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin nibh sit amet ex venenatis malesuada. Proin egestas tempor varius. Aenean quis facilisis ante, in tristique quam.
        </p>
        <div className="flex gap-10"> 
        <div className=" flex flex-col items-center justify-center gap-1 w-[150px] h-[100px] border-[1px] rounded  border-blue-400"> 
        <img className="w-[25px] h-[25px]" src={Duration}/>
        <p className="h-[20px] font-Poppins not-italic font-normal text-[13px] leading-[20px] text-center text-[#000000]">Duration of Course</p>
        <p className="font-Poppins not-italic font-bold text-[13px] leading-[20px] text-center text-[#2AB6C5]">03 months</p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-1 w-[150px] h-[100px] border-[1px] rounded  border-blue-400"> 
        <img className="w-[25px] h-[25px]" src={Learning}/>
        <p className="h-[20px] font-Poppins not-italic font-normal text-[13px] leading-[20px] text-center text-[#000000]">Learning Mode</p>
        <p className="font-Poppins not-italic font-bold text-[13px] leading-[20px] text-center text-[#2AB6C5]">Regular/Part-time</p>
        </div>
          </div>
        </div>
<br/>
<br/>
<br/>
        <div className="flex flex-wrap h-auto lg:flex-nowrap head">
<div className="relative flex items-center  md:w-[450px] justify-center md:right-10  child2" > <img className="  h-[auto] w-[auto] md:w-[auto] md:h-[auto]" src={html} /> </div>
<div className=" mt-5 md:mt-0 flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className="w-[full] md:w-[464px] text-start h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> Wordpress <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold md:text-[32px] text-[30px] leading-[30px]  text-[#2C2C2C] text-start  ">course Overview</span></h3>
{/* <p className="">CSS coding is a language which allows you to create great visually appealing web pages about the styles, fonts, colours. CSS describes about how HTML elements are displayed on the screen. CSS saves lots of work. These CSS style sheets are external which can be stored as CSS files </p> */}

<p className="">Lorem ipsum React. js , consectetur adipiscing elit. Fusce nisl nulla, dignissim ac ultrices sit amet, ornare non arcu. Vivamus tincidunt bibendum orci. Quisque sed nunc eget tellus posuere cursus eget non odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisl nulla, dignissim ac ultrices sit amet, ornare non arcu. Vivamus tincidunt bibendum orci. Quisque sed nunc eget tellus posuere cursus eget non Lorem ipsum consectetur adipiscing elit. Fusce nisl nulla, dignissim </p>

<div>
  <button className="  font-Poppins not-italic font-semibold text-[20px] leading-[30px] box-border w-[220px] h-[60px] bg-[#FFFFFF] border-[1px] border-[solid] border-[#2AB6C5] rounded-[10px]  text-[#87C38C]"> Enroll Now</button>
</div>
 </div>
</div>

<div className="flex h-auto ">
<img className=" w-[800px] h-[185px] md:left-32 relative invisible bottom-4 md:visible" src={Line2}/>
</div>

<div className="flex flex-wrap-reverse h-auto lg:flex-nowrap head">
<div className=" mt-5 md:mt-0 flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className=" md:w-[564px] h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2C2C2C]"> What you will learn in <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> Wordpress?</span></h3>
{/* <p className="">CSS coding is a language which allows you to create great visually appealing web pages about the styles, fonts, colours. CSS describes about how HTML elements are displayed on the screen. CSS saves lots of work. These CSS style sheets are external which can be stored as CSS files </p> */}

<p className="">Bootstrap is the opens source front end framework for web development providing a collection of HTML, CSS, Javascript framework for developing responsive and mobile friendly websites. The
primary purpose of adding it to a web project is to apply Bootstrap&#39;s choices of colou , size, font and layout to that project. Bootstrap provides basic style definitions for all HTML elements. Bootstrap provides a collection of syntax for template designs.</p>

<div>
  <button className="  font-Poppins not-italic font-semibold text-[20px] leading-[30px] box-border w-[220px] h-[60px] bg-[#FFFFFF] border-[1px] border-[solid] border-[#2AB6C5] rounded-[10px]  text-[#87C38C]"> Enroll Now</button>
</div>
 </div>
<div className="relative flex items-center  md:w-[450px] justify-center md:left-10  child2" > <img className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={Word} /> </div>
</div>
{/* <div className="flex h-auto ">
<img className=" w-[800px] h-[185px] md:left-32 relative invisible bottom-4 md:visible" src={Line1}/>
</div> */}




        </div>
        </div>
  )
}

export default Wordpress
