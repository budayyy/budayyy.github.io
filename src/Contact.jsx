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
        <div className="bg-white p-4 lg:pl-[22rem] lg:py-24 lg:pr-16 lg:w-[96%]">
          {loading && <LoadingScreen />}
          {!loading && (
            <div className="w-full bg-white p-2">
              <div className="text-center lg:text-start">
                <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-950 to-gray-500">
                  Contact
                </span>
              </div>

              <p className="mt-4 mb-8 text-base font-normal text-center lg:text-start">
                bolehlah koneksi bareng hehe😁
              </p>
              <div className="w-full lg:max-w-sm space-y-4">
                <Link
                  to="https://wa.me/+6287829890388"
                  className="flex items-center gap-x-2 border rounded-md p-4 text-base font-semibold bg-white hover:bg-gradient-to-br hover:from-gray-950 hover:to-gray-500 hover:text-white"
                >
                  <TbBrandWhatsapp className="text-3xl text-green-400" />
                  +6287829890388
                </Link>
                <Link
                  to="mailto:bsetiawan260@gmail.com"
                  className="flex items-center gap-x-2 border rounded-md p-4 text-base font-semibold bg-white hover:bg-gradient-to-br hover:from-gray-950 hover:to-gray-500 hover:text-white"
                >
                  <TbMail className="text-3xl text-red-500" />
                  bsetiawan260@gmail.com
                </Link>
                <Link
                  to="https://www.instagram.com/buday20_/"
                  className="flex items-center gap-x-2 border rounded-md p-4 text-base font-semibold bg-white hover:bg-gradient-to-br hover:from-gray-950 hover:to-gray-500 hover:text-white"
                >
                  <TbBrandInstagram className="text-3xl text-pink-500" />
                  buday20_
                </Link>
                <Link
                  to="https://twitter.com/budiset20_"
                  className="flex items-center gap-x-2 border rounded-md p-4 text-base font-semibold bg-white hover:bg-gradient-to-br hover:from-gray-950 hover:to-gray-500 hover:text-white group"
                >
                  <TbBrandX className="text-3xl text-gray-950 group-hover:text-white" />
                  budiset20_
                </Link>
                <Link
                  to="https://www.linkedin.com/in/budi-setiawan-7462741b2/"
                  className="flex items-center gap-x-2 border rounded-md p-4 text-base font-semibold bg-white hover:bg-gradient-to-br hover:from-gray-950 hover:to-gray-500 hover:text-white"
                >
                  <TbBrandLinkedin className="text-3xl text-sky-500" />
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
