import cook from "../../assets/cook.png";

export default function Projects() {
  return (
    <div className="p-6 text-white min-h-screen bg-gradient-to-br from-[#1c1c1e] to-[#2a2a2d] rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 border-b border-gray-600 pb-2">
        Projects
      </h2>

      <div className="flex flex-col md:flex-row gap-6 items-center bg-[#2c2c2e] rounded-lg p-6 shadow-inner hover:shadow-lg transition duration-300 ease-in-out">
        <img
          src={cook}
          alt="Cooking App"
          className="w-full md:w-1/3 rounded-lg shadow-md border border-gray-700"
        />

        <div className="w-full md:w-2/3 space-y-3">
          <h3 className="text-2xl font-semibold text-yellow-400">
            Coming Soon
          </h3>
          <p className="text-gray-300">
            This page is currently under construction. 
          </p>
        </div>
      </div>
    </div>
  );
}
