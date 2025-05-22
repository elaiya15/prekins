import React from "react";
import img1 from './img/img1.svg';
import img2 from './img/img2.svg';
import img3 from './img/img3.svg';
import img4 from './img/img4.svg';
import {Helmet} from "react-helmet";


const About = () => {
  return (
    <div>
    <Helmet>
                <meta charSet="utf-8" />
                <title> Best software training institute in Nagercoil | Perkins Campus</title>
                <meta name="description" content="Perkin Campus is a leading Software training institute in Nagercoil offering software education courses for professionals and students. Join Now." />
                <meta name="keywords" content=" Software training institute in nagercoil, Best it training institute in nagercoil , Software Courses learning nagercoil, Professional courses institute nagercoil , Best software training institute in Nagercoil, IT training in Nagercoil " />
            </Helmet>
      <div  onContextMenu={(e) => e.preventDefault()} className="relative flex flex-col select-none">
      <div className=" bg-white flex relative flex-col justify-center items-center mt-0 px-6 w-full py-10  md:px-[15px] lg:px-[89px]">
          <h2 className="text-center w-full max-w-[565px] text-[40px] font-Poppins not-italic font-semibold text-[#2AB6C5] ">
          About
            <span className="px-3 text-[#2C2C2C]  font-Poppins text-[40px] font-bold leading-[81px] text-left">Us</span>
          </h2>
          <p className="px-5 md:px-[15px] lg:px-[87px] py-5 w-full max-w-5xl text-[17px] font-Poppins not-italic font-normal text-[#848484] text-center">
          Perkins Campus is an educational institution in Nagercoil, Kanyakumari, India provides comprehensive software development courses aimed at equipping students with the necessary skills to excel in the tech industry.

          </p>
        </div>
       
        <div className="flex flex-col items-center justify-center px-5 md:px-[15px] lg:px-[88px]  w-full bg-[#ffffff]">
          <div className=" grid lg:grid-cols-3 gap-5 justify-around xl:gap-10 xl:justify-between w-full xl:w-[1/3] mt-10 lg:py-6 lg:px-0">
          
              <div className=" lg:col-span-2  flex flex-col gap-3 w-full  p-5 mt-0 box-shadow  [box-shadow:4px_4px_14px_1px_rgba(46,_182,_196,_0.2)] rounded-[14px]">
                <h1 className="font-Poppins font-semibold text-[40px]  leading-[60px] text-[#2C2C2C]">1.</h1>
                <h3 className="font-Poppins font-semibold text-[20px] leading-[30px] text-[#2C2C2C]">Who we are?</h3>
                <p className=" font-Poppins text-[16px] text-left leading-[30px] text-[#848484]">We are a leading institution committed to empowering individuals with visual impairments through specialized education, cutting-edge technology, and comprehensive support services. Our dedicated team works tirelessly to foster independence and unlock each student’s potential.</p>
              </div>
              <div className="flex flex-col gap-3 w-full     p-5 mt-0 box-shadow  [box-shadow:4px_4px_14px_1px_rgba(46,_182,_196,_0.2)] rounded-[14px]">
                <h1 className="font-Poppins font-semibold text-[40px]  leading-[60px] text-[#2C2C2C]">2.</h1>
                <h3 className="font-Poppins font-semibold text-[20px] leading-[30px] text-[#2C2C2C]">
What do we do? </h3>
                <p className="    font-Poppins text-[16px] leading-[30px] text-left text-[#848484]">At Perkins Campus, we provide a wide range of professional and technical courses designed to equip students with the skills and knowledge.</p>
                </div>
                <div className="flex flex-col gap-3 w-full  p-5 mt-0 box-shadow  [box-shadow:4px_4px_14px_1px_rgba(46,_182,_196,_0.2)] rounded-[14px]">
                <h1 className="font-Poppins font-semibold text-[40px]  leading-[60px] text-[#2C2C2C]">3.</h1>
                <h3 className="font-Poppins font-semibold text-[20px] leading-[30px] text-[#2C2C2C]">
                How do we help? </h3>
                <p className="  font-Poppins text-[16px] leading-[30px] text-left text-[#848484]">We help by providing personalized support, innovative resources, and real-world experience, empowering individuals to achieve their goals.</p>
                </div>
                <div className=" lg:col-span-2   flex flex-col gap-3 w-full  p-5 mt-0 box-shadow  [box-shadow:4px_4px_14px_1px_rgba(46,_182,_196,_0.2)] rounded-[14px]">
                <h1 className="font-Poppins font-semibold text-[40px]  leading-[60px] text-[#2C2C2C]">4.</h1>
                <h3 className="font-Poppins font-semibold text-[20px] leading-[30px] text-[#2C2C2C]">Mission & Vision</h3>
                <p className="  font-Poppins text-[16px] leading-[30px] text-left text-[#848484]">To cultivate a community where curiosity sparks innovation, and diversity fuels excellence. To pioneer a transformative approach to education, empowering individuals to shape a brighter future.
</p>
              </div>
             
               
               
             
          
          </div>
        </div>
        
      </div>
     
    </div>
  );
};

