import React from 'react'
import Duration from './duration.svg'
import Learning from './learning.svg'
import Line1 from './line1.svg'
import Line2 from './line2.svg'


import htmlDoc from './img/htmlDoc.png'
import html from './img/html.png'
import html2 from './img/html2.svg'
import html5 from './img/Html5.svg'
import css from './img/css.svg'
import Bootstrap from './img/Bootstrap.svg'
import javascript from './img/javascript.svg'
import Img1 from './im1.svg'
import Img2 from './img2.svg'
import Img3 from './img3.svg'
import Img4 from './img4.svg'
import Img5 from './img5.svg'
import Img6 from './img6.svg'
import {Helmet} from "react-helmet";
const HtmlFullstack = () => {
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title> HTML, CSS, Javascript Courses | Perkins Campus</title>
                <meta name="description" content="Master the essentials of web and software development with courses on HTML, CSS, JavaScript, Python (Django), and MySQL at Perkins Campus. Gain comprehensive skills to build dynamic websites and robust web applications from the ground up." />
                <meta name="keywords" content="learn html css and javascript Courses - html css javascript course, python full stack developer, full stack web development, learn web development, web development course, django course, website development course " />
            </Helmet>
    <div className="flex flex-col w-full h-full py-10 mt-0 select-none" onContextMenu={(e) => e.preventDefault()}  draggable="false">
    <div className="relative flex flex-col px-5 md:px-[15px] lg:px-[87px] bg-[#ffffff] ">
      <div className="flex relative flex-col justify-center items-center mt-0 px-6 w-full py-10 bg-[#ffffff]">
      <h2 className="text-center w-full max-w-[665px] text-[#2AB6C5]   text-[40px] font-Poppins not-italic font-semibold ">
      HTML, CSS, Javascript, Python (django),MySQL
    </h2>
        <p className="px-0 md:px-[15px] lg:px-[87px] py-5 w-full max-w-5xl text-[17px] font-Poppins not-italic font-normal text-[#848484] text-center">
        Ready to kickstart your career with HTML? Enroll in our courses at Perkins Campus and take the first step
        towards a successful career in tech!
        </p>
        <div className="flex gap-10"> 
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
{/* R-L */}
{/* <div className="flex h-auto ">
<img draggable="false" className=" w-[800px] h-[185px] md:left-32 relative invisible bottom-4 md:visible" src={Line1}/>
</div> */}

<div className="flex flex-wrap justify-between h-auto lg:flex-nowrap head">
<div className="relative flex items-center  md:w-[450px] justify-center md:right-10  child2" > <img draggable="false" className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={Img1} /> </div>
<div className=" mt-5 md:mt-0 flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className=" md:w-[464px] h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2C2C2C]">  <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> HTML</span></h3>
<p className="">HTML is the standard markup language used to create and structure the content on web pages. It defines the elements and structure of a web document by using tags. </p>

<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">Elements:</span>  HTML uses elements (tags) to define the structure and content. For example, 
&lt;h1&gt; for headings, &lt;p&gt; for paragraphs, &lt;a&gt; for links, etc. </p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">Attributes:</span> HTML elements can have attributes that provide additional information. For example, the href attribute in the &lt;a&gt;tag specifies the link destination.</p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">Document Structure: :</span> An HTML document starts with &lt;!DOCTYPE html&gt;, followed by &lt;html&gt;, &lt;head&gt;, and &lt;body&gt; tags. The &lt;head&gt; contains metadata, and the &lt;body&gt; contains the content.</p>


 </div>
</div>

<div className="flex items-center w-full h-auto px-20">
  <img className="w-full h-auto px-20 md:relative md:visible" src={Line2} alt="Description of the image"/>
</div>


<div className="flex flex-wrap-reverse justify-between h-auto lg:flex-nowrap head">
<div className=" mt-5 md:mt-0 flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className=" md:w-[564px] h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2C2C2C]">

 <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> CSS (Cascading Style Sheets)</span></h3>
{/* <p className="">CSS coding is a language which allows you to create great visually appealing web pages about the styles, fonts, colours. CSS describes about how HTML elements are displayed on the screen. CSS saves lots of work. These CSS style sheets are external which can be stored as CSS files </p> */}

