import React, { useState } from "react";
import {Helmet} from "react-helmet";
// const url = import.meta.env.VITE_API_LOCAL;
const url = import.meta.env.VITE_API_URL;
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import email from "./img/email.png";
import phone from "./img/phone.png";
import location from "./img/location.png";

const Contact = () => {
  const notify = () => toast.success("Message Sent successfully");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });

  const [selectedCheckbox, setSelectedCheckbox] = useState('');
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    setSelectedCheckbox(e.target.id);
    setFormData((prevData) => ({
      ...prevData,
      subject: e.target.id
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // console.log(formData);  
    
      const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim();
      const updatedUserInfo = {
        ...formData,
        name: fullName
    }
    delete updatedUserInfo.firstName;
    delete updatedUserInfo.lastName;
    updatedUserInfo.mobile_number=updatedUserInfo.phoneNumber
    delete updatedUserInfo.phoneNumber;

    // console.log(updatedUserInfo);
    try {
      const response = await axios.post(`${url}api/enquiries&messages/add/new`,{updatedUserInfo});
      // console.log(response);
      
     if (response&&response.data.message==="Message Sent successfully") {
      notify()
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        subject: "",
        message: ''
      });
     }
     

    } catch (error) {
      console.error(error);
    }
    
  }
}
  return (
  
     <>
            <Helmet>
                <meta charSet="utf-8" />
                <title> Perkins Campus - Contact Us</title>
                <meta name="description" content="Perkins Campus is a best Software Training Institute in Nagercoil, Kanyakumai. Call us 7558108333 and email perkinscampus@gmail.com for enquiries" />
                <meta name="keywords" content=" Top Computer Training Institutes in Nagercoil, Computer Institute In Nagercoil, Software Training in Nagercoil, Computer center in nagercoil" />
            </Helmet>
      <div className="flex flex-col items-center justify-center py-10bg-[#ffffff] select-none">
       <ToastContainer />
      <div className="flex relative flex-col justify-center items-center mt-0 px-6 w-full py-10 bg-[#ffffff]  md:px-[15px] lg:px-[89px]">
      {/* <div className="flex flex-col items-center w-full px-5 md:px-[15px] lg:px-[87px] justify-center  py-10 bg-white md:px-"> */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 select-none md:text-4xl">
          Contact <span className="text-teal-500">Us</span>
        </h2>
        <p className="mt-4 text-base text-center text-gray-600 select-none md:text-lg">
          Any question or remarks? Just write us a message!
        </p>
        <br/>
        <div className="flex flex-col justify-evenly  w-full bg-white  lg:p-20 md:space-x-0 lg:space-x-16 mt-8 overflow-hidden   rounded-lg shadow-md md:flex-row [box-shadow:0px_0px_60px_30px_rgba(46,_182,_196,_0.1),0px_0px_60px_30px_rgba(46,_182,_196,_0.1)] ">
          <div className="flex flex-col items-center p-10 space-y-10 md:p-6 md:w-1/2">
            <span className="lg:w-[320px] w-[300px] h-[54px] font-Poppins not-italic font-medium lg:text-[36px] text-[26px]  leading-[54px] text-[#505050]" >Contact Information</span>
            <div className="flex justify-between gap-x-5 w-[310px] mt-4 text-gray-600">
              <img className="w-6 h-6 mr-2" src={phone} alt="phone" />
              <div  className="relative select-text right-32"> +91 75581 08333 </div>
            </div>
            <div className="flex justify-between gap-x-5 w-[310px] mt-4 text-gray-600 ">
              <img className="w-6 h-6 mr-2" src={email} alt="email" />
              <div  className="relative select-text right-14"> Perkinscampus@gmail.com </div>
            </div>
            <div className="flex select-text justify-between gap-x-5 w-[310px] items-center mt-4 text-start text-gray-600">
              <img className="relative w-6 h-6 mr-2 bottom-6 md:bottom-8" src={location} alt="location" />
              <div  className="relative left-0 ">
              No: 389. Joe Daniel Street, Near Paalpannai, Nagercoil, Kanyakumari District. Tamil Nadu - 629 003
            </div>
            </div>
          </div>
          <div className="px-6 py-10 lg:p-6 md:w-700px ">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 md:gap-14 md:grid-cols-2">
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 text-base placeholder-gray-600 border-b-2 border-gray-300 focus:border-teal-500 focus:outline-none"
                    placeholder="First Name"
                  />
                  {errors.firstName && <span className="text-sm text-red-500">{errors.firstName}</span>}
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 text-base placeholder-gray-600 border-b-2 border-gray-300 focus:border-teal-500 focus:outline-none"
                    placeholder="Last Name"
                  />
                  {errors.lastName && <span className="text-sm text-red-500">{errors.lastName}</span>}
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 text-base placeholder-gray-600 border-b-2 border-gray-300 focus:border-teal-500 focus:outline-none"
                    placeholder="Email"
                  />
                  {errors.email && <span className="text-sm text-red-500">{errors.email}</span>}
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 text-base placeholder-gray-600 border-b-2 border-gray-300 focus:border-teal-500 focus:outline-none"
                    placeholder="Phone Number"
                  />
                  {errors.phoneNumber && <span className="text-sm text-red-500">{errors.phoneNumber}</span>}
                </div>
              </div>
              <br/>

              
              <p className="mt-4 text-gray-700">Select Subject?</p>
              <div className="flex items-center max-w-md justify-between px-5 md:px-[15px] lg:px-[15px] mt-4">
              <p className="">
                <input
                  id="general-inquiry"
                  type="checkbox"
                  checked={selectedCheckbox === 'general-inquiry'}
                  value={formData.subject}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500"
                />
                <label htmlFor="general-inquiry" className="ml-2 text-sm text-gray-700">
                  General Inquiry
                </label>
                </p>
                <p className="">

                <input
                  id="about-courses"
                  type="checkbox"
                  checked={selectedCheckbox === 'about-courses'}
                  onChange={handleCheckboxChange}
                  value={formData.subject}
                  className="w-4 h-4 ml-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500"
                />
                <label htmlFor="about-courses" className="ml-2 text-sm text-gray-700">
                  About Courses
                </label>
                {errors.subject && <span className="ml-4 text-sm text-red-500">{errors.subject}</span>}
                </p>
              </div>
              <br/>
              <div className="mt-4">
                <label htmlFor="message" className="block text-gray-700">Your message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:border-teal-500 focus:outline-none"
                  placeholder="Leave a comment..."
                ></textarea>
                {errors.message && <span className="text-sm text-red-500">{errors.message}</span>}
              </div>
              <br/>
              <div className="flex justify-end mt-4">
        
                <button type="submit" className="w-32 px-4 py-2 text-white bg-teal-500 border-teal-500 rounded-lg shadow-lg active:shadow-none bg-gradient-to-tr from-teal-500 to-teal-500">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
     
      </div>
      </div>
     
    </>
  );
};

