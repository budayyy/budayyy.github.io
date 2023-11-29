import Sidebar from "./pages/Sidebar";
import Navbar from "./pages/Navbar";
import { Link } from "react-router-dom";
import { TbBrandGithub, TbBrandLinkedin, TbMail } from "react-icons/tb";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto">
        <Sidebar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <div className="bg-white p-4 lg:pl-[22rem] lg:py-24 lg:pr-16 lg:w-[96%]">
          <div className="w-full bg-white p-2">
            <div className="mb-6 flex justify-center lg:justify-start items-center">
              <img
                src="./buday.jpg"
                alt="budi"
                className="rounded-full w-40 h-40"
              />
            </div>
            <h3 className="text-3xl lg:text-5xl text-center lg:text-start font-extrabold">
              Halo,I am Budi Setiawan
            </h3>
            <div className="text-center lg:text-start">
              <span className="text-2xl lg:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-950 to-gray-500">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    "Enthusiast web developer.",
                    1000,
                    "I build software.",
                    1000,
                    "I am freelancer.",
                    1000,
                    "I am engineer.",
                    1000,
                  ]}
                  speed={200}
                />
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:flex lg:items-center my-6 ">
              <Link
                to="/contact"
                className="py-2 px-4 rounded bg-gray-100 text-xs font-semibold text-gray-950 flex items-center gap-x-2 border border-gray-950"
              >
                <TbMail className="text-base" />
                Contact
              </Link>
              <Link
                to="mailto:bsetiawan260@gmail.com"
                className="py-2 px-4 rounded bg-white text-xs font-semibold text-gray-950 flex items-center gap-x-2 border border-gray-900 hover:bg-gray-100"
              >
                <TbMail className="text-base" />
                Email
              </Link>
              <Link
                to="https://github.com/budayyy"
                className="py-2 px-4 rounded bg-white text-xs font-semibold text-gray-950 flex items-center gap-x-2 border border-gray-900 hover:bg-gray-100"
              >
                <TbBrandGithub className="text-base" />
                Github
              </Link>
              <Link
                to="https://www.linkedin.com/in/budi-setiawan-7462741b2/"
                className="py-2 px-4 rounded bg-white text-xs font-semibold text-gray-950 flex items-center gap-x-2 border border-gray-900 hover:bg-gray-100"
              >
                <TbBrandLinkedin className="text-base" />
                Linkedin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