<p className="">CSS is the language used to describe the presentation (look and formatting) of a document written in HTML. It controls the layout, colours, fonts, and overall visual appearance.</p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">Selectors:</span> : CSS uses selectors to target HTML elements. For example, p targets all  &lt;p &gt; elements, and #header targets an element with the id header.</p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">Properties and Values:</span>  CSS rules are made up of properties and values. For example, color: blue; sets the text colour to blue.

</p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">Cascading:</span>  The cascading aspect means that styles can be applied from multiple sources and combined, with more specific rules overriding more general ones.</p>

{/* <div>
  <button className="  font-Poppins not-italic font-semibold text-[20px] leading-[30px] box-border w-[220px] h-[60px] bg-[#FFFFFF] border-[1px] border-[solid] border-[#2AB6C5] rounded-[10px]  text-[#87C38C]"> Enroll Now</button>
</div> */}
 </div>
<div className="relative flex items-center  md:w-[450px] justify-center md:left-10  child2" > <img draggable="false" className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={Img2} /> </div>
</div>
<div className="flex items-center w-full h-auto px-20">
  <img className="w-full h-auto px-20 md:relative md:visible" src={Line1} alt="Description of the image"/>
</div>


<div className="flex flex-wrap justify-between h-auto lg:flex-nowrap head">
<div className="relative flex items-center  md:w-[450px] justify-center md:right-10  child2" > <img draggable="false" className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={Img3} /> </div>

<div className=" mt-5 md:mt-0 flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
{/* <h3 className=" md:w-[564px] h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2C2C2C]"> What you will learn in <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> Javascript?</span></h3> */}
<h3 className=" md:w-[564px] h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2C2C2C]">

 <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> JavaScript</span></h3>
{/* <p className="">CSS coding is a language which allows you to create great visually appealing web pages about the styles, fonts, colours. CSS describes about how HTML elements are displayed on the screen. CSS saves lots of work. These CSS style sheets are external which can be stored as CSS files </p> */}

<p className="">JavaScript is a programming language that allows you to implement complex features on web pages. It enables dynamic content, interactivity, and behaviours.</p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">Client-Side Scripting:</span>  JavaScript is primarily used for client-side scripting, meaning it runs in the user’s web browser.</p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]"> DOM Manipulation: </span> JavaScript can manipulate the Document Object Model (DOM) to dynamically change the content, structure, and style of a web page.</p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]"> Event Handling: </span> JavaScript can handle events such as clicks, form submissions, and keyboard input to make web pages interactive.</p>
 </div>

</div>
<div className="flex items-center w-full h-auto px-20">
  <img className="w-full h-auto px-20 md:relative md:visible" src={Line2} alt="Description of the image"/>
</div>

<div className="flex flex-wrap-reverse justify-between h-auto lg:flex-nowrap head">
<div className=" mt-5 md:mt-0 flex flex-col space-y-5 md:w-[765px] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className=" md:w-[564px] h-[auto] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2C2C2C]">

 <span className="w-[464px] h-[48px] font-Poppins not-italic font-bold text-[32px] leading-[48px] text-[#2AB6C5]"> Python Django</span></h3>
<p className="">Python Django is a high-level Web framework which allows you to create Web page efficiently and quickly. Django is also known as batteries included framework because it provides built-in features such as Django Admin Interface, default database – SQLite3, etc.  It promotes rapid development and clean, pragmatic design. Created to help developers take applications from concept to completion as swiftly as possible, Django emphasizes reusability, less code, and the principle of "Don't Repeat Yourself" (DRY).</p>
 </div>
<div className="relative flex items-center  md:w-[450px] justify-center md:left-10  child2" > <img draggable="false" className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={Img4} /> </div>
</div>

<div className="flex items-center w-full h-auto px-20">
  <img className="w-full h-auto px-20 md:relative md:visible" src={Line1} alt="Description of the image"/>
</div>

<div className="flex flex-wrap justify-between h-auto lg:flex-nowrap head">
<div className="relative flex items-center  md:w-[450px] justify-center md:right-10  child2" > <img draggable="false" className="  h-[230px] w-[300px] md:w-[350px] md:h-[300px]" src={Img5} /> </div>

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
<div className="flex flex-wrap mt-10 justify-around item-center py-5 w-[full] h-[100px] bg-[#E6FEFF] ">
      <p className="w-[auto] h-[auto] font-Poppins not-italic font-semibold text-[20px] leading-[28px] text-[#2AB6C5]" > For Further Enquires<p className="w-[162px] h-[30px] top-[1756px] left-[205px] gap-0 opacity-[0px] font-Poppins text-[17px] font-semibold leading-[30px] text-left text-[#81C592]">+91 75581 08333 </p></p>
      <ContactUs/>

       </div>
