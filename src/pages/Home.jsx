import React from "react";
import Home from "../components/home/Home";
import Navbar from "../components/navbar/Navbar";
import About from "../components/about/About";
import Courses from "../components/courses/Courses";
import Contact from "../components/contact/Contact";
import {FAQ} from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

const pages = () => {
  return (
    <div>
      <Home />
      <br/>
      <About />
      <br/>
      <Courses />
      <br/>
      <Contact />
<FAQ/>
    </div>
  );
};

export default pages;
