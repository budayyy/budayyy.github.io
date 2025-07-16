import Sidebar from "./pages/Sidebar";
import Navbar from "./pages/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import { Link } from "react-router-dom";
import {
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandWhatsapp,
  TbBrandX,
  TbMail,
} from "react-icons/tb";
import { useEffect, useState } from "react";
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
              <HeadingSection>Contact</HeadingSection>
              <SubtitleSection>bolehlah koneksi bareng hehe😁</SubtitleSection>
              <div className="w-full lg:max-w-sm space-y-4">
                <Link
                  to="https://wa.me/+6287829890388"
                  className="flex items-center gap-x-2 border rounded-md p-4 text-base font-semibold bg-white hover:bg-primary hover:border-background hover:shadow-background group"
                >
                  <TbBrandWhatsapp className="text-3xl text-green-400 group-hover:text-white" />
                  +6287829890388
                </Link>
                <Link
                  to="mailto:bsetiawan260@gmail.com"
                  className="flex items-center gap-x-2 border rounded-md p-4 text-base font-semibold bg-white hover:bg-primary hover:border-background hover:shadow-background group"
                >
                  <TbMail className="text-3xl text-red-500 group-hover:text-white" />
                  bsetiawan260@gmail.com
                </Link>
                <Link
                  to="https://www.instagram.com/buday20_/"
                  className="flex items-center gap-x-2 border rounded-md p-4 text-base font-semibold bg-white hover:bg-primary hover:border-background hover:shadow-background group"
                >
                  <TbBrandInstagram className="text-3xl text-pink-500 group-hover:text-white" />
                  buday20_
                </Link>
                <Link
                  to="https://twitter.com/budiset20_"
                  className="flex items-center gap-x-2 border rounded-md p-4 text-base font-semibold bg-white hover:bg-primary hover:border-background hover:shadow-background group"
                >
                  <TbBrandX className="text-3xl text-gray-950 group-hover:text-white" />
                  budiset20_
                </Link>
                <Link
                  to="https://www.linkedin.com/in/budi-setiawan-7462741b2/"
                  className="flex items-center gap-x-2 border rounded-md p-4 text-base font-semibold bg-white hover:bg-primary hover:border-background hover:shadow-background group"
                >
                  <TbBrandLinkedin className="text-3xl text-sky-500 group-hover:text-white" />
                  Budi Setiawan
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