export default Contact;





// import React, { useState } from 'react';

export const FAQ= () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What Tools are Used in UI Design?',
      answer: 'Tools commonly used in UI design include Adobe XD, Sketch, Figma, and InVision, offering features for creating wireframes, mockups, and prototypes, facilitating collaboration among designers and stakeholders for efficient design iterations.',
    },
    {
      question: 'What is the Difference Between UI and UX Design?',
      answer: 'User Interface (UI) Design involves crafting the visual and interactive elements of a digital product, while User Experience (UX) Design encompasses the overall experience and satisfaction users derive from interacting with the product, focusing on usability, accessibility, and emotional aspects.',
    },
    {
      question: 'How long does it take to learn Node.js?',
      answer: 'The time it takes to learn Node.js depends on your prior experience with JavaScript and web development. For beginners, it might take a few months to become proficient. Experienced developers may learn the basics in a few weeks.',
    },
    {
      question: ' Is React suitable for beginners?',
      answer: "Yes, React is suitable for beginners with a basic understanding of HTML, CSS, and JavaScript. Many learning resources are available specifically designed for beginners, and React's component-based architecture makes it easy to learn and use.",
    },
    {
      question: 'Do I need any prior experience to take a MySQL course?',
      answer: 'No prior experience is required for introductory MySQL courses, but a basic understanding of databases and SQL concepts is helpful.',
    },
  ];

  return (
    <div  onContextMenu={(e) => e.preventDefault()} className=" select-none flex flex-col md:flex-row justify-between md:gap-x-5 md:p-5 items-center lg:px-[87px] bg-white">
      <div className="w-full px-10 md:px-0 md:w-[400px] mb-10 md:mb-0">
        <p className="font-Poppins not-italic font-semibold text-[20px] leading-[130%] text-[#323334]">FAQ</p>

        <h2 className="relative mb-4 text-4xl font-bold md:text-6xl font-Poppins">
          Frequently
          <span className="absolute left-0 top-0 text-[#2ab6c5]">F</span>
        </h2>

        <h2 className="relative mb-4 text-4xl font-bold md:text-6xl font-Poppins">
          Asked
          <span className="absolute left-0 top-0 text-[#2ab6c5]">A</span>
        </h2>

        <h2 className="relative mb-4 text-4xl font-bold md:text-6xl font-Poppins">
          Questions
          <span className="absolute left-0 top-0 text-[#2ab6c5]">Q</span>
        </h2>
      </div>
      <div className="w-full max-w-md md:px-0  p-6 bg-[#ffffff86] rounded-lg shadow-md min-w-[300px] lg:min-w-[500px] [box-shadow:0px_0px_60px_30px_rgba(46,_182,_196,_0.1)]">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div
                onClick={() => toggleFAQ(index)}
                className="relative flex items-center text-lg font-medium text-gray-900 cursor-pointer"
              >
                <span
                  className={`absolute left-0 inline-block w-[30px] h-[5px] bg-[#323334] opacity-80 rounded-[20px] transition-transform duration-200 ${openIndex === index ? 'rotate-52 bg-[#328ae2]' : ''}`}
                />
                <span
                  className={`absolute left-0 inline-block w-[30px] h-[5px] bg-[#323334] opacity-80 rounded-[20px] transition-transform duration-200 ${openIndex === index ? 'bg-[#328ae2]' : 'rotate-90'}`}
                />
                <span className="ml-10 font-Poppins font-bold text-[15px]  leading-[23.4px] text-left text-[#323334]">{faq.question}</span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};




export const MapEmbed = () => (
  <div className="flex justify-center w-full px-5 mt-10 h-96 lg:px-[85px]">
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1974.589003948677!2d77.41432885643084!3d8.1848160528433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f0db0480cb9f%3A0x610e718e2556bf9!2sPerkins%20Campus!5e0!3m2!1sen!2sin!4v1718269001710!5m2!1sen!2sin"
      className="w-full h-full border-0"
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
    ></iframe>
  </div>
);
