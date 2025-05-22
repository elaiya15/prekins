import React from 'react';
import Html from './img/frontEnd.png';
import Backend from './img/BackEnd.png';
import FullStack  from './img/FullStack.png';
import uiux from './img/uiux.png';
import Digital from './img/Digital.png';
import { Link  } from "react-router-dom";
import {Helmet} from "react-helmet";

const Courses = () => {
  // Sample course data
  const courses = [
    {
      id: 1,
      title: 'Frontend Development',
      description: 'A Front-End development is creating websites and web applications. The difference between Front-End and Back-End is that Front End refers to how a web page looks, while back-end refers to how it works. Front-end development focuses on the user interface and user experience.',
      image: Html, 
      link:"/courses/list/frontend"
    },
    {
      id: 2,
      title: 'Backend Development',
      description: ' Backend development is a crucial aspect of web and software development, focusing on server-side logic, databases, and application integration. As a backend developer, you’ll be responsible for building and maintaining the server-side components of a web application. ',
      image: Backend, 
       link:"/courses/list/backend"
    },
    {
      id: 3,
      title: 'Full stack Development ',
      description: 'Master full-stack development with our comprehensive training course. Gain hands-on experience in front-end and back-end technologies to build dynamic, SEO-optimized websites and applications.  ',
      image: FullStack, 
      link:"/courses/list/fullstack"

    },
    {
      id: 4,
      title: 'UI/UX designing',
      description: ' Our UI/UX designing courses offer comprehensive training in user research, wire framing, prototyping, and usability testing, equipping students with practical skills and hands-on experience to excel in the field. ',
      image: uiux, 
      link:"/courses/list/design"
      
    },
    {
      id: 5,
      title: 'Digital Marketing',
      description: 'Our digital marketing courses provide in-depth knowledge of SEO, social media, content marketing, and analytics, empowering you to drive online growth and engagement. Join us to master the strategies and tools needed for successful digital campaigns. ',
      image: Digital, 
         link:"/courses/list/digital"
    },
   
  ];


  return (
    <div onContextMenu={(e) => e.preventDefault()}  draggable="false" >
    <Helmet>
                <meta charSet="utf-8" />
                <title> Our Courses | Perkins Campus</title>
                <meta name="description" content="Perkin Campus offers professional courses includes software development, UI/UX designing, Digital Marketing. Find the best Courses online and enhance your Skills from the experts."/>
                <meta name="keywords" content="Campus courses, software development courses, software programming courses, software developer training, best software development courses" />
            </Helmet>
      <div  onContextMenu={(e) => e.preventDefault()} className="relative flex flex-col bottom-1 px-5 md:px-[15px] lg:px-[87px] bg-[#ffffff] w-full select-none">
        <div className="flex relative flex-col justify-center items-center mt-0 px-6 w-full py-10 bg-[#ffffff]">
          <h2 className="text-center w-full max-w-[565px] text-[40px] font-Poppins not-italic font-semibold text-[#2AB6C5]">
            Our
            <span className="px-3 text-[#2C2C2C] font-Poppins text-[40px] font-bold leading-[81px] text-left">Courses</span>
          </h2>
          <p className="px-0 md:px-[15px] lg:px-[87px] py-5 w-full lg:max-w-5xl text-[17px] font-Poppins not-italic font-normal text-[#848484] text-center">
          Explore our courses designed for the modern learner, blending innovation with tradition to offer
dynamic learning experiences tailored to your goals. Join us and embark on a journey of discovery and
growth with our diverse range of unique courses.
          </p>
        </div>
       
        <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3 lg:py-5 ">
            {courses.map((item, index) => (
              <Link to={item.link} key={index} className="flex flex-col items-center p-4 border-[1px] border-[solid] border-[#2AB6C5] rounded-[14px] hover:border-[#2AB6C5] hover:shadow-xl hover:cursor-pointer shadow-lg">
                <img className="flex w-16 h-16 mb-4 lg: " src={item.image} alt={item.title} />
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="mt-2 font-Poppins not-italic  font-normal text-[16px] leading-[24px] text-[#848484] text-center">{item.description}</p>
              </Link>
            ))}
          </div>
      </div>
      
    </div>
  );
};

export default Courses;
