import React from 'react'
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Courses from '../components/courses/Courses'
const Course = () => {
  return (
    <div className=""   draggable="false" onContextMenu={(e) => e.preventDefault()}>
       <br/>
       <Courses />
      
    </div>
  )
}

export default Course
