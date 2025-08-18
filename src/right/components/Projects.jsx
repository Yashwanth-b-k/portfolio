import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Ruchi-hub (Java Full Stack)",
    desc: "Enterprise-level Java backend with relational databases.",
    category: "Backend Development",
    github: "https://github.com/Yashwanth-b-k/Ruchi-Hub",
    live: null, // No hosted live site
  },
  {
    title: "M-Estate (MERN Stack)",
    desc: "Full-stack skills in MongoDB, Express, React, Node.js.",
    category: "Full-Stack",
    github: "https://github.com/Yashwanth-b-k/M-Estate",
    live: "https://m-estate.onrender.com/",
  },
  {
    title: "Store API (Node/Express)",
    desc: "REST API with CRUD & authentication using MongoDB.",
    category: "Backend Development",
    github: "https://github.com/Yashwanth-b-k/Store-API",
    live: null, // GitHub only
  },
  {
    title: "CarDB (Node/Express)",
    desc: "NoSQL database management with a practical use case.",
    category: "Backend Development",
    github: "https://github.com/Yashwanth-b-k/CarDB",
    live: "https://cardb-43ts.onrender.com",
  },
  {
    title: "Todo App (Next.js)",
    desc: "Server-side rendering, API routes & state management.",
    category: "Frontend Development",
    github: "https://github.com/Yashwanth-b-k/todo-in-nextjs",
    live: null, // GitHub only
  },
  {
    title: "Fitness Tracker (Next.js)",
    desc: "Advanced routing & persistence with component-driven UI.",
    category: "Frontend Development",
    github: "https://github.com/Yashwanth-b-k/FitnessTracker",
    live: "https://fitness-tracker-henna.vercel.app/",
  },
  {
    title: "React Projects",
    desc: "Reusable components.",
    category: "UI & Web Fundamentals",
    github: "https://github.com/Yashwanth-b-k/Best-book-seller",
    live: "https://delightful-phoenix-c63428.netlify.app/",
  },
  {
    title: "HTML/CSS/JS Projects",
    desc: "Semantic HTML, responsive design, and vanilla JS interactivity.",
    category: "UI & Web Fundamentals",
    github: "https://github.com/Yashwanth-b-k/nan_University",
    live: "https://kaleidoscopic-begonia-1706b5.netlify.app/",
  },
];

const categories = [
  "All",
  "Full-Stack",
  "Backend Development",
  "Frontend Development",
  "UI & Web Fundamentals",
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((proj) => proj.category === selectedCategory);

  return (
    <section className="bg-[#121212] text-white py-12 px-6 md:px-12 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
        Projects
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full font-medium border transition ${
              selectedCategory === cat
                ? "bg-yellow-400 text-black border-yellow-400"
                : "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredProjects.map((proj, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-400 transition-all duration-300 shadow-lg group"
          >
            {/* Preview: iframe if live site exists, else fallback */}
            {proj.live ? (
              <iframe
                src={proj.live}
                title={proj.title}
                className="w-full h-52 pointer-events-none"
                sandbox="allow-same-origin allow-scripts"
              ></iframe>
            ) : (
              <div className="w-full h-52 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <FaGithub className="text-5xl text-gray-400 group-hover:text-yellow-400 transition" />
              </div>
            )}

            {/* Overlay with shading */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
              <h3 className="text-lg font-semibold text-yellow-300">
                {proj.title}
              </h3>
              <p className="text-gray-300 text-sm">{proj.desc}</p>
              <div className="flex gap-6 mt-3">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-yellow-400"
                >
                  <FaGithub /> GitHub
                </a>
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-yellow-400"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
