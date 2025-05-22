import React from 'react'
import Duration from './duration.svg'
import Learning from './learning.svg'
// import Line1 from './line1.svg'
import Line2 from './line2.svg'
import {Helmet} from "react-helmet";



import html from './img/html.png'
import Word from './img/Word.svg'
import Word2 from './img/Word2.svg'
const Wordpress = () => {
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title> Wordpress Course | Perkins Campus </title>
                <meta name="description" content=" Transform your web presence with the WordPress Course at Perkins Campus. Learn to build, customize, and manage professional websites without any coding experience." />
                <meta name="keywords" content=" Learn Web development course -  web development courses, learn wordpress development, website development course, web design and development course" />
            </Helmet>
    <div className="flex flex-col w-full h-full py-10 mt-0 select-none"  onContextMenu={(e) => e.preventDefault()}  draggable="false">
    <div className="relative flex flex-col px-5 md:px-[15px] lg:px-[87px] bg-[#ffffff] ">
      <div className="flex relative flex-col justify-center items-center mt-0 px-6 w-full py-10 bg-[#ffffff]">
      <h2 className="text-center w-full max-w-[665px] text-[#2AB6C5]   text-[40px] font-Poppins not-italic font-semibold ">
      Wordpress
    </h2>
        <p className="px-0 md:px-[15px] lg:px-[87px] py-5 w-full max-w-5xl text-[17px] font-Poppins not-italic font-normal text-[#848484] text-center">
        Ready to kickstart your career with WORDPRESS? Enroll in our courses at Perkins Campus and take the first step
        towards a successful career in tech!
        </p>
        <div className="flex gap-10"> 
        <div className=" flex flex-col items-center justify-center gap-1 w-[150px] h-[100px] border-[1px] rounded  border-blue-400"> 
        <img draggable="false" className="w-[25px] h-[25px]" src={Duration}/>
        <p className="h-[20px] font-Poppins not-italic font-normal text-[13px] leading-[20px] text-center text-[#000000]">Duration of Course</p>
        <p className="font-Poppins not-italic font-bold text-[13px] leading-[20px] text-center text-[#2AB6C5]">25 Days</p>
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
{/* <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold md:text-[32px] text-[30px] leading-[30px]  text-[#2C2C2C] text-start  ">course Overview</span> */}
<br/>
        <div className="flex flex-wrap justify-between h-auto lg:flex-nowrap head">
<div className="relative flex items-center  md:w-[450px] justify-center md:right-10  child2" > <img draggable="false" className="  h-[auto] w-[auto] md:w-[auto] md:h-[auto]" src={Word2} /> </div>
<div className=" mt-5 md:mt-0 flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className="w-[full] md:w-[464px] text-start h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> Wordpress </h3>
{/* <p className="">CSS coding is a language which allows you to create great visually appealing web pages about the styles, fonts, colours. CSS describes about how HTML elements are displayed on the screen. CSS saves lots of work. These CSS style sheets are external which can be stored as CSS files </p> */}

<p className="">Learn Wordpress.com, it provides straight forward educational resources for anyone who looks to create a new website on Wordpress.com. Our free and comprehensive courses are perfect for beginners u need to know from the ground up. Discover how you want to create a new Web design of your own. Our learning materials helps you to learn on how to make website creation accessible and achievable. Explore and learn on how to create new Website.</p>

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
<h3 className=" md:w-[564px] h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2C2C2C]"> Where is<span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> Wordpress</span>  used?</h3>
{/* <p className="">CSS coding is a language which allows you to create great visually appealing web pages about the styles, fonts, colours. CSS describes about how HTML elements are displayed on the screen. CSS saves lots of work. These CSS style sheets are external which can be stored as CSS files </p> */}

<p className="">Before the Wordpress was used to create Blogs. Nowadays Wordpress is advanced and it can be used to create any type of Website. With Wordpress platform one can able to design blogs, Websites for Business, E- Commerce Stores, Mobile applications and membership sites.</p>

<div>
<h3 className=" md:w-[564px] h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2C2C2C]">Why<span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> Wordpress?</span></h3>
<p className="">Wordpress is the beloved platform for many bloggers and businesses. Some of the most popular reasons of why you use Wordpress</p>
<br/>
<ol className="ml-4 list-decimal" >
  <li> Wordpress is an Open-Source platform. It’s designed for People to contribute their ideas to improve the platform</li>
  <li>Wordpress is easy to use for beginners and its mainly can be used by anyone. Non-technical peoples can use Wordpress to design their Websites.</li>
  <li>The user-interface of Wordpress is very intuitive and friendly</li>
</ol>  
</div>
 </div>
<div className="relative flex items-center  md:w-[450px] justify-center md:left-10  child2" > <img draggable="false" className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={Word} /> </div>
</div>
{/* <div className="flex h-auto ">
<img draggable="false" className=" w-[800px] h-[185px] md:left-32 relative invisible bottom-4 md:visible" src={Line1}/>
</div> */}

<br/>
<div className="flex flex-wrap mt-10 justify-around item-center py-5 w-[full] h-[100px] bg-[#E6FEFF] ">
      <p className="w-[auto] h-[auto] font-Poppins not-italic font-semibold text-[20px] leading-[28px] text-[#2AB6C5]" > For Further Enquires<p className="w-[162px] h-[30px] top-[1756px] left-[205px] gap-0 opacity-[0px] font-Poppins text-[17px] font-semibold leading-[30px] text-left text-[#81C592]">+91 75581 08333 </p></p>
      <ContactUs/>
       </div>
       <br/>
<div className="mt-10 md=mt-20">
<h2 className=" md:w-[564px] h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2C2C2C]">  Why you want to learn<span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> Wordpress?</span>  </h2>
<div className="flex flex-col h-[auto] mt-5 space-y-10">
 <div className="flex flex-col h-[auto] mt-5 space-y-2">
 <h3 className=" md:w-[full] h-[auto] font-Poppins not-italic font-bold text-[22px] leading-[30px] text-[#111111]"> Market Demand:</h3>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">WordPress powers over 40% of websites on the internet, making it highly sought after by businesses and individuals alike. Learning WordPress opens up a wide range of job opportunities in web development, design, content creation, and digital marketing.</p>
</div>
<div className="flex flex-col h-[auto] mt-5 space-y-2">
 <h3 className=" md:w-[full] h-[auto] font-Poppins not-italic font-bold text-[22px] leading-[30px] text-[#111111]"> Ease of Use:</h3>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">WordPress is known for its user-friendly interface and intuitive content management system (CMS). It doesn’t require advanced technical skills to get started, making it accessible to beginners and non-technical users. </p>
</div>

<div className="flex flex-col h-[auto] mt-5 space-y-2">
 <h3 className=" md:w-[full] h-[auto] font-Poppins not-italic font-bold text-[22px] leading-[30px] text-[#111111]"> Versatility</h3>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">WordPress is highly versatile and can be used to create various types of websites, including blogs, e-commerce stores, portfolios, business websites, and more. Learning WordPress allows individuals to build and customize websites to meet specific needs and goals. </p>
</div>
<div className="flex flex-col h-[auto] mt-5 space-y-2">
 <h3 className=" md:w-[full] h-[auto] font-Poppins not-italic font-bold text-[22px] leading-[30px] text-[#111111]"> Customization Options:</h3>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">With thousands of free and premium themes and plugins available, WordPress offers endless customization options. Users can create unique and professional-looking websites without needing to write code from scratch. </p>
</div>
<div className="flex flex-col h-[auto] mt-5 space-y-2">
 <h3 className=" md:w-[full] h-[auto] font-Poppins not-italic font-bold text-[22px] leading-[30px] text-[#111111]"> Community Support:</h3>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">WordPress has a vast and active community of developers, designers, and users who contribute to its growth and improvement. Learning WordPress means gaining access to a supportive community that provides resources, tutorials, forums, and assistance. </p>
</div>
<div className="flex flex-col h-[auto] mt-5 space-y-2">
 <h3 className=" md:w-[full] h-[auto] font-Poppins not-italic font-bold text-[22px] leading-[30px] text-[#111111]"> Freelancing Opportunities:</h3>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">Many businesses and individuals seek WordPress developers and designers to create and maintain their websites. Learning WordPress can lead to freelance opportunities, allowing individuals to work independently and earn income remotely. </p>
</div>
<div className="flex flex-col h-[auto] mt-5 space-y-2">
 <h3 className=" md:w-[full] h-[auto] font-Poppins not-italic font-bold text-[22px] leading-[30px] text-[#111111]"> Continuous Learning:</h3>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">WordPress is constantly evolving with new updates, features, and trends. Learning WordPress is an ongoing process that keeps individuals engaged and adaptable to changes in the industry. </p>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">Overall, learning WordPress can be beneficial for individuals looking to enter the web development field, expand their skill set, or create and manage their own websites with ease. </p>
</div>




</div>



</div>

        </div>
        </div>
        </>
  )
}

export default Wordpress




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