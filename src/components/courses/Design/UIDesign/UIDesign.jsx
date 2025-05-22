import React from 'react'
import Duration from './duration.svg'
import Learning from './learning.svg'
import Line1 from './line1.svg'
import Line2 from './line2.svg'
import back from './bg.svg'
import {Helmet} from "react-helmet";


import Img1 from './img1.svg'
import Img2 from './img2.svg'

import Img6 from './img6.svg'
import G1 from './coursemodule/Group1.svg'
import G2 from './coursemodule/Group2.svg'
import G3 from './coursemodule/Group3.svg'
import G4 from './coursemodule/Group4.svg'
/* R-L */
/* <div className="flex h-auto ">
<img draggable="false" className=" w-[800px] h-[185px] md:left-32 relative invisible bottom-4 md:visible" src={Line1}/>
</div> */

/* 
<div className="flex h-auto ">
<img draggable="false" className=" w-[800px] h-[185px] md:left-32 relative invisible bottom-4 md:visible" src={Line2}/>
</div> */
const UIDesign = () => {
  return (
<>
<Helmet>
                <meta charSet="utf-8" />
                <title>UI Design Course | Perkins Campus
                </title>
                <meta name="description" content=" Unleash your creativity with the UI Designing Course at Perkins Campus. Master the art of crafting visually stunning and user-friendly interfaces that captivate and engage users." />
                <meta name="keywords" content="Learn Ui Design Course - ui design course, user interface design course, ui and ux design course, ui & ux design course, courses for ui ux designer" />
            </Helmet>

    
    <div className="relative flex flex-col w-full h-full py-10 mt-10 select-none md:mt-0" onContextMenu={(e) => e.preventDefault()}  draggable="false">
    <img draggable="false" className=" w-full absolute top-1 md:h-[500px]" src={back}/>

   <br/>
    <div className="relative  flex flex-col px-5 md:px-[15px] lg:px-[87px]  ">

      <div className="relative flex flex-col items-center justify-center w-full px-6 py-10 mt-0">
      <h2 className="text-center w-full max-w-[665px] text-[#2AB6C5]   text-[40px] font-Poppins not-italic font-semibold ">
      UI<span className=" ml-2 text-[#2C2C2C]">Design</span>
    </h2>
        <p className="px-0 md:px-[15px] lg:px-[87px] py-5 w-full max-w-5xl text-[17px] font-Poppins not-italic font-normal text-[#848484] text-center">
        Unlock your creativity and shape the future of digital experiences! Join our UI Design course at Perkins Campus
        and embark on a journey of innovation and design mastery. Let’s turn your passion for design into a rewarding career.
        </p>
        <div className="flex gap-10"> 
        <div className=" flex flex-col items-center justify-center gap-1 w-[150px] h-[100px] border-[1px] rounded  border-blue-400"> 
        <img draggable="false" className="w-[25px] h-[25px]" src={Duration}/>
        <p className="h-[20px] font-Poppins not-italic font-normal text-[13px] leading-[20px] text-center text-[#000000]">Duration of Course</p>
        <p className="font-Poppins not-italic font-bold text-[13px] leading-[20px] text-center text-[#2AB6C5]">90 days</p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-1 w-[150px] h-[100px] border-[1px] rounded  border-blue-400"> 
        <img draggable="false" className="w-[25px] h-[25px]" src={Learning}/>
        <p className="h-[20px] font-Poppins not-italic font-normal text-[13px] leading-[20px] text-center text-[#000000]">Learning Mode</p>
        <p className="font-Poppins not-italic font-bold text-[13px] leading-[20px] text-center text-[#2AB6C5]">Regular/Part-time</p>
        </div>
          </div>
      </div>
     
<br/>


<div className="flex flex-wrap-reverse justify-between h-auto lg:flex-nowrap head" >
<div className=" mt-5 md:mt-20  flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className=" md:w-[464px] h-[auto] font-Poppins not-italic font-bold text-[25px] leading-[48px] text-[#2AB6C5] "> UI Design  <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[25px] leading-[48px] text-[#2C2C2C] "> Course Overview</span></h3>
<p className=""> Join us at Perkins Campus for an immersive UI Design Essentials course where you’ll dive deep into the fundamentals of User Interface (UI) design. This course is designed for beginners and enthusiasts who want to kickstart their journey in UI design or enhance their existing skills. Through a blend of theory and hands-on projects, you’ll learn how to create engaging and user-friendly interfaces for websites, mobile apps, and other digital platforms.</p>
<div>
<Button/>

</div>
 </div>
<div className="relative flex items-center  md:w-[450px] justify-center md:left-10  child2" > <img draggable="false" className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" onContextMenu={(e) => e.preventDefault()} src={Img1} /> </div>
</div>
<div className="flex items-center w-full h-auto px-20">
  <img className="w-full h-auto px-20 md:relative md:visible" src={Line1} alt="Description of the image"/>
</div>

<div className="flex flex-wrap justify-between h-auto lg:flex-nowrap head" >
<div className="relative flex items-center  md:w-[450px] justify-center md:right-10  child2" onContextMenu={(e) => e.preventDefault()}> <img draggable="false" className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={Img2} /> </div>

<div className=" mt-5 md:mt-0 flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className=" md:w-[full] h-[auto] font-Poppins not-italic font-bold text-[25px] leading-[48px] text-[#2AB6C5] "> What you will learn in  <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[25px] leading-[48px] text-[#2C2C2C] ">User Interface Design? </span></h3>

<p className="">In a User Interface (UI) Design course, you will learn a wide range of skills and concepts essential for creating effective and visually appealing digital interfaces. Understand the fundamental principles of UI design, including clarity, consistency, simplicity, and visual hierarchy. Gain an understanding of UX design principles and how they intersect with UI design to create seamless user experiences. Learn how to choose and apply typography effectively to enhance readability and convey the right tone and message. Familiarize yourself with industry-standard design tools such as Adobe XD, Sketch, Figma, or InVision to bring your design concepts to life. Understand the importance of accessibility in UI design and learn how to design interfaces that are inclusive and accessible to users with disabilities. </p>
<div>
<Button/>

</div>
 </div>
 
</div>
<br/>
<br/>
<div className="">
      <p className="text-center w-full  text-[#2C2C2C]   text-[35px] font-Poppins not-italic font-semibold ">
      Course<span className=" ml-2 text-[#2AB6C5] ">Module</span>
    </p>
    <br/>
    <div className="flex flex-col items-center justify-center md:flex-row" onContextMenu={(e) => e.preventDefault()}>  
    {[G1,G2,G3,G4].map((item,indx)=>( 
    <img draggable="false" key={indx} className="  w-[150px] h-[150px]  border-[solid] border-[#81C592]"  src={item}/>
  ))}
    </div>
    </div>
<br/>
<br/>
<br/>


   
    </div>
    </div>
    </>
  )
}

export default UIDesign


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