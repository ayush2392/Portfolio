import React from "react";
import { FaDownload } from "react-icons/fa";
const Home = () => {
  return (
    <div id="Home" className="text-white flex w-full justify-between items-start p-10 md:p-24 mt-20">
      <div className="md:w-3/5 md:pt-10 ">
        <h1 className="text-xl md:text-5xl font-bold flex leading-normal tracking-tighter">
          Hello' I am Ayush Choudhary
        </h1>
        <p className="text-sm md:text-4xl tracking-tight ">
         Frontend Doveloper
        </p>
        <div className="flex justify-start mt-12 text-sm  md:text-1xl">
      <a
        href="/resume.pdf"  
        download="My_Resume.pdf"
        className="flex items-center px-5 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300"
      >
        <FaDownload className="mr-2 " /> Download Resume
      </a>
    </div>
      </div>
      
      <div>
        <img className="md:w-90" src="public/ayu1-2.png" alt="" />
      </div>
    </div>
  );
};

export default Home;