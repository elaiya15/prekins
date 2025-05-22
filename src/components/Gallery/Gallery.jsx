import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import axios from 'axios';
import YouTube from 'react-youtube';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './gallery.css';
import { Helmet } from "react-helmet";

const url = import.meta.env.VITE_API_URL;

const Gallery = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,  // Add fade transition to avoid overlapping issues
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

  const [data, setData] = useState([]); // State for images
  const [video, setVideo] = useState([]); // State for videos

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}api/gallery/list`);
        processGalleryData(response.data.galleryData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const processGalleryData = (galleryData) => {
    const processedVideos = [];
    const images = [];

    for (const data of galleryData) {
      if (data && (data.path.includes("youtube.com") || data.path.includes("youtu.be"))) {
        processedVideos.push(data);
      } else if (data && data.mimetype.includes("video/mp4")) {
        processedVideos.push(data);
      } else {
        images.push(data);
      }
    }

    setVideo(processedVideos); // Update state with the processed videos
    setData(images); // Update state with the processed images
  };

  const renderVideo = (videoPath) => {
    if (videoPath.path.includes("youtube.com") || videoPath.path.includes("youtu.be")) {
      const videoId = videoPath.path.split('v=')[1] || videoPath.path.split('/').pop();
      return (
        <div className="video-container">
          <YouTube
            videoId={videoId}
            className="w-full h-[auto] md:h-[500px]"
            opts={{
              width: '100%',
              height: '100%',
              playerVars: {
                autoplay: 0,
              },
            }}
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
            onEnd={handleVideoPause}
          />
        </div>
      );
    } else if (videoPath.mimetype.includes("video/mp4")) {
      return (
        <div className="video-container">
          <video
            muted
          
            controls
            controlsList="nodownload"
            className="w-full min-h-[auto] md:h-[500px]"
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
            onEnded={handleVideoPause}
          >
            <source src={`${url}${videoPath.path}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }
  };

  return (
    <div onContextMenu={(e) => e.preventDefault()} draggable="false">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gallery | Perkins Campus</title>
        <meta name="description" content="Perkins Campus gallery is a digital collection showcasing our vibrant campus life, events, and academic achievements through captivating images and media. It offers a glimpse into our dynamic community and educational environment." />
        <meta name="keywords" content="Gallery" />
      </Helmet>
      
      <div onContextMenu={(e) => e.preventDefault()} className="flex relative flex-col justify-center items-center mt-0 px-6 w-full py-10 bg-[#ffffff] md:px-[15px] lg:px-[89px] select-none">
        <h2 className="text-center w-full max-w-[565px] text-[40px] font-Poppins not-italic font-semibold text-[#000000] bg-[#ffffff]">
          Gallery
        </h2>
        <p className="py-5 w-full max-w-2xl font-Poppins text-[17px] leading-[30px] text-center text-[#848484] bg-[#ffffff]">
          Discover our vibrant community through our Gallery, featuring highlights of events, student achievements, and campus life. Visit our Gallery page to experience the essence of our school in pictures and videos.
        </p>
      </div>
      
      <div className="flex flex-col relative justify-center space-y-4 w-full min-h-[400px] md:h-[480px] items-center md:px-[15px] lg:px-[89px]">
        <Slider className="py-0 w-10/12 flex flex-col justify-center bg-black-500 md:w-[50em]" {...settings} ref={sliderRef}>
          {video && video.map((item, index) => (
            <div key={index}>
              {renderVideo(item)}
            </div>
          ))}
        </Slider>
      </div>
      
      <br />
      <br />
      <br />
      <br />
      
      <div className="relative flex flex-col px-6 w-full py-10 md:px-[15px] lg:px-[89px]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 sm:grid-cols-3">
          {data && data.map((image, index) => (
            <div key={index} className="flex flex-col justify-around">
              <img
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                key={index}
                className=""
                src={`${url}${image.path}`}
                alt={`Gallery Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Gallery;

