/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Route, Routes,useNavigate  } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Course from "./pages/Course";
import Career from "./pages/Career";
import Gallerys from "./pages/Gallerys";
import Contacts from "./pages/Contacts";
import Blogs from "./pages/Blogs";
import {BlogPagePreview} from "./components/blogs/Blog";
import Form from "./components/joningForm/form";
import FrontEnd from "./components/courses/Frontend/FrontEnd";
import HtmlCss from "./components/courses/Frontend/Html/HtmlCss";
import Reactpage from "./components/courses/Frontend/React/React";
import Wordpress from "./components/courses/Frontend/wordpress/Wordpress";
import List from './components/courses/List'
import BackEnd from './components/courses/Backend/BackEnd'
import  Python from './components/courses/Backend/python/python'
import  Node from './components/courses/Backend/nodejs/Node'
import Design from './components/courses/Design/Design'
import UiDesign from './components/courses/Design/UIDesign/UIDesign'
import UI_Ux_Design from './components/courses/Design/Ui_UX_Design/UI_Ux_Design'
import VisualUIDesign from './components/courses/Design/VisualUIDesign/VisualUIDesign'
import Visual_Ui_Ux_Design from './components/courses/Design/Visual_Ui_Ux_Design/Visual_Ui_Ux_Design'
import FullStack from './components/courses/FullStackDevelopement/FullStack'
import HtmlFullstack from './components/courses/FullStackDevelopement/Html/HtmlFullstack'
import RPDM from './components/courses/FullStackDevelopement/RPDM/RPDM'
import RNM from './components/courses/FullStackDevelopement/RNM/Html/RNM'
import DigitalMarketing from './components/courses/DigitalMarketing/DigitalMarketing'
import Digital_Fragment_1 from './components/courses/DigitalMarketing/Digital_Fragment_01/Digital_Fragment_1'
import Digital_Fragment_2 from './components/courses/DigitalMarketing/Digital_Fragment_02/Digital_Fragment_2'
const url=import.meta.env.VITE_API_URL
import Footer from "./components/footer/Footer";
import { useEffect } from 'react';
import ScrollToTop from './reused/ScrollToTop'

function App() {

  
// import { BrowserRouter, Route, Routes,useNavigate  } from "react-router-dom";

//   const navigate = useNavigate();
//   const Enroll=()=>{
//     navigate("/contact"); }

//onClick={Enroll}
  


// useEffect(() => {
    

  //   const handleKeyDown = (e) => {
  //     // Cross-browser key detection
  //     const key = e.key || e.keyCode || e.which;  
  //     if (
  //       key === 'F12' || key === 123 || // F12
  //       (e.ctrlKey && e.shiftKey && (key === 'I' || key === 'i' || key === 73)) || // Ctrl+Shift+I
  //       (e.ctrlKey && e.shiftKey && (key === 'J' || key === 'j' || key === 74)) || // Ctrl+Shift+J
  //       (e.ctrlKey && (key === 'U' || key === 'u' || key === 85)) // Ctrl+U
  //     ) {
  //       e.preventDefault();
  //     }
  //   };

  //   document.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     document.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, []);


  return (
    <>
      <BrowserRouter >
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="courses/list" element={<List />} >
          <Route path="frontend" element={<FrontEnd />}/>
          <Route path="frontend/html" element={<HtmlCss />} />
          <Route path="frontend/react" element={<Reactpage />} />
          <Route path="frontend/wordpress" element={<Wordpress />} />
         
          <Route path="backend" element={<BackEnd />} />
          <Route path="backend/python" element={<Python />} />
          <Route path="backend/node" element={<Node />} />
          <Route path="fullstack" element={<FullStack />} />
          <Route path="fullstack/html" element={<HtmlFullstack />} />
          <Route path="fullstack/rpdm" element={<RPDM/>} />
          <Route path="fullstack/rnm" element={<RNM/>} />
          <Route path="design" element={<Design />} />
          <Route path="design/ui" element={<UiDesign />} />
          <Route path="design/visual_ui" element={<VisualUIDesign />} />
          <Route path="design/ui_ux_design" element={<UI_Ux_Design />} />
          <Route path="design/visual_ui_ux_design" element={<Visual_Ui_Ux_Design />} />
          <Route path="digital" element={<DigitalMarketing />} />
          <Route path="digital/Fragment_1" element={<Digital_Fragment_1/>} />
          <Route path="digital/Fragment_2" element={<Digital_Fragment_2/>} />
          </Route>
          {/* <Route path="courses/frontend" element={<FrontEnd />} /> */}
          <Route path="courses" element={<Course />}/>
          <Route path="career" element={<Career />} />
          <Route path="career/form" element={<Form />} />
          <Route path="gallery" element={<Gallerys />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="blogs" element={<Blogs/>} />
          <Route path="blogs/Preview" element={<BlogPagePreview/>} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;




// import {useNavigate  } from "react-router-dom";


// export const Button = () => {

//   const navigate = useNavigate();

//   const Enroll=()=>{
//     navigate("/contact"); }
  
//   return (
//     <div>
//  <button onClick={Enroll}  className="font-Poppins not-italic font-semibold text-[20px] leading-[30px] box-border w-[220px] h-[60px] bg-[#FFFFFF] border-[1px] border-[solid] border-[#2AB6C5] rounded-[10px]  text-[#87C38C] "> Enroll Now</button>

//     </div>
//   )
// }


// export const ContactUs = () => {

//   const navigate = useNavigate();

//   const Enroll=()=>{
//     navigate("/contact"); }
  
//   return (
//     <div>
//       <p onClick={Enroll} className="w-[auto] px-2 h-[40px] py-2 hover:cursor-pointer  rounded text-center border-[2px]  border-[solid] bg-[#2AB6C5] border-[#2AB6C5]  font-Poppins not-italic font-bold text-[20px] leading-[20px] text-[#FFFFFF]">Contact Us </p>
 
//     </div>
//   )
// }