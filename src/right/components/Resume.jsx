import React from "react";
import { FaBook } from "react-icons/fa";

const SectionHeader = ({ title }) => (
  <div className="flex items-center gap-4 mb-6">
    <div className="bg-[#2b2b2b] p-4 rounded-xl shadow-md">
      <FaBook className="text-white text-2xl" />
    </div>
    <h3 className="text-3xl font-semibold">{title}</h3>
  </div>
);

const SkillTag = ({ name, rating }) => (
  <span className="relative group bg-white text-black px-3 py-1 rounded-md cursor-pointer hover:scale-105 transition-transform">
    {name}
    {rating && (
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded-md px-2 py-1 whitespace-nowrap shadow-lg">
        {rating}
      </span>
    )}
  </span>
);

export default function Resume() {
  return (
    <div className="p-8 bg-[#1e1e1e] text-white rounded-3xl shadow-2xl  mx-auto">
      {/* Download Button */}
      <a
        href="https://drive.google.com/uc?export=download&id=1_lv9yaZzL_O-p_K0PpJvc3PxW6FVuRFm"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-md shadow-md transition-transform hover:scale-105"
      >
        📄 Download Resume
      </a>

      <h2 className="text-4xl font-bold text-yellow-400 mt-6">Resume</h2>
      <hr className="border-yellow-400 w-24 border-4 rounded-full my-4" />

      {/* Education */}
      <section className="mt-12">
        <SectionHeader title="Education" />
        <div className="space-y-8 ml-10 border-l-4 border-yellow-400 pl-6">
          {[
            {
              school: "Visveswaraya Technological University",
              score: "8.9 CGPA",
              years: "2021 — 2025",
              degree: "Bachelor of Engineering",
            },
            {
              school: "Dayananda Sagar PU College",
              score: "78%",
              years: "2019 — 2021",
              degree: "Pre-University Course",
            },
            {
              school: "Martin Luther Public School",
              score: "83%",
              years: "2019",
              degree: "Class X",
            },
          ].map((edu, i) => (
            <div key={i}>
              <p className="text-xl font-bold">
                {edu.school}{" "}
                <span className="text-yellow-400">- {edu.score}</span>
              </p>
              <p className="text-sm text-gray-400">{edu.years}</p>
              <p className="text-gray-300">{edu.degree}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mt-16">
        <SectionHeader title="Experience" />
        <div className="space-y-8 ml-10 border-l-4 border-yellow-400 pl-6">
          <div>
            <p className="text-xl font-bold">Software Developer Trainee</p>
            <p className="font-semibold text-yellow-300">Kodnest</p>
            <p className="text-sm text-gray-400">May 2025 — Current</p>
            <p className="text-gray-300 mt-2">
              Training in Core/Advanced Java, Spring Boot, MySQL, HTML, CSS, and
              JavaScript. Solved 70+ coding challenges and practiced DSA
              problems.
            </p>
          </div>
          <div>
            <p className="text-xl font-bold">Intern</p>
            <p className="font-semibold text-yellow-300">Rooman Technologies</p>
            <p className="text-sm text-gray-400">May 2024 — July 2024</p>
            <p className="text-gray-300 mt-2">
              Built and deployed 3+ full-stack applications using the MERN
              stack. Completed 300+ hours of structured training.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-16 space-y-8">
        <SectionHeader title="Skills" />

        <div className="bg-[#2b2b2b] p-4 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold mb-3 text-yellow-300">
            Languages
          </h4>
          <div className="flex flex-wrap gap-3">
            <SkillTag name="Java" rating="⭐⭐⭐⭐☆" />
            <SkillTag name="Python" rating="⭐⭐⭐☆☆" />
            <SkillTag name="JavaScript" rating="⭐⭐⭐⭐☆" />
          </div>
        </div>

        <div className="bg-[#2b2b2b] p-4 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold mb-3 text-yellow-300">
            Frontend
          </h4>
          <div className="flex flex-wrap gap-3">
            <SkillTag name="React.js" rating="⭐⭐⭐⭐☆" />
            <SkillTag name="HTML" rating="⭐⭐⭐⭐⭐" />
            <SkillTag name="CSS" rating="⭐⭐⭐⭐⭐" />
            <SkillTag name="Tailwind CSS" rating="⭐⭐⭐⭐☆" />
          </div>
        </div>

        <div className="bg-[#2b2b2b] p-4 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold mb-3 text-yellow-300">
            Backend
          </h4>
          <div className="flex flex-wrap gap-3">
            <SkillTag name="Node.js" rating="⭐⭐⭐⭐☆" />
            <SkillTag name="Express.js" rating="⭐⭐⭐⭐☆" />
            <SkillTag name="Spring Boot" rating="⭐⭐⭐☆☆" />
            <SkillTag name="REST APIs" rating="⭐⭐⭐⭐☆" />
          </div>
        </div>

        <div className="bg-[#2b2b2b] p-4 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold mb-3 text-yellow-300">
            Database
          </h4>
          <div className="flex flex-wrap gap-3">
            <SkillTag name="MySQL" rating="⭐⭐⭐⭐☆" />
            <SkillTag name="MongoDB" rating="⭐⭐⭐☆☆" />
          </div>
        </div>

        <div className="bg-[#2b2b2b] p-4 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold mb-3 text-yellow-300">
            Tools & Technologies
          </h4>
          <div className="flex flex-wrap gap-3">
            {[
              "Git",
              "Docker",
              "Postman",
              "VS Code",
              "Eclipse",
              "Axios",
              "Fetch API",
              "Redux",
            ].map((tool, i) => (
              <SkillTag key={i} name={tool} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
