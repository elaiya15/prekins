/* eslint-disable no-unused-vars */
import React, { useState, useRef ,useEffect} from 'react';
import Slider from 'react-slick';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const url=import.meta.env.VITE_API_URL
import './gallery.css'
import p1 from './img/p1.png';
import p2 from './img/p2.png';
import p3 from './img/p3.png';
import p4 from './img/p4.png';
import p5 from './img/p5.png';
import p6 from './img/p6.png';
import p7 from './img/p7.png';
import p8 from './img/p8.png';
import p9 from './img/p9.png';
import p10 from './img/p10.png';
import p11 from './img/p11.png';
import p12 from './img/p12.png';

import { Helmet } from "react-helmet";
// import { useState } from 'react';

const Gallery = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const handleVideoPlay = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const handleVideoPause = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  const [data, setData] = useState(null); // State to store fetched data
  // const [loading, setLoading] = useState(true); // State to handle loading state
  // const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        // Replace with your API URL
        const response = await axios.get(`${url}api/gallery/list`);
       console.log(response.data);
        setData(response.data); // Set data from the response
      } catch (err) {
        // setError(err.message); // Set error if any
      } finally {
        // setLoading(false); // Set loading to false after request completes
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div onContextMenu={(e) => e.preventDefault()} draggable="false" >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gallery | Perkins Campus</title>
        <meta name="description" content=" 
        Perkins Campus gallery is a digital collection showcasing our vibrant campus life, events, and academic achievements through captivating images and media. It offers a glimpse into our dynamic community and educational environment." />
        <meta name="keywords" content=" Gallery" />
      </Helmet>
      
      <div onContextMenu={(e) => e.preventDefault()} className="flex relative  flex-col justify-center items-center mt-0 px-6 w-full py-10 bg-[#ffffff] md:px-[15px] lg:px-[89px] select-none">
        <h2 className="text-center w-full max-w-[565px] text-[40px] font-Poppins not-italic font-semibold text-[#000000] bg-[#ffffff]">
          Gallery
        </h2>
        <p className="py-5 w-full max-w-2xl font-Poppins text-[17px] leading-[30px] text-center text-[#848484] bg-[#ffffff]">
          Discover our vibrant community through our Gallery, featuring highlights of events, student achievements, and campus life. Visit our Gallery page to experience the essence of our school in pictures and videos.
        </p>
      </div>
      <div className="flex flex-col relative justify-center space-y-4 bg-blue-100 w-full min-h-[400px]   md:h-[480px]  items-center md:px-[15px] lg:px-[89px]">
        <Slider  className="py-0 w-10/12   flex flex-col justify-center   bg-black-500  md:w-[50em] "{...settings} ref={sliderRef}>
          <div>
            <video muted  controls controlsList="nodownload" className="w-full min-h-[auto] md:h-[500px] space-y-12" onPlay={handleVideoPlay} onPause={handleVideoPause} onEnded={handleVideoPause}>
              <source src="https://nodejs.perkinscampus.com/uploads/files-1721711506326.mp4" type="video/mp4" />
             
            </video>
            {/* <a href="https://www.w3schools.com/html/mov_bbb.mp4" download className="block mt-2 text-center text-blue-500">Download Video</a> */}
          </div>
          <div>
            <video muted  controls controlsList="nodownload" className="w-full h-40 md:h-auto " onPlay={handleVideoPlay} onPause={handleVideoPause} onEnded={handleVideoPause}>
              {/* <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" /> */}
              Your browser does not support the video tag.
            </video>
            {/* <a href="http://techslides.com/demos/sample-videos/small.mp4" download className="block mt-2 text-center text-blue-500">Download Video</a> */}
          </div>
          <div>
            <video muted  controls controlsList="nodownload" className="w-full h-40 md:h-auto" onPlay={handleVideoPlay} onPause={handleVideoPause} onEnded={handleVideoPause}>
              {/* <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" /> */}
              Your browser does not support the video tag.
            </video>
            {/* <a href="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" download className="block mt-2 text-center text-blue-500">Download Video</a> */}
          </div>
          <video muted  controls controlsList="nodownload" className="w-full min-h-[auto] md:h-[500px] space-y-12" onPlay={handleVideoPlay} onPause={handleVideoPause} onEnded={handleVideoPause}>
              <source src="https://youtu.be/s4MvQWsEAs8" type="video/mp4" />
              
            </video>
        </Slider>
      </div>
<br/>
<br/>
<br/>
<br/>
      <div className=" relative flex flex-col px-6 w-full py-10 md:px-[15px] bg-slate-300 lg:px-[89px]">
        <div className="grid gap-4 grid-cols-0 md:grid-cols-4 sm:grid-cols-3">
          {[p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12].map((image, index) => (
            <div key={index} className="flex flex-col justify-around">
              <img draggable="false" onContextMenu={(e) => e.preventDefault()} key={index} className="" src={image} alt={`Gallery Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
};

export default Gallery;
