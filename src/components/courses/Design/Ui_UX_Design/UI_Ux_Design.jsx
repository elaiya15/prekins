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
/* R-L */
/* <div className="flex items-center w-full h-auto px-20">
  <img className="w-full h-auto px-20 md:relative md:visible" src={Line1} alt="Description of the image"/>
</div>
 */

/* 
<div className="flex items-center w-full h-auto px-20">
  <img className="w-full h-auto px-20 md:relative md:visible" src={Line1} alt="Description of the image"/>
</div>
 */
const UI_Ux_Design = () => {
  return (


    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>UX and UI Designing Course | Perkins Campus </title>
                <meta name="description" content="Elevate your design skills with the UX and UI Designing Course at Perkins Campus. Master the principles of user experience and interface design to create intuitive and engaging digital products." />
                <meta name="keywords" content=" Learn UX and UI Design Course - ui design course, ui ux design course, learn ui ux design, ux ui courses, 
user interface design course, ui design tools" />
            </Helmet>
    
    <div className="relative flex flex-col w-full h-full py-10 mt-10 select-none md:mt-0" onContextMenu={(e) => e.preventDefault()}  draggable="false" >
    <img draggable="false" onContextMenu={(e) => e.preventDefault()} className=" w-full absolute top-1 md:h-[500px]"  src={back}/>
   <br/>
    <div className="relative  flex flex-col px-5 md:px-[15px] lg:px-[87px]  ">

      <div className="relative flex flex-col items-center justify-center w-full px-6 py-10 mt-0">
      <h2 className="text-center w-full max-w-[665px] text-[#2AB6C5]   text-[40px] font-Poppins not-italic font-semibold ">
      UX/UI <span className=" ml-2 text-[#2C2C2C]">Designing</span>
    </h2>
        <p className="text-center px-0 md:px-[15px] lg:px-[87px] py-5 w-full max-w-6xl text-[17px] font-Poppins not-italic font-normal text-[#848484]">
        Discover the art of crafting seamless digital experiences with our UX/UI Designing course. </p>
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
<h3 className=" md:w-[464px] h-[auto] font-Poppins not-italic font-bold text-[25px] leading-[48px] text-[#2AB6C5] "> UX/UI Design  <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[25px] leading-[48px] text-[#2C2C2C] "> Course Overview</span></h3>
<p className=""> Our UX/UI Design Mastery course offers a comprehensive exploration of both User Experience (UX) and User Interface (UI) design principles and practices. Designed for aspiring designers and professionals seeking to enhance their skills, this course provides hands-on experience and expert guidance to create intuitive, visually appealing digital experiences. The course combines interactive lectures, hands-on workshops, and design projects to reinforce learning. Students will have the opportunity to work on real-world projects, receive feedback from instructors and peers, and build a comprehensive portfolio showcasing their skills.</p>
<div>
<Button/>

</div>
 </div>
<div className="relative flex items-center  md:w-[450px] justify-center md:left-10  child2" > <img draggable="false" onContextMenu={(e) => e.preventDefault()} className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={Img1} /> </div>
</div>
<div className="flex items-center w-full h-auto px-20">
  <img className="w-full h-auto px-20 md:relative md:visible" src={Line1} alt="Description of the image"/>
</div>


{/* part2 */}
<div className="flex flex-wrap justify-between h-auto lg:flex-nowrap head">
<div className="relative flex items-center  md:w-[450px] justify-center md:right-10  child2" > <img draggable="false" onContextMenu={(e) => e.preventDefault()} className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={Img2} /> </div>

<div className=" mt-5 md:mt-0 flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className=" md:w-[full] h-[auto] font-Poppins not-italic font-bold text-[25px] leading-[48px] text-[#2AB6C5] "> What you will learn in <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[25px] leading-[48px] text-[#2C2C2C] "> User Interface Design? </span></h3>

<p className="">In a User Experience (UX) Design course, you will learn a variety of skills and concepts aimed at understanding and improving the overall experience of users interacting with digital products. Understand the basic principles and concepts of user experience design, including its importance in product development. Learn how to conduct user research through methods such as surveys, interviews, and observation to gain insights into user behaviors, needs, and goals. Understand the process of creating wireframes and prototypes to visualize and test different design concepts and interactions. Learn how to design intuitive and engaging user interfaces by focusing on user interactions, feedback, and responsiveness. Learn how to showcase your UX design work effectively in a portfolio, including project selection, presentation, and storytelling. Overall, a User Experience Design course will equip you with the skills and knowledge needed to create meaningful and impactful user experiences across a variety of digital platforms and products.</p>
<div>
<Button/>

</div>
 </div>
</div>
<div className="flex items-center w-full h-auto px-20">
  <img className="w-full h-auto px-20 md:relative md:visible" src={Line2} alt="Description of the image"/>
</div>


{/* part3 */}

<div className="flex flex-wrap-reverse justify-between h-auto lg:flex-nowrap head">
<div className=" mt-5 md:mt-20  flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className=" md:w-[fullpx] h-[auto] font-Poppins not-italic font-bold text-[25px] leading-[48px]  text-[#2C2C2C]  "> What you will learn in<span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[25px] leading-[48px] text-[#2AB6C5] ">  User Experience Design ? </span></h3>
<p className=""> In a User Interface (UI) Design course, you will learn a variety of skills and concepts aimed at creating visually appealing and user-friendly interfaces for digital products. Understand the principles and fundamentals of user interface design, including its importance in creating engaging digital experiences. Learn about design elements such as layout, colour, typography, and imagery, and how to use them effectively to create aesthetically pleasing interfaces. Gain skills in creating wireframes and prototypes to visualize and test interface designs before final implementation. Familiarize yourself with industry-standard design tools and software such as Adobe XD, Figma, Sketch, or Invision, and learn how to use them to create interface designs. </p>
<p className=""> Ready to kickstart your career in UX/UI Design? Secure your spot in the Essentials course at Perkins Campus today and take the first step towards mastering the art of designing seamless digital experiences!.</p>
<div>
<Button/>

</div>
 </div>
<div className="relative flex items-center  md:w-[450px] justify-center md:left-10  child2" > <img draggable="false" onContextMenu={(e) => e.preventDefault()} className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={Img3} /> </div>
</div>

<br/>
<div className="">
      <p className="text-center w-full  text-[#2C2C2C]   text-[35px] font-Poppins not-italic font-semibold ">
      Course<span className=" ml-2 text-[#2AB6C5] ">Module</span>
    </p>
    <br/>
    <div className="flex flex-col items-center justify-center md:flex-row" onContextMenu={(e) => e.preventDefault()}>  
    {[G1,G2,G3,G4,G5,G6].map((item,indx)=>( 
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

export default UI_Ux_Design




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