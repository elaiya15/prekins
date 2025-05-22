/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import About from "../about/About";
import woman from "./woman.svg";
import Tailored from './img/choose/M.png';
import Scheduled from './img/choose/M1.png';
import Practical from './img/choose/M2.png';
import Hands from './img/choose/M3.png';
import Career from './img/choose/M4.png';
import Experience from './img/choose/M5.png';
import {Helmet} from "react-helmet";
import { BrowserRouter, Route, Routes,useNavigate  } from "react-router-dom";



const Home = () => {
  const navigate = useNavigate();
  const Enroll=()=>{
    navigate("/contact"); }
  
    return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title> Software training institute in Nagercoil | Perkins Campus</title>
                <meta name="description" content="Perkins Campus is a best Software training institute in Nagercoil, Kanyakumari offering Software courses for Students, Working professionals with Certifications. We offer Courses in Software development, UI/UX Designing, Digital Marketing etc." />
                <meta name="keywords" content=" Software training institute in nagercoil, Best it training institute in nagercoil, Software Courses learning nagercoil, Top Training Centres in Nagercoil , Professional training and development nagercoil, Professional courses training in nagercoil" />
            </Helmet>
      <div className="relative flex flex-col select-none " onContextMenu={(e) => e.preventDefault()}>
        {/* <Navbar />  */}
        <div className="flex flex-col justify-between px-5 md:px-[15px] lg:px-[87px] lg:flex-row mt-2  relative w-full h-auto shadow-lg  left-0 top-0 rounded-br-[20px] md:[box-shadow:0px_4px_20px_rgba(0,_0,_0,_0.1)] rounded-tl-none rounded-tr-none rounded-bl-[20px] bg-white ">
          <div className=" flex flex-col items-start justify-center lg:h-[690px] w-full p-0 lg:w-1/2 ">
            <h1 className="text-[44px]  font-Poppins  text-justify font-semibold text-gray-800  lg:text-[46px]">
              A wise path will illuminate
              <span className="block pl-5 text-transparent lg:inline bg-gradient-to-t from-green-400 to-blue-500 bg-clip-text">
                your future.
              </span>
            </h1>
            <p className="mt-5 text-base text-gray-600  font-Poppins not-italic font-normal text-[16px] leading-[24px] tracking-wide ">
            Welcome to Perkins Campus, where learning transcends boundaries and creativity thrives. Here, we
blend innovation with education to empower students to excel in their chosen fields. Our community
fosters holistic development through hands-on projects, real-world experiences, and a commitment to
diversity and inclusion. Join us in shaping the leaders of tomorrow at Perkins Campus, where the journey
to success begins.
            </p>
            <button onClick={Enroll} className="px-6 py-2 mt-5 text-lg text-white bg-[#2AB6C5] rounded-lg max-w-40">
              Enquire Now
            </button>
          </div>
          <div className="flex items-center justify-center w-full mt-10 lg:w-1/2 lg:mt-0">
            <img draggable="false" onContextMenu={(e) => e.preventDefault()} className="h-auto max-w-full" src={woman} alt="Woman" />
          </div>
        </div>

        <div className="flex flex-col  bg-[#ffffff]  w-full  ">
        <div className="flex relative flex-col justify-center items-center mt-0 px-6 w-full py-10 bg-[#ffffff]">
          <h1 className="text-center w-full max-w-[565px] text-[40px] font-Poppins not-italic font-semibold  text-gray-800 ">
          Why Choose 
            <span className="px-3 text-[#2AB6C5]  font-Poppins text-[40px] font-bold leading-[81px] text-left">Perkins </span>
          </h1>
          <p className="px-5 md:px-[15px] lg:px-[87px] py-5 w-full max-w-5xl text-[17px] font-Poppins not-italic font-normal text-[#848484] text-center">
          Choose Perkins Campus for its innovative approach to education, personalized support, and
commitment to fostering creativity and diversity. Here, you'll find a vibrant community dedicated to
empowering individuals to excel and make a difference in the world.
          </p>
        </div>
          <div className="px-5 md:px-[15px] lg:px-[87px] w-full justify-between  grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 lg:grid-cols-3  ">
            {[
              { img: Tailored, title: "Tailored Learning", text: "Tailored learning where each student's journey is uniquely crafted to nurture their passions and potential. With personalized support, interactive resources, and diverse opportunities, we empower individuals to thrive in their pursuit of knowledge and success." },
              { img: Scheduled, title: "Scheduled Learning", text: "Scheduled learning is the cornerstone of our approach, ensuring structured yet flexible educational experiences for every student. Our system enables individuals to access curate content at designated times, promoting consistency, accountability, and optimal learning outcomes.  " },
              { img: Practical, title: "Practical Learning", text: "Hands-on experiences, simulations, and immersive projects, we bridge the gap between classroom knowledge and practical skills. Our approach fosters critical thinking, problem-solving, and creativity, empowering students to confidently navigate challenges and excel in their chosen fields. " },
              { img: Hands, title: "Hands on Projects", text: "Engage in hands-on projects to deepen your understanding and develop practical skills that are essential for real-world success. Our immersive approach ensures active learning and empowers you to apply theoretical knowledge in practical scenarios, fostering creativity and innovation. " },
              { img: Career, title: "Career Support", text: " Our career support services are designed to guide you towards your professional aspirations, providing personalized guidance, resources, and networking opportunities to help you succeed in your chosen field." },
              { img: Experience, title: " Experience", text: " Benefit from our seasoned instructors who bring real-world expertise, guiding you to success with personalized support and practical insights. Join us and learn from the best for a transformative educational experience." },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-start p-4 rounded-lg shadow-lg">
                <img draggable="false" onContextMenu={(e) => e.preventDefault()} className="flex w-16 h-16 mb-4 lg: " src={item.img} alt={item.title} />
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="mt-2 font-Poppins not-italic  font-normal text-[16px] leading-[24px] text-[#848484] text-justify">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
