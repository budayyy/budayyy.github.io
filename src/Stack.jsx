import Sidebar from "./pages/Sidebar";
import Navbar from "./pages/Navbar";
import {
  TbBrandBootstrap,
  TbBrandCss3,
  TbBrandFigma,
  TbBrandGit,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandLaravel,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandPhp,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandVue,
} from "react-icons/tb";
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
            <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-950 to-gray-500">
              Stack
            </span>
            <p className="mt-4 mb-8 text-base font-normal">
              🚀 beberapa stack yang saya gunakan ketika membuat sebuah project
              🚀
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex items-center justify-center gap-x-1 rounded border p-4 group hover:bg-gradient-to-br hover:from-gray-500 hover:to-gray-950 cursor-pointer">
                <TbBrandHtml5 className="text-4xl text-orange-500" />
                <span className="text-xl text-gray-950 font-bold group-hover:text-white">
                  HTML
                </span>
              </div>
              <div className="flex items-center justify-center gap-x-1 rounded border p-4 group hover:bg-gradient-to-br hover:from-gray-500 hover:to-gray-950 cursor-pointer">
                <TbBrandCss3 className="text-4xl text-blue-500" />
                <span className="text-xl text-gray-950 font-bold group-hover:text-white">
                  CSS
                </span>
              </div>
              <div className="flex items-center justify-center gap-x-1 rounded border p-4 group hover:bg-gradient-to-br hover:from-gray-500 hover:to-gray-950 cursor-pointer">
                <TbBrandJavascript className="text-4xl text-yellow-500" />
                <span className="text-xl text-gray-950 font-bold group-hover:text-white">
                  JavaScript
                </span>
              </div>
              <div className="flex items-center justify-center gap-x-1 rounded border p-4 group hover:bg-gradient-to-br hover:from-gray-500 hover:to-gray-950 cursor-pointer">
                <TbBrandPhp className="text-4xl text-violet-500" />
                <span className="text-xl text-gray-950 font-bold group-hover:text-white">
                  PHP
                </span>
              </div>
              <div className="flex items-center justify-center gap-x-1 rounded border p-4 group hover:bg-gradient-to-br hover:from-gray-500 hover:to-gray-950 cursor-pointer">
                <TbBrandLaravel className="text-4xl text-red-500" />
                <span className="text-xl text-gray-950 font-bold group-hover:text-white">
                  Laravel
                </span>
              </div>
              <div className="flex items-center justify-center gap-x-1 rounded border p-4 group hover:bg-gradient-to-br hover:from-gray-500 hover:to-gray-950 cursor-pointer">
                <TbBrandNodejs className="text-4xl text-green-700" />
                <span className="text-xl text-gray-950 font-bold group-hover:text-white">
                  Node JS
                </span>
              </div>
              <div className="flex items-center justify-center gap-x-1 rounded border p-4 group hover:bg-gradient-to-br hover:from-gray-500 hover:to-gray-950 cursor-pointer">
                <TbBrandGit className="text-4xl text-orange-600" />
                <span className="text-xl text-gray-950 font-bold group-hover:text-white">
                  GIT
                </span>
              </div>
              <div className="flex items-center justify-center gap-x-1 rounded border p-4 group hover:bg-gradient-to-br hover:from-gray-500 hover:to-gray-950 cursor-pointer">
                <TbBrandReact className="text-4xl text-sky-500" />
                <span className="text-xl text-gray-950 font-bold group-hover:text-white">
                  React JS
                </span>
              </div>
              <div className="flex items-center justify-center gap-x-1 rounded border p-4 group hover:bg-gradient-to-br hover:from-gray-500 hover:to-gray-950 cursor-pointer">
                <TbBrandBootstrap className="text-4xl text-violet-700 " />
                <span className="text-xl text-gray-950 font-bold group-hover:text-white">
                  Bootstrap
                </span>
              </div>
              <div className="flex items-center justify-center gap-x-1 rounded border p-4 group hover:bg-gradient-to-br hover:from-gray-500 hover:to-gray-950 cursor-pointer">
                <TbBrandTailwind className="text-4xl text-sky-500" />
                <span className="text-xl text-gray-950 font-bold group-hover:text-white">
                  TailwindCSS
                </span>
              </div>
              <div className="flex items-center justify-center gap-x-1 rounded border p-4 group hover:bg-gradient-to-br hover:from-gray-500 hover:to-gray-950 cursor-pointer">
                <TbBrandNextjs className="text-4xl text-gray-950 group-hover:text-white" />
                <span className="text-xl text-gray-950 font-bold group-hover:text-white">
                  Next JS
                </span>
              </div>
              <div className="flex items-center justify-center gap-x-1 rounded border p-4 group hover:bg-gradient-to-br hover:from-gray-500 hover:to-gray-950 cursor-pointer">
                <TbBrandFigma className="text-4xl text-sky-700 " />
                <span className="text-xl text-gray-950 font-bold group-hover:text-white">
                  Figma
                </span>
              </div>
              <div className="flex items-center justify-center gap-x-1 rounded border p-4 group hover:bg-gradient-to-br hover:from-gray-500 hover:to-gray-950 cursor-pointer">
                <TbBrandVue className="text-4xl text-emerald-500 " />
                <span className="text-xl text-gray-950 font-bold group-hover:text-white">
                  Vue JS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
