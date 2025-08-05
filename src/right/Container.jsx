import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

export default function Container() {
  const [activeTab, setActiveTab] = React.useState("about");

  return (
    <div className="flex-1  bg-[#1c1c1ed9] rounded-2xl mx-8 p-6">
      {/* Nav Tabs */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center gap-6 bg-[#2c2c2e] px-6 py-3 rounded-xl shadow-md">
          <button
            onClick={() => setActiveTab("about")}
            className={`text-sm px-4 py-2 rounded-lg font-medium transition duration-200 ${
              activeTab === "about"
                ? "bg-white text-black"
                : "text-white hover:bg-[#3c3c3e]"
            }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab("Resume")}
            className={`text-sm px-4 py-2 rounded-lg font-medium transition duration-200 ${
              activeTab === "Resume"
                ? "bg-white text-black"
                : "text-white hover:bg-[#3c3c3e]"
            }`}
          >
            Resume
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`text-sm px-4 py-2 rounded-lg font-medium transition duration-200 ${
              activeTab === "projects"
                ? "bg-white text-black"
                : "text-white hover:bg-[#3c3c3e]"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`text-sm px-4 py-2 rounded-lg font-medium transition duration-200 ${
              activeTab === "contact"
                ? "bg-white text-black"
                : "text-white hover:bg-[#3c3c3e]"
            }`}
          >
            Contact
          </button>
        </div>
      </div>

      {/* Render Tab Content */}
      <div className="bg-[#2c2c2e] rounded-xl p-6 shadow-md transition-all duration-300">
        {activeTab === "about" && <About />}
        {activeTab === "projects" && <Projects />}
        {activeTab === "contact" && <Contact />}
        {activeTab === "Resume" && <Resume />}
      </div>
    </div>
  );
}
