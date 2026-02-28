import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5 justify-around">
        <ProjectCard
          title="Portfolio Website"
          main="A personal portfolio to demonstrate my frontend development skills and projects with responsive and interactive designs using React.js and Tailwind CSS."
        />
        <ProjectCard
          title="Video Conference Web"
          main="Built the frontend of a video conferencing web app with React.js and CSS, featuring responsive design, interactive UI, and real-time user experience."
        />
        
      </div>
    </div>
  );
};

export default Projects;