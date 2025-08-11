import pic from "../assets/pic.png";
import { MdOutlineEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="mx-10 w-[300px] bg-[#1c1c1ed9] rounded-2xl p-6 shadow-lg text-white flex flex-col items-center">
      {/* Profile Picture */}
      <img
        src={pic}
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover my-10 shadow-lg"
      />

      {/* Name & Role */}
      <h2 className="text-2xl font-bold text-center mb-1">
        Yashwanth Gowda B K
      </h2>
      <p className="bg-[#2c2c2e] text-sm px-4 py-1 my-2 rounded-lg text-gray-300">
        Full Stack Developer
      </p>

      {/* Divider */}
      <hr className="w-full border-gray-600 my-6" />

      {/* Contact Info */}
      <div className="space-y-10 w-full p-4">
        {/* Email */}
        <div className="flex items-center gap-4">
          <div className="bg-[#2c2c2e] p-4 rounded-xl">
            <MdOutlineEmail className="text-xl  text-yellow-400" />
          </div>
          <div>
            <p className="text-lg text-gray-400">EMAIL</p>
            <a
              href="mailto:yashwanthgowdabk1@gmail.com"
              className="text-md break-words "
            >
              yashwanthgowda...
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <div className="bg-[#2c2c2e] p-4 rounded-xl">
            <MdCall className="text-xl text-green-400" />
          </div>
          <div>
            <p className="text-lg text-gray-400">PHONE</p>
            <a href="tel:+918073889562" className="text-md ">
              +91 80738 89562
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4">
          <div className="bg-[#2c2c2e] p-4 rounded-xl">
            <IoLocation className="text-xl text-red-400" />
          </div>
          <div>
            <p className="text-lg text-gray-400">LOCATION</p>
            <p className="text-md">Bengaluru, Karnataka, India</p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://www.linkedin.com/in/yashwanth-b-k-96737323a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl text-gray-400 hover:text-white" />
          </a>
          <a
            href="https://github.com/Yashwanth-b-k"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl text-gray-400 hover:text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