<br/>
<br/>
<br/>
       
<div className="flex h-auto head">
<div className="  flex flex-col space-y-5 md:w-[full] h-auto font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">
<h3 className="md:w-[full] h-[auto] font-Poppins not-italic font-bold text-[22px] leading-[28px] text-[#2C2C2C]">Why you want to learn<span className="w-[full] h-[48px] font-Poppins not-italic font-bold text-[22px] leading-[28px] text-[#2AB6C5]">  HTML, CSS, JavaScript,  Python Django, MySQL or Mongo DB?</span> </h3>


<p className="">Learning HTML, CSS, JavaScript, Python Django, MySQL, and MongoDB offers a comprehensive skill set for web development.  </p>
<ul className="list-[disc] relative left-4 space-y-3">
<li>HTML is the standard markup language for creating web pages. It structures the content on the web</li>
<li> CSS is used to style and layout web pages. It controls the look and feel of the website, making it visually appealing.</li>
<li> JavaScript is essential for creating interactive web pages. It allows for dynamic content updates without reloading the page</li>
<li> Django is a high-level Python web framework that promotes rapid development and clean, pragmatic design.</li>
<li> MySQL is a popular relational database management system. It is widely used for structured data storage and complex queries.</li>
<li> MongoDB is a NoSQL database, which allows for flexible and scalable data models. It is ideal for applications that need to handle large amounts of unstructured data. </li>
</ul>
 </div>
</div>
<br/>
<br/>
<h3 className="md:w-[full] h-[auto] font-Poppins not-italic font-bold text-[22px] leading-[28px] text-[#2C2C2C]"><span className="w-[full] h-[48px] font-Poppins not-italic font-bold text-[22px] leading-[28px] text-[#2AB6C5]">  Benefits of Learning These Technologies Together:</span> </h3>
{/* <div>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">Data Management:    </span> MySQL allows you to organize and store data efficiently in a structured format, making it easier to retrieve, manipulate, and analyze information. </p>
</div>

<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]"> Scalability:   </span> MySQL is capable of handling large volumes of data and can scale to accommodate growing applications, making it suitable for projects of all sizes. </p>
<p className=""><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]"> Versatility:  </span>MySQL is used across various industries and applications, from small websites to large enterprise systems, providing valuable skills applicable to diverse projects.  </p> */}

 <div className="flex flex-col h-[auto] mt-5 space-y-10">
 <div>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]"><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]"> Full-Stack Development: </span> Combining these technologies provides the knowledge to handle both front-end and back-end development, making you a full-stack developer. </p> 

</div>
<div>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]"><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]"> Job Market Demand:  </span> Full-stack developers are in high demand, as they can build and maintain entire web applications. </p> 

</div>

<div>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]"><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">Complete Project Ownership: </span> Being proficient in these technologies allows you to manage and develop complete web projects from scratch, giving you more control over the development process.  </p>
</div>
<div>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]"><span className="font-Poppins not-italic font-semibold text-[16px] leading-[24px] text-[#2C2C2C]">Versatile Skill Set: </span>  This combination of technologies equips you with a versatile skill set that is applicable to a wide range of web development projects, from simple websites to complex web applications.  </p>
</div>
</div>
<br/>

<div className="flex flex-wrap-reverse md:flex-nowrap "> 
<div> 
<p className=" mt-5 md:mt-0 font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">In summary, learning HTML, CSS, JavaScript, Python Django, MySQL, and MongoDB equips you with a robust and versatile skill set that covers all aspects of web development, making you a valuable asset in the job market and enabling you to build comprehensive and scalable web applications.</p>
<br/>
<p className="font-Poppins not-italic font-normal text-[16px] leading-[24px] text-[#848484]">Perkins Campus is the best Institute in Nagercoil, Kanyakumari to learn comprehensive full stack development courses (HTML, CSS, JavaScript, Python Django, MySQL or Mongo DB). Join Perkins Campus and learn the Full stack Development course. We provide access to our learning materials, resources and the experience which you want to success in the field of Web Development.</p>
<br/>

<div>
<Button/>

</div>
</div>
<img draggable="false" src={Img6}/>

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