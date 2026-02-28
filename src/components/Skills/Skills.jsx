import React from "react";
import { FaCss3, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-5/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <RiTailwindCssFill color="blue" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGithub color="yellow" size={50} />
          </span>
          
          
        </div>
        <div className="flex flex-wrap justify-around">
          <div className="flex gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaHtml5 color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Html</h2>
              <p className="text-sm leading-tight font-thin">
                Hyper Text Markup Languge
              </p>
              <ul className="text-sm p-2">
                <li>- Provide structure on web</li>
                
              </ul>
            </span>
          </div>
          <div className="flex gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaCss3 color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">CSS</h2>
              <p className="text-sm leading-tight font-thin">
                Cascading Style Sheets
              </p>
              <ul className="text-sm p-2">
                <li>- Built responsive web interfaces using CSS3, <br /> Flexbox, and Grid</li>
                
              </ul>
            </span>
          </div>
          <div className="flex gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaReact color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">React.js</h2>
              <p className="text-sm leading-tight font-thin">
                
              </p>
              <ul className="text-sm p-2">
                <li>- Created scalable and component-based web <br /> applications using React.js and modern JavaScript.</li>
                
              </ul>
            </span>
          </div>

          <div className="flex gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaJs color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">javaScript</h2>
              <p className="text-sm leading-tight font-thin">
              
              </p>
              <ul className="text-sm p-2">
                <li>- Built responsive and interactive <br /> UI components with JavaScript.</li>
                
              </ul>
            </span>
          </div>

          <div className="flex gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <RiTailwindCssFill color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">TailwindCss</h2>
              <p className="text-sm leading-tight font-thin">
                
              </p>
              <ul className="text-sm p-2">
                <li>- Designed responsive layouts quickly <br /> and efficiently with Tailwind CSS</li>
                
              </ul>
            </span>
          </div>

          <div className="flex gap-5 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaGithub color="#4285F4" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">GitHub</h2>
              <p className="text-sm leading-tight font-thin">
                
              </p>
              <ul className="text-sm p-2">
                <li>- Utilized Git and GitHub for version <br /> control and project collaboration.</li>
                
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Skills;