import Sidebar from "./pages/Sidebar";
import Navbar from "./pages/Navbar";
import { TbBrandGithub, TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Project } from "./libs/projects";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HeadingSection from "./components/HeadingSection";
import SubtitleSection from "./components/SubtitleSection";

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
              <HeadingSection>Projects</HeadingSection>
              <SubtitleSection>
                🚀 beberapa project yang sudah dibuat 🚀
              </SubtitleSection>
              {/* mulai grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* project */}
                {Project.sort((a, b) => b.id - a.id).map((data) => (
                  <Link key={data.id} to={data.link} target="_blank">
                    <div
                      key={data.id}
                      className="border rounded-lg space-y-2 lg:space-y-3 w-full h-full bg-white flex flex-col hover:border-background hover:shadow-[8px_8px_0px_0px_#f3c623] transition-all duration-300 overflow-hidden"
                    >
                      <img
                        src={data.gambar}
                        alt={data.title}
                        className="bg-cover border-b"
                      />
                      <div className="flex-1 p-2 space-y-2">
                        <h3 className="text-base font-semibold lg:text-xl lg:font-bold underline decoration-2 decoration-primary">
                          {data.title}
                        </h3>
                        <p className="text-sm font-medium text-gray-700 mb-4 leading-relaxed">
                          {data.desc}
                        </p>
                      </div>
                      <div className="flex items-center justify-between flex-wrap p-2">
                        <div className="flex items-center gap-2 flex-wrap max-w-[20rem]">
                          {data.stack.map((item, index) => (
                            <span
                              key={index}
                              className="text-[0.5rem] font-bold text-primary bg-primary/10 rounded-full border border-primary py-0.5 px-3"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-x-2 mt-6 lg:mt-0">
                          <Link to={data.github} target="_blank">
                            <TbBrandGithub />
                          </Link>
                          <Link to={data.link} target="_blank">
                            <TbExternalLink />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
