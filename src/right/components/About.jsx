import React from "react";
import { FaServer, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";

export default function About() {
  return (
    <div className="p-6 text-white">
      {/* About Me Header */}
      <h2 className="text-4xl font-bold">About Me</h2>
      <hr className="border-yellow-300 w-20 border-4 rounded-full my-3" />
      <p className="text-gray-300 mb-8">
        Full Stack Developer with hands-on experience in backend systems and
        frontend development. Skilled in building secure, scalable web
        applications leveraging the MERN stack, RESTful APIs, and cloud
        services. Proficient in delivering maintainable code and responsive user
        interfaces aligned with business requirements.
      </p>

      {/* What I Do */}
      <h2 className="text-2xl font-bold mt-10 mb-4">What I’m Doing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Frontend */}
        <div className="bg-[#2c2c2e] p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <FaLaptopCode className="text-yellow-300 text-2xl" />
            <h3 className="text-xl font-semibold">Frontend Development</h3>
          </div>
          <p className="text-gray-300 text-sm">
            Building responsive, user-friendly interfaces using modern
            frameworks and technologies like React and Tailwind.
          </p>
        </div>

        {/* Backend */}
        <div className="bg-[#2c2c2e] p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <FaServer className="text-yellow-300 text-2xl" />
            <h3 className="text-xl font-semibold">Backend Development</h3>
          </div>
          <p className="text-gray-300 text-sm">
            Building and optimizing server-side architecture, APIs, and
            databases to ensure scalable performance.
          </p>
        </div>

        {/* Cloud/DevOps */}
        <div className="bg-[#2c2c2e] p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <SiGooglecloud className="text-yellow-300 text-2xl" />
            <h3 className="text-xl font-semibold">Cloud/DevOps</h3>
          </div>
          <p className="text-gray-300 text-sm">
            Managing cloud infrastructure, automation, and deployment pipelines
            to ensure reliability and scalability.
          </p>
        </div>

        {/* Mobile */}
        <div className="bg-[#2c2c2e] p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <FaMobileAlt className="text-yellow-300 text-2xl" />
            <h3 className="text-xl font-semibold">`lorem`</h3>
          </div>
          <p className="text-gray-300 text-sm">
            Developing cross-platform mobile apps using React Native for
            seamless user experiences on Android & iOS.
          </p>
        </div>
      </div>
    </div>
  );
}
