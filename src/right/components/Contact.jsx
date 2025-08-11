import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    const formData = new FormData(e.target);

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLScvAyUPMgFhHOUYOJHW_9Dh57eeZSL2VIMRUXX4puSfXi2cyQ/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors", // required because Google Forms doesn't send CORS headers
      }
    )
      .then(() => {
        setStatus("✅ Message Sent!");
        e.target.reset();
        setTimeout(() => setStatus(""), 3000);
      })
      .catch(() => {
        setStatus("❌ Something went wrong!");
      });
  };

  return (
    <div className="bg-[#1e1e1e] min-h-screen p-8 rounded-xl text-white shadow-xl">
      <h2 className="text-4xl font-bold">Contact</h2>
      <hr className="border-yellow-400 w-20 border-4 rounded-full my-4" />

      {/* Map */}
      <div className="rounded-xl overflow-hidden mt-6">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Bengaluru&output=embed"
          className="w-3/4 h-100 m-auto rounded-2xl border-dotted border-2 filter grayscale contrast-125 brightness-80"
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-6">Contact Form</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              name="entry.147907807"
              type="text"
              placeholder="Full name"
              required
              className="w-full p-4 rounded-lg bg-[#2a2a2a] border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              name="entry.76358004"
              type="email"
              placeholder="Email address"
              required
              className="w-full p-4 rounded-lg bg-[#2a2a2a] border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <textarea
            name="entry.282642014"
            placeholder="Your Message"
            rows="6"
            required
            className="w-full p-4 rounded-lg bg-[#2a2a2a] border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>

          <button
            type="submit"
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300"
          >
            <FaPaperPlane /> Send Message
          </button>
        </form>

        {status && (
          <p className="mt-4 text-green-400 font-semibold transition-all">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}
