import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-center bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
       
        {/* <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3> */}
      </div>

      <ul className="text-sm md:text-xl">
        <li className="text-5xl font-bold p-5 items-center">
        
          Contact
          </li>
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          ayushchoudhary23923@gmail.com
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          www.linkedin.com/in/ayush-choudhary-930509275
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          https://github.com/ayush2392
        </li>
      </ul>
    </div>
  );
};

export default Footer;