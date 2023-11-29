import Sidebar from "./pages/Sidebar";
import Navbar from "./pages/Navbar";
import { TbBrandGithub, TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Project } from "./libs/projects";
import { useState } from "react";

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto">
        <Sidebar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <div className="bg-white p-4 lg:pl-[22rem] lg:py-24 lg:pr-16 lg:w-[96%]">
          <div className="w-full bg-white p-2 ">
            <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-950 to-gray-500">
              Project
            </span>
            <p className="mt-4 mb-8 text-base font-normal">
              🚀 beberapa project yang sudah dibuat 🚀
            </p>
            {/* mulai grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* project */}
              {Project.map((data) => (
                <div
                  key={data.id}
                  className="border rounded space-y-3 p-2 w-full h-full"
                >
                  <img src={data.gambar} alt={data.title} className="rounded" />
                  <h3 className="text-xl font-bold">{data.title}</h3>
                  <p className="text-sm font-light italic text-gray-700 mb-4">
                    {data.desc}
                  </p>
                  <div className="flex items-center justify-between flex-wrap">
                    <div className="flex items-center gap-2 flex-wrap max-w-[20rem]">
                      {data.stack.map((item, index) => (
                        <span
                          key={index}
                          className="text-[0.5rem] font-bold  bg-gray-200 rounded-full border py-0.5 px-3"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-x-2">
                      <Link to={data.github} target="_blank">
                        <TbBrandGithub />
                      </Link>
                      <Link to={data.link} target="_blank">
                        <TbExternalLink />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
