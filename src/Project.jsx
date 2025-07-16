import Sidebar from "./pages/Sidebar";
import Navbar from "./pages/Navbar";
import { TbBrandGithub, TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Project } from "./libs/projects";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HeadingSection from "./components/HeadingSection";

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
            <div className="w-full bg-white p-2 ">
              <HeadingSection>Projects</HeadingSection>
              <p className="mt-4 mb-8 text-center lg:text-start text-sm lg:text-base font-normal">
                🚀 beberapa project yang sudah dibuat 🚀
              </p>
              {/* mulai grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* project */}
                {Project.sort((a, b) => b.id - a.id).map((data) => (
                  <Link key={data.id} to={data.link} target="_blank">
                    <div
                      key={data.id}
                      className="border rounded-lg space-y-2 lg:space-y-3 p-3 lg:p-2 w-full h-full bg-white flex flex-col hover:border-background hover:shadow-[8px_8px_0px_0px_#f3c623] transition-all duration-300"
                    >
                      <img
                        src={data.gambar}
                        alt={data.title}
                        className="rounded"
                      />
                      <h3 className="text-base font-semibold lg:text-xl lg:font-bold">
                        {data.title}
                      </h3>
                      <p className="text-sm font-light italic text-gray-700 mb-4 flex-1">
                        {data.desc}
                      </p>
                      <div className="flex items-center justify-between flex-wrap">
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
