/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import Duration from './duration.svg'
import Learning from './learning.svg'
import Line1 from './line1.svg'
import Line2 from './line2.svg'
import Img1 from './img1.svg'
import Img2 from './img2.svg'
import Img3 from './img3.svg'
import {Helmet} from "react-helmet";
const RPDM = () => {
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>React. js, Python (django) & MySQL Courses | Perkins Campus </title>
                <meta name="description" content=" Advance your development expertise with courses on React.js, Python (Django), and MySQL at Perkins Campus. Learn to create dynamic front-end interfaces, powerful back-end systems, and efficient databases for full-stack web applications." />
                <meta name="keywords" content="Learn Python web development, Full stack python, Learn react, react web development, learn web development, python web development course, python full stack course" />
            </Helmet>
    <div className="flex flex-col w-full h-full py-10 mt-0 select-none " onContextMenu={(e) => e.preventDefault()}  draggable="false">
    <div className="relative flex flex-col px-5 md:px-[15px] lg:px-[87px] bg-[#ffffff] ">
      <div className="flex relative flex-col justify-center items-center mt-0 px-6 w-full py-10 bg-[#ffffff]">
      <h2 className="text-center w-full max-w-[665px] text-[#2AB6C5]   text-[40px] font-Poppins not-italic font-semibold ">
      React. js, Python (django) & MySQL
    </h2>
        <p className="px-0 md:px-[15px] lg:px-[87px] py-5 w-full max-w-5xl text-[17px] font-Poppins not-italic font-normal text-[#848484] text-center">
        Ready to kickstart your career with HTML? Enroll in our courses at Perkins Campus and take the first step
        towards a successful career in tech!
        </p>
        <div className="flex gap-10 "> 
        <div className=" flex flex-col items-center justify-center gap-1 w-[150px] h-[100px] border-[1px] rounded  border-blue-400"> 
        <img draggable="false" className="w-[25px] h-[25px]" src={Duration}/>
        <p className="h-[20px] font-Poppins not-italic font-normal text-[13px] leading-[20px] text-center text-[#000000]">Duration of Course</p>
        <p className="font-Poppins not-italic font-bold text-[13px] leading-[20px] text-center text-[#2AB6C5]">120 days</p>
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
<div className="space-y-5 md:space-x-10 md:flex">  
<img draggable="false" src={Img1}/>
<div className=""> 
<h3 className="px-3 text-[#2AB6C5]  font-Poppins text-[40px] font-bold leading-[81px] text-left"> React. js</h3>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">React a javascript Library developed by Facebook which is used to build Instagram.com. React allows users to develop fast user interfaces for websites and applications easily. React.js revolves around building user interfaces (UIs) using a declarative and component-based approach. React.js is built around the concept of components, which are reusable and self-contained building blocks for UIs.</p>
<br/>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">React.js uses a virtual DOM to represent the UI in memory. When the state of a component changes, React compares the current virtual DOM with a previous version and calculates the minimum number of DOM manipulations needed to update the actual DOM. This approach improves performance by minimizing unnecessary DOM updates.</p>
<br/>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within JavaScript. JSX makes it easier to define UI components in a familiar syntax, blending HTML and JavaScript seamlessly.</p>
<br/>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]"> React components have lifecycle methods that allow developers to hook into different stages of a component’s lifecycle, such as initialization, mounting, updating, and unmounting. These lifecycle methods provide opportunities to perform actions like fetching data, updating the UI, or cleaning up resources.</p>
<br/>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]"> React.js provides a powerful and efficient way to build dynamic and interactive user interfaces by leveraging a component-based architecture, virtual DOM, JSX syntax, declarative programming, one-way data flow, component lifecycle methods, state management, and reconciliation. These concepts enable developers to create modular, scalable, and maintainable UIs for modern web applications.</p>
</div>
</div>
<br/>
<h3 className=" not-italic font-bold text-[26px] leading-[39px] text-[#2AB6C5] font-Poppins">Why you want to learn React JS?</h3>
<br/>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]"> React.js is widely used in modern web development for building dynamic and interactive user interfaces. Learning React.js allows you to stay up-to-date with current trends and practices in web development. React.js follows a component-based architecture, where UIs are broken down into reusable and independent components. Learning React.js helps you understand and leverage this modular approach to building UIs, which promotes code reusability and maintainability.</p>
<br/>

<div className="flex flex-col-reverse gap-y-5 md:flex md:flex-row md:space-x-5 ">  

