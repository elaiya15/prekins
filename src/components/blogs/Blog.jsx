/* eslint-disable react/prop-types */



import blogImage from './blogImage.png';
import blogPreview from './blogPreview.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
 const URL=import.meta.env.VITE_API_URL
 import { useNavigate, useLocation } from "react-router-dom";



const BlogCard = ({ posted_on, title, image, _id }) => { 
    const navigate = useNavigate();


    const handelPreview = (id) => {
        
        navigate("/blogs/Preview", { state: {id} });



    }


    return (
  <div className="overflow-hidden bg-white rounded-lg shadow-md">
    <img   src={`${URL}${image}`} alt="Blog" className="object-cover w-full h-48 " />
    {/* <img   src={blogPreview} alt="Blog" className="object-cover w-full h-48 " /> */}
    <div className="p-4">
      <div className="flex items-center mb-2 text-sm text-gray-600">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m-6 0h3v-4m1-6H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-7m-7-4h7" />
        </svg>
        {posted_on}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <span onClick={()=> handelPreview(_id) }  className="flex items-center w-auto text-blue-500 cursor-pointer hover:underline">
        Read More <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </span>
    </div>
  </div>
);

};

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}api/blog/list`);
        setBlogs(response.data.blogs);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blogs) {
    return <div className="text-blue-400 ">Loading...</div>;
  }

  return (
    <div className="min-h-screen py-10 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
          Blogs
          <span className="block w-16 h-1 mx-auto mt-2 bg-blue-400"></span>
        </h2>
        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {blogs.map(blog => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;





const BlogContent = ({ content }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );
};



export const BlogPagePreview = () => {
  let { state } = useLocation(); 

    
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}api/blog/${state.id}/data`);
        setBlogs(response.data.blogs);
      } catch (err) {
        console.log(err.message);
      }
    };
    
    fetchData();
  }, [state]);

  if (!blogs) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="min-h-screen py-10 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-2xl md:w-[767px] md:h-[144px] font-['Poppins'] not-italic font-bold md:text-[48px] md:leading-[72px] text-[#2AB6C5]">
            {blogs.title}
          </h1>
          <small className="w-[102px] h-[26px] font-['Hind'] not-italic font-normal text-[16px] leading-[26px] text-[#323232]">
            {new Date(blogs.posted_on).toLocaleDateString()}
          </small>
          <img src={`${URL}${blogs.image}`} alt="Blog" className="object-cover w-full h-56" />
          <BlogContent content={blogs.content} />
        </div>
      </div>
    </>
  );
};
