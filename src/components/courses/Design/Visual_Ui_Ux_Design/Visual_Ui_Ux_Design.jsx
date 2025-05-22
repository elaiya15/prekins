import React from 'react'
import Duration from './duration.svg'
import Learning from './learning.svg'
import Line1 from './line1.svg'
import Line2 from './line2.svg'
import back from './bg.svg'


import Img1 from './img1.svg'
import Img2 from './img2.svg'
import Img3 from './img3.svg'
import {Helmet} from "react-helmet";

import G1 from './coursemodule/Group1.svg'
import G2 from './coursemodule/Group2.svg'
import G3 from './coursemodule/Group3.svg'
import G4 from './coursemodule/Group4.svg'
import G5 from './coursemodule/Group5.svg'
import G6 from './coursemodule/Group6.svg'
import G7 from './coursemodule/Group7.svg'
import G8 from './coursemodule/Group8.svg'
/* R-L */
/* <div className="flex h-auto ">
<img draggable="false" onContextMenu={(e) => e.preventDefault()} className=" w-[800px] h-[185px] md:left-32 relative invisible bottom-4 md:visible" src={Line1}/>
</div> */

/* 
<div className="flex h-auto ">
<img draggable="false" onContextMenu={(e) => e.preventDefault()} className=" w-[800px] h-[185px] md:left-32 relative invisible bottom-4 md:visible" src={Line2}/>
</div> */
const Visual_Ui_Ux_Design = () => {
  return (
<>
<Helmet>
                <meta charSet="utf-8" />
                <title>Visual & UX/UI Designing Course | Perkins Campus </title>
                <meta name="description" content=" Transform your design abilities with the Visual & UX/UI Designing Course at Perkins Campus. Learn to craft visually striking, user-friendly digital experiences that seamlessly integrate aesthetic appeal with functionality." />
                <meta name="keywords" content="ui design course, ui ux design course, ux design course, ux ui courses, 
user experience design courses, ui and ux design," />
            </Helmet>

    
    <div className="relative flex flex-col w-full h-full py-10 mt-10 select-none md:mt-0" onContextMenu={(e) => e.preventDefault()}  draggable="false">
    <img draggable="false" onContextMenu={(e) => e.preventDefault()} className=" w-full absolute top-1 md:h-[500px]"  src={back}/>
   <br/>
    <div className="relative  flex flex-col px-5 md:px-[15px] lg:px-[87px]  ">

      <div className="relative flex flex-col items-center justify-center w-full px-6 py-10 mt-0">
      <h2 className="text-center w-full max-w-[665px] text-[#2AB6C5]   text-[40px] font-Poppins not-italic font-semibold ">
      Visual & UX/UI <span className=" ml-2 text-[#2C2C2C]">Designing</span>
    </h2>
        <p className="text-center px-0 md:px-[15px] lg:px-[87px] py-5 w-full max-w-6xl text-[17px] font-Poppins not-italic font-normal text-[#848484]">
        Our Visual UX/UI Designing courses offer a comprehensive exploration of design principles, tools,
and techniques to create visually stunning and user-friendly digital experiences. </p>
        <div className="flex gap-10"> 
        <div className=" flex flex-col items-center justify-center gap-1 w-[150px] h-[100px] border-[1px] rounded  border-blue-400"> 
        <img draggable="false" onContextMenu={(e) => e.preventDefault()} className="w-[25px] h-[25px]" src={Duration}/>
        <p className="h-[20px] font-Poppins not-italic font-normal text-[13px] leading-[20px] text-center text-[#000000]">Duration of Course</p>
        <p className="font-Poppins not-italic font-bold text-[13px] leading-[20px] text-center text-[#2AB6C5]">180 Days</p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-1 w-[150px] h-[100px] border-[1px] rounded  border-blue-400"> 
        <img draggable="false" onContextMenu={(e) => e.preventDefault()} className="w-[25px] h-[25px]" src={Learning}/>
        <p className="h-[20px] font-Poppins not-italic font-normal text-[13px] leading-[20px] text-center text-[#000000]">Learning Mode</p>
        <p className="font-Poppins not-italic font-bold text-[13px] leading-[20px] text-center text-[#2AB6C5]">Regular/Part-time</p>
        </div>
          </div>
      </div>
     
<br/>

{/* part1 */}

<div className="flex flex-wrap-reverse justify-between h-auto lg:flex-nowrap head">
<div className=" mt-5 md:mt-20  flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className=" md:w-[full] h-[auto] font-Poppins not-italic font-bold text-[25px] leading-[48px] text-[#2AB6C5] "> Visual & UX/UI Design <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[25px] leading-[48px] text-[#2C2C2C] "> Course Overview</span></h3>
<p className=""> Our Visual UX/UI Designing Essentials course offers a comprehensive exploration of the principles, tools, and techniques required to create visually appealing and user-friendly digital interfaces. Designed for beginners and professionals alike, this course covers the intersection of visual design, user experience (UX) design, and user interface (UI) design, providing students with a well-rounded skill set to excel in the field. The course combines lectures, hands-on workshops, and design projects to provide students with practical experience in applying design principles to real-world scenarios. Students will have the opportunity to work individually and in groups, receiving feedback from instructors and peers throughout the course..</p>
<div>
<Button/>

</div>
 </div>
<div className="relative flex items-center  md:w-[450px] justify-center md:left-10  child2" > <img draggable="false" onContextMenu={(e) => e.preventDefault()} className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={Img1} /> </div>
</div>
<div className="flex items-center w-full h-auto px-20">
  <img draggable="false" className="w-full h-auto px-20 md:relative md:visible" src={Line1} alt="Description of the image"/>
</div>

{/* part2 */}
<div className="flex flex-wrap justify-between h-auto lg:flex-nowrap head">
<div className="relative flex items-center  md:w-[450px] justify-center md:right-10  child2" > <img draggable="false" onContextMenu={(e) => e.preventDefault()} className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={Img2} /> </div>

<div className=" mt-5 md:mt-0 flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className=" md:w-[full] h-[auto] font-Poppins not-italic font-bold text-[25px] leading-[48px] text-[#2C2C2C]  "> What you will learn in <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[25px] leading-[48px] text-[#2AB6C5]"> User Interface Design? </span></h3>

<p className="">In a User Experience (UX) Design course, you will learn a variety of skills and concepts aimed at
understanding and improving the overall experience of users interacting with digital products.
Understand the importance of user experience and the role of a UX designer in product
development. Learn methods for conducting user research, including interviews, surveys, and
usability testing, to understand user needs and behaviours. Explore techniques for creating user
personas to represent different user groups and their characteristics, goals, and pain points. Gain skills in creating wireframes and prototypes to visualize and test design concepts and interactions.</p>
<div>
<Button/>

</div>
 </div>
</div>
<div className="flex items-center w-full h-auto px-20">
  <img draggable="false" className="w-full h-auto px-20 md:relative md:visible" src={Line2} alt="Description of the image"/>
</div>

{/* part3 */}

<div className="flex flex-wrap-reverse justify-between h-auto lg:flex-nowrap head">
<div className=" mt-5 md:mt-20  flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className=" md:w-[fullpx] h-[auto] font-Poppins not-italic font-bold text-[25px] leading-[48px]  text-[#2C2C2C]  "> What you will learn in<span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[25px] leading-[48px] text-[#2AB6C5] ">  User Experience Design ? </span></h3>
<p className=""> In a User Experience (UX) Design course, you will learn a variety of skills and concepts aimed at understanding and improving the overall experience of users interacting with digital products. Understand the importance of user experience and the role of a UX designer in product development. Learn methods for conducting user research, including interviews, surveys, and usability testing, to understand user needs and behaviours. Explore techniques for creating user
personas to represent different user groups and their characteristics, goals, and pain points. Gain skills in creating wireframes and prototypes to visualize and test design concepts and interactions.</p>
<div>
<Button/>

</div>
 </div>
<div className="relative flex items-center  md:w-[450px] justify-center md:left-10  child2" > <img draggable="false" onContextMenu={(e) => e.preventDefault()} className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={Img3} /> </div>
</div>

<div className="flex h-auto ">
<img draggable="false" onContextMenu={(e) => e.preventDefault()} className=" w-[800px] h-[185px] md:left-32 relative invisible bottom-4 md:visible" src={Line1}/>
</div> 

{/* part4 */}
<div className="flex flex-wrap justify-between h-auto lg:flex-nowrap head">
<div className="relative flex items-center  md:w-[450px] justify-center md:right-10   child2" > <img draggable="false"   onContextMenu={(e) => e.preventDefault()} className=" select-none h-[230px] w-[300px] md:w-[350px] md:h-[300px]   " src={Img2} /> </div>

<div className=" mt-5 md:mt-0 flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className=" md:w-[full] h-[auto] font-Poppins not-italic font-bold text-[25px] leading-[48px] text-[#2C2C2C]  "> What you will learn in <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[25px] leading-[48px] text-[#2AB6C5]"> Visual Design ? </span></h3>

<p className="">In a Visual Design course, you will learn a variety of skills and concepts related to creating visually appealing and effective designs. Understand the foundational principles of design, including balance, contrast, alignment, proximity, and repetition. Learn about colour psychology, colour harmony, and how to effectively use colour in design to evoke emotions and communicate messages. Explore different typefaces, fonts, and typography principles, including hierarchy, readability, and emphasis. Familiarize yourself with industry-standard design tools and software, such as Adobe Creative Suite, Sketch, or Figma. Overall, a Visual Design course will equip you with the skills and knowledge needed to create visually stunning and effective designs across a variety of mediums and platforms. </p>
<p className=""> Are you ready to kickstart your career in Visual UX/UI Designing? Reserve your spot in the Essentials course at Perkins Campus today and embark on a journey to become a skilled designer in the digital landscape! </p>
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
    {[G1,G2,G3,G4,G5,G6,G7,G8].map((item,indx)=>( 
    <img draggable="false" onContextMenu={(e) => e.preventDefault()} key={indx} className="  w-[150px] h-[150px]  border-[solid] border-[#81C592]"  src={item}/>
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

export default Visual_Ui_Ux_Design



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