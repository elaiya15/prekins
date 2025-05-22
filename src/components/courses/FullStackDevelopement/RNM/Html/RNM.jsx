import React from 'react'
import Duration from './duration.svg'
import Learning from './learning.svg'
import Line1 from './line1.svg'
import Line2 from './line2.svg'


import Img1 from './im1.svg'
import Img2 from './img2.svg'
import Img5 from './img5.svg'
import Img6 from './img6.svg'
import {Helmet} from "react-helmet";
const HtmlFullstack = () => {
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title> React. js, Node. js & MySQL Courses | Perkins Campus</title>
                <meta name="description" content="Enhance your web development skills with courses on React.js, Node.js, and MySQL at Perkins Campus. Master the technologies to build robust, full-stack applications with dynamic front-end interfaces, efficient back-end systems, and powerful databases." />
                <meta name="keywords" content=" Learn React. js, Node. js & MySQL Courses," />
            </Helmet>
    <div className="flex flex-col w-full h-full py-10 mt-0 select-none"  onContextMenu={(e) => e.preventDefault()}  draggable="false">
    <div className="relative flex flex-col px-5 md:px-[15px] lg:px-[87px] bg-[#ffffff] ">
      <div className="flex relative flex-col justify-center items-center mt-0 px-6 w-full py-10 bg-[#ffffff]">
      <h2 className="text-center w-full max-w-[665px] text-[#2AB6C5]   text-[40px] font-Poppins not-italic font-semibold ">
      React. js, Node. js & MySQL
    </h2>
        <p className="px-0 md:px-[15px] lg:px-[87px] py-5 w-full max-w-5xl text-[17px] font-Poppins not-italic font-normal text-[#848484] text-center">
        Ready to kickstart your career with HTML? Enroll in our courses at Perkins Campus and take the first step
        towards a successful career in tech!
        </p>
        <div className="flex gap-10"> 
        <div className=" flex flex-col items-center justify-center gap-1 w-[150px] h-[100px] border-[1px] rounded  border-blue-400"> 
        <img className="w-[25px] h-[25px]" src={Duration}/>
        <p className="h-[20px] font-Poppins not-italic font-normal text-[13px] leading-[20px] text-center text-[#000000]">Duration of Course</p>
        <p className="font-Poppins not-italic font-bold text-[13px] leading-[20px] text-center text-[#2AB6C5]">120 days</p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-1 w-[150px] h-[100px] border-[1px] rounded  border-blue-400"> 
        <img className="w-[25px] h-[25px]" src={Learning}/>
        <p className="h-[20px] font-Poppins not-italic font-normal text-[13px] leading-[20px] text-center text-[#000000]">Learning Mode</p>
        <p className="font-Poppins not-italic font-bold text-[13px] leading-[20px] text-center text-[#2AB6C5]">Regular/Part-time</p>
        </div>
          </div>
      </div>
     
<br/>
{/* R-L */}
{/* <div className="flex h-auto ">
<img className=" w-[800px] h-[185px] md:left-32 relative invisible bottom-4 md:visible" src={Line1}/>
</div> */}

<div className="flex flex-wrap justify-between h-auto lg:flex-nowrap head">
<div className="relative flex items-center  md:w-[450px] justify-center md:right-10  child2" > <img className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={Img1} /> </div>
<div className=" mt-5 md:mt-0 flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h6 className=" md:w-[464px] h-[auto] font-Poppins not-italic font-bold text-[20px] leading-[48px] text-[#2C2C2C]">  <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[25px] leading-[48px] text-[#2AB6C5]"> React. js</span></h6>
<p className="">React.js is an open-source JavaScript library developed by Facebook for building user interfaces, especially for single-page applications where the UI needs to update dynamically. Here are the key points: </p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">Virtual DOM: </span> React uses a virtual DOM to efficiently update the UI. Changes to the state trigger updates to the virtual DOM, which then updates the actual DOM in a performant way.  </p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]"> JSX (JavaScript XML):</span>  React uses JSX, a syntax extension that looks similar to HTML, making it easier to write and visualize the structure of UI components within JavaScript. </p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">  Unidirectional Data Flow:</span> React ensures that data flows in a single direction, making the app more predictable and easier to debug. </p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">    React Hooks:  </span>Hooks like use State and use Effect allow you to manage state and side effects in functional components without needing class components.  </p>
<p className="">React.js is popular for its simplicity, performance, and ability to build complex, interactive user interfaces in a maintainable and scalable way.  </p>


 </div>
</div>

<div className="flex items-center w-full h-auto px-20">
  <img className="w-full h-auto px-20 md:relative md:visible" src={Line2} alt="Description of the image"/>
</div>


<div className="flex flex-wrap justify-between h-auto reverse lg:flex-nowrap head">
<div className=" mt-5 md:mt-0 flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h6 className=" md:w-[464px] h-[auto] font-Poppins not-italic font-bold text-[20px] leading-[48px] text-[#2C2C2C]">  <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[25px] leading-[48px] text-[#2AB6C5]"> Node. js</span></h6>
<p className=""> Node.js is an open-source, cross-platform runtime environment that allows you to run JavaScript code on the server side. Here are the key points:</p>
<p className="">Node.js uses an event-driven, non-blocking I/O model, making it efficient and suitable for real-time applications that require a lot of I/O operations, such as chat applications and online gaming </p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">JavaScript Runtime:  </span> Built on Chrome’s V8 JavaScript engine, Node.js executes JavaScript code outside of a web browser, allowing for server-side scripting.
</p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]"> Single-Threaded:</span> Despite being single-threaded, Node.js can handle multiple concurrent
connections efficiently through its event-loop mechanism </p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">  NPM (Node Package Manager):</span> Node.js comes with npm, which is the largest ecosystem of open-source libraries and packages, enabling developers to easily share and reuse code.</p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">    Scalability:  </span> Designed to build scalable network applications, Node.js can handle thousands of concurrent connections with high throughput.  </p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">   Asynchronous Programming:  </span> Supports asynchronous programming, allowing for non-blocking operations which enhance the performance of applications, particularly for I/O-bound tasks. </p>
<p className=""> Node.js is popular for building fast, scalable network applications, and is particularly well-suited for applications requiring real-time interaction and high concurrency.</p>

{/* <div>
  <button className="  font-Poppins not-italic font-semibold text-[20px] leading-[30px] box-border w-[220px] h-[60px] bg-[#FFFFFF] border-[1px] border-[solid] border-[#2AB6C5] rounded-[10px]  text-[#87C38C]"> Enroll Now</button>
</div> */}
 </div>
<div className="relative flex items-center  md:w-[450px] justify-center md:left-10  child2" > <img className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={Img2} /> </div>
</div>
<div className="flex items-center w-full h-auto px-20">
  <img className="w-full h-auto px-20 md:relative md:visible" src={Line1} alt="Description of the image"/>
</div>

<div className="flex flex-wrap justify-between h-auto lg:flex-nowrap head">
<div className="relative flex items-center  md:w-[450px] justify-center md:right-10  child2" > <img className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={Img5} /> </div>

<div className=" mt-5 md:mt-0 flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
{/* <h3 className=" md:w-[564px] h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2C2C2C]"> What you will learn in <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> Javascript?</span></h3> */}
<h3 className=" md:w-[564px] h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2C2C2C]">

 <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> MySQL</span></h3>
{/* <p className="">CSS coding is a language which allows you to create great visually appealing web pages about the styles, fonts, colours. CSS describes about how HTML elements are displayed on the screen. CSS saves lots of work. These CSS style sheets are external which can be stored as CSS files </p> */}

<p className="">MySQL is an open-source relational database management system (RDBMS) widely used for storing and managing structured data. Learning MySQL offers several benefits:</p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">Data Management:    </span> MySQL allows you to organize and store data efficiently in a structured format, making it easier to retrieve, manipulate, and analyze information. </p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]"> Scalability:   </span> MySQL is capable of handling large volumes of data and can scale to accommodate growing applications, making it suitable for projects of all sizes. </p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]"> Versatility:  </span>MySQL is used across various industries and applications, from small websites to large enterprise systems, providing valuable skills applicable to diverse projects.  </p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">Opportunities: </span>  Proficiency in MySQL is highly sought after in the job market, opening up opportunities for roles in database administration, software development, data analysis, and more.
  </p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">   Understanding Databases: </span> Learning MySQL provides a fundamental understanding of relational databases and SQL, essential skills for anyone interested in data management or software development. </p>

<p className="">In summary, learning MySQL equips you with valuable skills in data management and database development, enhancing your career prospects and enabling you to work on a wide range of projects in various industries. </p>
 </div>
 
</div>
<br/>
<div className="flex flex-wrap  mt-10 justify-around item-center py-5 w-[full] h-[100px] bg-[#E6FEFF] ">
      <p className="w-[auto] h-[auto] font-Poppins not-italic font-semibold text-[20px] leading-[28px] text-[#2AB6C5]" > For Further Enquires<p className="w-[162px] h-[30px] top-[1756px] left-[205px] gap-0 opacity-[0px] font-Poppins text-[17px] font-semibold leading-[30px] text-left text-[#81C592]">+91 75581 08333 </p></p>
      <ContactUs/>

       </div>
<br/>
<br/>
<br/>
       
<div className="flex flex-wrap h-auto gap-5 justify-between-reverse md:flex md:flex-nowrap head" >
<div className="  flex flex-col space-y-5 md:w-[full] h-auto font-Poppins not-italic font-normal text-[16px] leading-[30px] text-[#848484]">
<h3 className="md:w-[full] h-[auto] font-Poppins not-italic font-bold text-[22px] leading-[28px] text-[#2C2C2C]">Why you want to learn<span className="w-[full] h-[48px] font-Poppins not-italic font-bold text-[22px] leading-[28px] text-[#2AB6C5]"> React. js, Node.js & MySQL? </span> </h3>


<p className="">Learning React.js and Node.js together offers a comprehensive skill set for full-stack web
development. React.js allows you to build reusable and modular UI components, making your code more maintainable and scalable. React JS uses a virtual DOM to efficiently update and render components, improving the performance of your applications. With a large community and extensive libraries, React JS provides robust tools and support for developers. Proficiency in React JS is highly sought after by employers, making it a valuable skill in the job market.</p>
<p className="">Combining React.js and Node.js allows you to build comprehensive web applications, handling both the client-side and server-side aspects. You can develop and manage the entire stack of a web application, from the user interface to the server logic and database interactions. Full-stack developers with expertise in React.js and Node.js are in high demand, and this combination of skills opens up numerous job opportunities.</p>
<p className="">Being proficient in both technologies can lead to higher salaries and more challenging and rewarding projects.</p>
<p className="">Perkins Campus is the best Institute in Nagercoil, Kanyakumari to learn comprehensive full stack development courses. Join Perkins Campus and learn the Full stack Development course. We provide access to our learning materials, resources and the experience which you want to success in the field of Web Development.</p>
<div>

<Button/>

</div>
</div>
<img className="md:w-1/2" src={Img6}/>

</div>







   
    </div>
    </div>
    </>
  )
}

export default HtmlFullstack



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