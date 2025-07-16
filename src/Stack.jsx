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
  TbBrandReact,
  TbBrandTailwind,
  TbBrandVue,
} from "react-icons/tb";
import { SiCodeigniter } from "react-icons/si";
import { DiPhp } from "react-icons/di";

import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HeadingSection from "./components/HeadingSection";
import SubtitleSection from "./components/SubtitleSection";

const stackStyle =
  "flex items-center justify-center gap-x-1 rounded-sm border p-4 group hover:bg-primary hover:border-background hover:shadow-background cursor-pointer";

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto">
        <Sidebar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
        <div className="bg-white p-4 lg:pl-88 lg:py-24 lg:pr-16 lg:w-[96%]">
          {loading && <LoadingScreen />}
          {!loading && (
            <div className="w-full bg-white pt-24 pb-8 lg:p-0">
              <HeadingSection>Stack</HeadingSection>
              <SubtitleSection>
                🚀 beberapa stack yang saya gunakan ketika membuat sebuah
                project 🚀
              </SubtitleSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className={stackStyle}>
                  <TbBrandHtml5 className="text-4xl text-orange-500" />
                  <span className="text-lg lg:text-xl text-gray-950 font-bold ">
                    HTML
                  </span>
                </div>
                <div className={stackStyle}>
                  <TbBrandCss3 className="text-4xl text-blue-500" />
                  <span className="text-lg lg:text-xl text-gray-950 font-bold ">
                    CSS
                  </span>
                </div>
                <div className={stackStyle}>
                  <TbBrandJavascript className="text-4xl text-yellow-500" />
                  <span className="text-lg lg:text-xl text-gray-950 font-bold ">
                    JavaScript
                  </span>
                </div>
                <div className={stackStyle}>
                  <DiPhp className="text-4xl text-violet-500" />
                  <span className="text-lg lg:text-xl text-gray-950 font-bold ">
                    PHP
                  </span>
                </div>
                <div className={stackStyle}>
                  <TbBrandLaravel className="text-4xl text-red-500" />
                  <span className="text-lg lg:text-xl text-gray-950 font-bold ">
                    Laravel
                  </span>
                </div>
                <div className={stackStyle}>
                  <TbBrandNodejs className="text-4xl text-green-700" />
                  <span className="text-lg lg:text-xl text-gray-950 font-bold ">
                    Node JS
                  </span>
                </div>
                <div className={stackStyle}>
                  <TbBrandGit className="text-4xl text-orange-600" />
                  <span className="text-lg lg:text-xl text-gray-950 font-bold ">
                    GIT
                  </span>
                </div>
                <div className={stackStyle}>
                  <TbBrandReact className="text-4xl text-sky-500" />
                  <span className="text-lg lg:text-xl text-gray-950 font-bold ">
                    React JS
                  </span>
                </div>
                <div className={stackStyle}>
                  <TbBrandBootstrap className="text-4xl text-violet-700 " />
                  <span className="text-lg lg:text-xl text-gray-950 font-bold ">
                    Bootstrap
                  </span>
                </div>
                <div className={stackStyle}>
                  <TbBrandTailwind className="text-4xl text-sky-500" />
                  <span className="text-lg lg:text-xl text-gray-950 font-bold ">
                    TailwindCSS
                  </span>
                </div>
                <div className={stackStyle}>
                  <TbBrandNextjs className="text-4xl text-gray-950 " />
                  <span className="text-lg lg:text-xl text-gray-950 font-bold ">
                    Next JS
                  </span>
                </div>
                <div className={stackStyle}>
                  <TbBrandFigma className="text-4xl text-sky-700 " />
                  <span className="text-lg lg:text-xl text-gray-950 font-bold ">
                    Figma
                  </span>
                </div>
                <div className={stackStyle}>
                  <TbBrandVue className="text-4xl text-emerald-500 " />
                  <span className="text-lg lg:text-xl text-gray-950 font-bold ">
                    Vue JS
                  </span>
                </div>
                <div className={stackStyle}>
                  <SiCodeigniter className="text-4xl text-orange-700 " />
                  <span className="text-lg lg:text-xl text-gray-950 font-bold ">
                    Codeigniter
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
