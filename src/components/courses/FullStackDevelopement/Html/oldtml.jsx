import React from 'react'
import Duration from './duration.svg'
import Learning from './learning.svg'
import Line1 from './line1.svg'
import Line2 from './line2.svg'


import htmlDoc from './img/htmlDoc.png'
import html from './img/html.png'
import html5 from './img/Html5.svg'
import css from './img/css.svg'
import Bootstrap from './img/Bootstrap.svg'
import javascript from './img/javascript.svg'
const HtmlCss = () => {
  return (
    <div className="flex flex-col w-full h-full py-10 mt-0">
    <div className="relative flex flex-col px-5 md:px-[15px] lg:px-[87px] bg-[#ffffff] ">
      <div className="flex relative flex-col justify-center items-center mt-0 px-6 w-full py-10 bg-[#ffffff]">
      <h2 className="text-center w-full max-w-[665px] text-[#2AB6C5]   text-[40px] font-Poppins not-italic font-semibold ">
      HTML, CSS, Bootstrap, Javascript
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
<div className="w-full h-auto gap-10 md:flex"> 

<div className="flex flex-col items-end justify-end h-auto gap-5"> 

<div className=""> 
<img className="relative right-16" src={htmlDoc}/>

</div>
<div>
<img className="" src={html}/>



</div>
 
</div>
<div  className="flex flex-col h-auto space-y-5">


<div className="h-auto" >
<p className="w-[full] h-[42px] left-[calc(50% - 206px/2 - 84px)] font-Poppins not-italic font-bold text-[28px] leading-[42px] text-[#2C2C2C]">    What is <span className=" text-[#2AB6C5]"> Html? </span>              </p>
<br/>
<p className="md:w-[620px] font-['Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]"> HTML (Hypertext Markup Language) is a programming language helps to design foundation of
beautiful Website pages. HTML helps to build your Website easily and quickly. HTML language can be learned by anyone who haves interest in Programming. HTML can be learned along with CSS, Javascript which helps to create a Website which gives user-friendly Website.</p>
 </div>
<div className="h-auto" >
<p className="w-[full] h-[42px] left-[calc(50% - 206px/2 - 84px)] font-Poppins not-italic font-bold text-[28px] leading-[42px] text-[#2C2C2C]">    What is <span className=" text-[#2AB6C5]"> Css? </span>              </p>
<br/>
<p className="md:w-[620px] font-['Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">CSS coding is a language which allows you to create great visually appealing web pages about the styles, fonts, colours. CSS describes about how HTML elements are displayed on the screen. CSS saves lots of work. These CSS style sheets are external which can be stored as CSS files.

CSS is used to design the layout of the Website includes the design, layout, variations for different devices and variations. With the external style sheets we can change the entire design of the Website by one file.</p>
 </div>
<div className="h-auto" >
<p className="w-[full] h-[42px] left-[calc(50% - 206px/2 - 84px)] font-Poppins not-italic font-bold text-[28px] leading-[42px] text-[#2C2C2C]">    What is <span className=" text-[#2AB6C5]">Bootstrap? </span>              </p>
<br/>
<p className="md:w-[620px] font-['Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">Bootstrap is the opens source front end framework for web development providing a collection of HTML, CSS, Javascript framework for developing responsive and mobile friendly websites. The
primary purpose of adding it to a web project is to apply Bootstrap&#39;s choices of colou , size, font and layout to that project. Bootstrap provides basic style definitions for all HTML elements. Bootstrap provides a collection of syntax for template designs.</p>
 </div>
<div className="h-auto" >
<p className="w-[full] h-[42px] left-[calc(50% - 206px/2 - 84px)] font-Poppins not-italic font-bold text-[28px] leading-[42px] text-[#2C2C2C]">    What is <span className=" text-[#2AB6C5]"> Javascript ? </span>              </p>
<br/>
<p className="md:w-[620px] font-['Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">Javascript is a programming language uses to implement complex features on web pages. Javascript is used to display timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. It’s the third part of your programming along with the first two HTML and CSS.</p>
 </div>
 </div>
</div>
<div className="flex h-auto ">
<img className=" w-[800px] h-[185px] md:left-32 relative invisible bottom-4 md:visible" src={Line2}/>
</div>
<div className="flex flex-wrap-reverse h-auto lg:flex-nowrap head">
<div className="  flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className=" md:w-[464px] h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2C2C2C]"> What you will learn in <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> HTML?</span></h3>
<p className="">HTML (Hypertext Markup Language) is an essential skill for anyone interested in web development or digital content creation. Mastering HTML opens up numerous career paths in the tech industry. Here’s an in-depth look at some of the career opportunities available for those proficient in HTML: </p>
<ul className="list-[disc] relative left-4 space-y-3">
<li>Front-End Developer</li>
<li> Web Designer</li>
<li>Content Manager</li>
<li>Freelance Web Developer</li>
<li> CMS Specialist</li>
</ul>

<p className="">HTML is a versatile skill that serves as the foundation for many tech careers. Whether you’re starting out or looking to specialize, HTML proficiency opens up a wide range of job opportunities with competitive salaries and strong job growth potential. 
Ready to kickstart your career with HTML? Enroll in our courses at Perkins Campus and take the first step towards a successful career in tech!</p>

<div>
  <button className="font-Poppins not-italic font-semibold text-[20px] leading-[30px] box-border w-[220px] h-[60px] bg-[#FFFFFF] border-[1px] border-[solid] border-[#2AB6C5] rounded-[10px]  text-[#87C38C] "> Enroll Now</button>
</div>

 </div>
<div className="relative flex items-center md:w-[450px] justify-center left-12  child2" > <img className="  h-auto w-[300px] md:w-[400px] md:h-[300px]" src={html5} /> </div>
</div>

<div className="flex h-auto ">
<img className=" w-[800px] h-[185px] md:left-32 relative invisible bottom-4 md:visible" src={Line1}/>
</div>

<div className="flex flex-wrap h-auto lg:flex-nowrap head">
<div className="relative flex items-center  md:w-[450px] justify-center md:right-10  child2" > <img className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={css} /> </div>
<div className=" mt-5 md:mt-0 flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className=" md:w-[464px] h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2C2C2C]"> What you will learn in <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> CSS?</span></h3>
<p className="">CSS coding is a language which allows you to create great visually appealing web pages about the styles, fonts, colours. CSS describes about how HTML elements are displayed on the screen. CSS saves lots of work. These CSS style sheets are external which can be stored as CSS files </p>

