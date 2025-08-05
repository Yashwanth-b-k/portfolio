import React from "react";
import { FaBook } from "react-icons/fa";

export default function Resume() {
  return (
    <div className="p-8 text-white rounded-3xl shadow-2xl mx-auto">
      {/* Header */}
      <h2 className="text-4xl font-bold text-yellow-400">Resume</h2>
      <hr className="border-yellow-400 w-24 border-4 rounded-full my-4" />

      {/* Education Section */}
      <section className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-[#2b2b2b] p-4 rounded-xl shadow-md">
            <FaBook className="text-white text-2xl" />
          </div>
          <h3 className="text-3xl font-semibold">Education</h3>
        </div>

        <div className="space-y-8 ml-10 border-l-4 border-yellow-400 pl-6">
          <div>
            <p className="text-xl font-bold">
              Visveswaraya Technological University{" "}
              <span className="text-yellow-400">- 8.7 CGPA</span>
            </p>
            <p className="text-sm text-gray-400">2021 — 2025</p>
            <p className="text-gray-300">Bachelor of Engineering</p>
          </div>

          <div>
            <p className="text-xl font-bold">
              Dayananda Sagar PU College{" "}
              <span className="text-yellow-400">- 78%</span>
            </p>
            <p className="text-sm text-gray-400">2019 — 2021</p>
            <p className="text-gray-300">Pre-University Course</p>
          </div>

          <div>
            <p className="text-xl font-bold">
              Martin Luther Public School{" "}
              <span className="text-yellow-400">- 83%</span>
            </p>
            <p className="text-sm text-gray-400">2019</p>
            <p className="text-gray-300">Class X</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mt-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-[#2b2b2b] p-4 rounded-xl shadow-md">
            <FaBook className="text-white text-2xl" />
          </div>
          <h3 className="text-3xl font-semibold">Experience</h3>
        </div>

        <div className="space-y-8 ml-10 border-l-4 border-yellow-400 pl-6">
          <div>
            <p className="text-xl font-bold">Software Developer Trainee</p>
            <p className="font-semibold text-yellow-300">Kodnest</p>
            <p className="text-sm text-gray-400">May 2025 — Current</p>
            <p className="text-gray-300 mt-2">
              Training in Core/Advanced Java, Spring Boot, MySQL, HTML, CSS, and
              JavaScript.
              <br />
              Solved 70+ coding challenges and practiced DSA problems to enhance
              problem-solving.
            </p>
          </div>

          <div>
            <p className="text-xl font-bold">Intern</p>
            <p className="font-semibold text-yellow-300">Rooman Technologies</p>
            <p className="text-sm text-gray-400">May 2024 — July 2024</p>
            <p className="text-gray-300 mt-2">
              Built and deployed 3+ full-stack applications using the MERN
              stack.
              <br />
              Completed 300+ hours of structured training in frontend and
              backend technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-[#2b2b2b] p-4 rounded-xl shadow-md">
            <FaBook className="text-white text-2xl" />
          </div>
          <h3 className="text-3xl font-semibold">Skills</h3>
        </div>

        <div className="space-y-6">
          <div className="bg-[#2b2b2b] p-4 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-2 text-yellow-300">
              Languages
            </h4>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white text-black px-3 py-1 rounded-md">
                Java
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md">
                Python
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md">
                JavaScript
              </span>
            </div>
          </div>

          <div className="bg-[#2b2b2b] p-4 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-2 text-yellow-300">
              Frontend
            </h4>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white text-black px-3 py-1 rounded-md">
                React.js
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md">
                Redux
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md">
                HTML
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md">
                CSS
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md">
                Tailwind CSS
              </span>
            </div>
          </div>

          <div className="bg-[#2b2b2b] p-4 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-2 text-yellow-300">
              Backend
            </h4>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white text-black px-3 py-1 rounded-md">
                Node.js
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md">
                Express.js
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md">
                Spring Boot
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md">
                REST APIs
              </span>
            </div>
          </div>

          <div className="bg-[#2b2b2b] p-4 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-2 text-yellow-300">
              Database
            </h4>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white text-black px-3 py-1 rounded-md">
                MySQL
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md">
                MongoDB
              </span>
            </div>
          </div>

          <div className="bg-[#2b2b2b] p-4 rounded-xl shadow-md">
            <h4 className="text-xl font-semibold mb-2 text-yellow-300">
              Tools & Technologies
            </h4>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white text-black px-3 py-1 rounded-md">
                Git
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md">
                Docker
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md">
                Postman
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-md">
                VS Code
              </span>
                <span className="bg-white text-black px-3 py-1 rounded-md">
                    Eclipse
                </span>
                <span className="bg-white text-black px-3 py-1 rounded-md">
                    Axios
                </span>
                <span className="bg-white text-black px-3 py-1 rounded-md">
                    Fetch API
                </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
