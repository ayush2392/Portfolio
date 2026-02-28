import React from "react";
// import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-10 bg-opacity-30 rounded-lg p-10 md:p-40"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
         <div className="grid md:grid-cols-3 gap-5 mt-20">
          
          {/* Card 1 */}
          <div className="bg-gray-400 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">🎓 About Me</h3>
            <p className="text-white-600 ">
              B.Tech Computer Science student passionate about frontend 
              development and building modern web applications.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-400 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">🛠 Tech Stack</h3>
            <p className="text-white-600">
              HTML • CSS • Tailwind CSS • JavaScript • React.js
            </p>
          </div>
           {/* Card 3 */}
          <div className="bg-gray-400 p-8 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">🚀 My Goal</h3>
            <p className="text-white-600">
              To become a skilled full-stack developer and work on impactful 
              real-world projects.
            </p>
          </div>


          {/* <img className="md:h-80" src={AboutImg} alt="About img" /> */}

          
        </div>
      </div>
    </div>
  );
};

export default About;