<p className="">CSS is used to design the layout of the Website includes the design, layout, variations for different devices and variations. With the external style sheets we can change the entire design of the Website by one file.</p>

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
<h3 className=" md:w-[564px] h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2C2C2C]"> What you will learn in <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> Bootstrap?</span></h3>
{/* <p className="">CSS coding is a language which allows you to create great visually appealing web pages about the styles, fonts, colours. CSS describes about how HTML elements are displayed on the screen. CSS saves lots of work. These CSS style sheets are external which can be stored as CSS files </p> */}

<p className="">Bootstrap is the opens source front end framework for web development providing a collection of HTML, CSS, Javascript framework for developing responsive and mobile friendly websites. The
primary purpose of adding it to a web project is to apply Bootstrap&#39;s choices of colou , size, font and layout to that project. Bootstrap provides basic style definitions for all HTML elements. Bootstrap provides a collection of syntax for template designs.</p>

<div>
  <button className="  font-Poppins not-italic font-semibold text-[20px] leading-[30px] box-border w-[220px] h-[60px] bg-[#FFFFFF] border-[1px] border-[solid] border-[#2AB6C5] rounded-[10px]  text-[#87C38C]"> Enroll Now</button>
</div>
 </div>
<div className="relative flex items-center  md:w-[450px] justify-center md:left-10  child2" > <img className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={Bootstrap} /> </div>
</div>
<div className="flex h-auto ">
<img className=" w-[800px] h-[185px] md:left-32 relative invisible bottom-4 md:visible" src={Line1}/>
</div>

<div className="flex flex-wrap h-auto lg:flex-nowrap head">
<div className="relative flex items-center  md:w-[450px] justify-center md:right-10  child2" > <img className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={javascript} /> </div>

<div className=" mt-5 md:mt-0 flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className=" md:w-[564px] h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2C2C2C]"> What you will learn in <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> Javascript?</span></h3>
{/* <p className="">CSS coding is a language which allows you to create great visually appealing web pages about the styles, fonts, colours. CSS describes about how HTML elements are displayed on the screen. CSS saves lots of work. These CSS style sheets are external which can be stored as CSS files </p> */}

<p className="">Javascript is a programming language uses to implement complex features on web pages. Javascript is used to display timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. It’s the third part of your programming along with the first two HTML and CSS.</p>

<div>
  <button className="  font-Poppins not-italic font-semibold text-[20px] leading-[30px] box-border w-[220px] h-[60px] bg-[#FFFFFF] border-[1px] border-[solid] border-[#2AB6C5] rounded-[10px]  text-[#87C38C]"> Enroll Now</button>
</div>
 </div>
</div>
      
    </div>
    </div>
  )
}

export default HtmlCss