export default About;

export const WeOffer = () => {
  const OfferCourses = [
    {
      id: 1,
      title: 'Comprehensive Courses',
 description: "At Perkins Campus, our comprehensive courses are meticulously designed to cover all essential aspects of each subject area, providing students with a thorough understanding and practical expertise. ",
      image: img1, 
    },
    {
      id: 2,
      title: 'Hands-on Learning',
      description: 'We prioritize hands-on learning to ensure that students gain practical experience and real-world skills.',
      image: img2, 
    },
    {
      id: 3,
      title: 'Experienced Instructors',
      description: 'Our courses are taught by experienced instructors who bring a wealth of industry knowledge and practical expertise to the classroom.',
      image: img3, 
    },
    {
      id: 4,
      title: 'Career Supports',
      description: 'We’re committed to guiding students toward successful careers through personalized career support services.',
      image: img4, 
    }
   
  ];


  return (
    <div onContextMenu={(e) => e.preventDefault()} className="flex flex-col w-full py-10 mt-0 select-none">
     <div className="flex relative flex-col justify-center items-center mt-0 px-6 w-full py-10 bg-[#ffffff]">
          <h2 className="text-center w-full max-w-[565px] text-[40px] font-Poppins not-italic font-semibold text-[#111111]">
          What We
            <span className="px-3 text-[#2AB6C5]  font-Poppins text-[40px] font-bold leading-[81px] text-left">Offer</span>
          </h2>
          <p className="px-5 md:px-[15px] lg:px-[87px] py-5 w-full max-w-5xl text-[17px] font-Poppins not-italic font-normal text-[#848484] text-center">
          At Perkins Campus, we offer a diverse range of high-quality educational programs designed to meet
the needs of today’s dynamic job market.
          </p>
        </div>

      <div className="grid w-full gap-10 lg:grid-cols-2 mt-5 px-5 md:px-[15px] lg:px-[88px]  ">
        {OfferCourses.map((item) => (
          <div key={item} className="  lg:col-span-1  flex flex-col h-[auto]  rounded-[20px] relative item-0   justify-start gap-[0px]  w-full ">
            <img className="border-[1px] border-[solid] rounded-md bg-[#ffffff] border-[#2AB6C5] md:left-20 left-10 relative top-4 w-[65px] h-[65px]" src={item.image} alt="Comprehensive" />
            <div className="px-5 py-2 min-h-[200px] bg-[#ffffff]  font-Poppins not-italic font-semibold text-[18px] leading-[29px] text-[#2C2C2C] border border-solid border-[#2AB6C5] box-shadow border-[solid] [box-shadow:0px_4px_6px_2px_rgba(42,_182,_197,_0.2)] rounded-[20px]" >
              <h3 className=" py-5 font-Poppins font-semibold text-[18px] leading-[29px] text-[#2C2C2C]">{item.title}</h3>
              <p className="font-Poppins  text-[16px]  font-normal leading-[24px] text-left text-[#848484]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
