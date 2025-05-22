import React from 'react'
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Contact from "../components/contact/Contact";
import {FAQ} from "../components/contact/Contact";
import {MapEmbed} from "../components/contact/Contact";
const Contacts = () => {
  return (
    <div className="" >
        <Contact />
        <br/>
        <MapEmbed />
        <br/>
        <br/>
      <FAQ />
      <br/>
     
    </div>
  )
}

export default Contacts