<div className="w-full "> 
<h3 className="px-3 text-[#2AB6C5]  font-Poppins text-[40px] font-bold leading-[81px] text-left"> Python Django</h3>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">Python Django is a high-level open-source web framework written in Python that enables rapid development of secure and maintainable websites and web applications. Django is a web framework, which means it provides a structure and set of tools for building web applications. Django is written in Python, a high-level, interpreted programming language known for its simplicity and readability. Python&#39;s clean syntax and extensive standard library make Django easy to learn and use for developers of all skill levels</p>
<br/>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">Django is designed to scale from small projects to large, high-traffic websites and web applications. It provides features such as caching, database optimization, and support for asynchronous programming, along with best practices for optimizing performance as applications grow.</p>
<br/>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">Django has a large and active community of developers who contribute to the framework, develop reusable packages (apps), and provide support through forums, mailing lists, and other channels. This vibrant ecosystem ensures that developers have access to resources, tools, and expertise to build robust web applications with Django.</p>
<br/>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">Overall, Python Django is a powerful and feature-rich web framework that simplifies and accelerates web development, making it an ideal choice for building a wide range of websites and web applications.</p>
</div>
<img draggable="false" className=" md:mt-20" src={Img2}/>
</div>
<br/>
<h3 className=" not-italic font-bold text-[26px] leading-[39px] text-[#2AB6C5] font-Poppins">Why you want to learn Python Django?</h3>
<br/>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]"> Learning Python Django can open up various job opportunities in web development. Django is widely used in the industry, and there is a demand for developers who are proficient in it. Django is a full- stack web framework that includes all the necessary components for building web applications, such as URL routing, database handling, authentication, and templating. Learning Django provides a
comprehensive understanding of web development concepts.</p>
<br/>

<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]"> Overall, learning Python Django can be beneficial for individuals interested in pursuing a career in web development or expanding their skill set in building web applications.</p>
<br/>
<div className="flex flex-wrap mt-10 justify-around item-center py-5 w-[full] h-[100px] bg-[#E6FEFF] ">
      <p className="w-[auto] h-[auto] font-Poppins not-italic font-semibold text-[20px] leading-[28px] text-[#2AB6C5]" > For Further Enquires<p className="w-[162px] h-[30px] top-[1756px] left-[205px] gap-0 opacity-[0px] font-Poppins text-[17px] font-semibold leading-[30px] text-left text-[#81C592]">+91 75581 08333 </p></p>
      <ContactUs/>

       </div>
<br/>

<br/>
<h3 className="md:w-[auto] h-[auto] font-Poppins not-italic font-bold text-[22px] leading-[28px] text-[#2C2C2C]"><span className="w-[full] h-[48px] font-Poppins not-italic font-bold text-[25px] leading-[28px] text-[#2AB6C5]"> Why you want to learn React Js, Python Django, MySQL?</span> </h3>
<br/>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">Learning React.js, Python Django, and MySQL provides a powerful combination of technologies for full-stack web development. Here are the reasons why someone might want to learn these technologies:</p> 
 <div className="flex flex-col h-[auto] mt-5 space-y-10">
 <div>
 <h5 className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">React.js </h5>
 <br/>
<ul className=" ml-8 list-[disc]  font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484] ">
    <li> React.js allows you to build complex UIs from small, reusable components, making your code more modular and maintainable.</li>
    <li>React’s virtual DOM enhances performance by minimizing direct updates to the actual DOM, leading to faster and more efficient rendering</li>
</ul>
</div>
 
 <div>
 <h5 className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">Python Django</h5>
 <br/>
<ul className="  ml-8 list-[disc] font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484] ">
    <li> Django's "batteries-included" philosophy provides built-in features like authentication, ORM, and an admin interface, allowing for rapid development of web applications.</li>
    <li>Django includes built-in protection against many common security threats, such as SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF)</li>
<li>Django is designed to handle high-traffic sites and can scale effectively, making it suitable for both small projects and large-scale application</li>
</ul>
</div>

<div>
 <h5 className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">MySQL </h5>
 <br/>
<ul className=" ml-8 list-[disc]  font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484] ">
<li>  MySQL is a reliable and widely-used relational database management system (RDBMS) known for handling structured data efficiently</li>
<li> MySQL is renowned for its performance and reliability, making it a preferred choice for many web applications</li>
</ul>
</div>
</div>
<br/>
<br/> 

<div className=" md:flex" >

<img draggable="false" src={Img3}/>
<div className="md:ml-8 "> 
<h3 className=" px-3 text-[#2AB6C5]  font-Poppins text-[23px] font-bold leading-[2] text-left"> Benefits of Learning These Technologies Together</h3>
<br/>
<ul className=" ml-8 list-[disc] font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484] ">
<li>  Full-Stack Development Skills: Learning React.js for front-end, Python Django for back-end, and MySQL for database management provides a comprehensive skill set for full-stack web development.</li>
<li> End-to-End Application Development: With these technologies, you can develop complete web applications, from the user interface to the server-side logic and database management.</li>
</ul>
<br/>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">Perkins Campus is the best Institute in Nagercoil, Kanyakumari to learn comprehensive full stack development courses (React Js, Python Django, MySQL). Join Perkins Campus and learn the Full stack Development course. We provide access to our learning materials, resources and the experience which you want to success in the field of Web Development.</p>

<br/>
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

export default RPDM



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