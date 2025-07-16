import {
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandX,
  TbHome,
  TbMail,
  TbNavigationBolt,
  TbTools,
  TbUserCircle,
  TbX,
} from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const sidebar =
  "flex items-center gap-x-2  px-4 py-2 rounded-md text-gray-600 hover:text-gray-950 border border-gray-100 font-semibold text-sm hover:bg-primary/5 hover:border-primary";
const sidebarActive =
  "flex items-center gap-x-2 bg-primary px-4 py-2 rounded-md border border-background text-background font-semibold text-sm shadow-background";

export default function Sidebar({ navbarOpen, setNavbarOpen }) {
  return (
    <aside
      className={`lg:block fixed w-72 min-h-screen bg-gray-100 px-6 py-12 border-r shrink-0 space-y-6 z-10 lg:z-0 ${
        navbarOpen ? "block transition ease-in-out duration-300" : "hidden"
      }`}
    >
      <div className="flex justify-end lg:hidden">
        <button
          className="p-3 rounded-full bg-primary text-background shadow-background"
          onClick={() => {
            setNavbarOpen(!navbarOpen);
          }}
        >
          <TbX className="text-base" />
        </button>
      </div>
      <div className="flex items-center gap-x-2">
        <div>
          <img
            src="./buday.jpg"
            className="h-12 w-12 rounded-2xl grayscale hover:grayscale-0 duration-200 transition-all"
            alt="Budi Setiawan"
          />
        </div>
        <div>
          <p className="text-base font-bold text-gray-950">Budi Setiawan</p>
          <p className="text-sm font-semibold bg-clip-text text-transparent bg-linear-to-r from-gray-950 to-gray-900">
            <TypeAnimation
              sequence={[
                "Web Developer.",
                500,
                "Designer.",
                500,
                "Freelancer.",
                500,
                "Engineer.",
                500,
              ]}
              speed={200}
            />
          </p>
        </div>
      </div>
      <ul className="space-y-2 mt-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? sidebarActive : sidebar)}
          >
            <TbHome className="text-base" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? sidebarActive : sidebar)}
          >
            <TbNavigationBolt className="text-base" />
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/stacks"
            className={({ isActive }) => (isActive ? sidebarActive : sidebar)}
          >
            <TbTools className="text-base" />
            Stacks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? sidebarActive : sidebar)}
          >
            <TbUserCircle className="text-base" />
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? sidebarActive : sidebar)}
          >
            <TbMail className="text-base" />
            Contact
          </NavLink>
        </li>
      </ul>
      <ul className="space-y-2 mt-6">
        <li>
          <p className="text-xs font-semibold lg:font-bold px-4 text-gray-950">
            FOLLOW
          </p>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/budi-setiawan-7462741b2/"
            className={sidebar}
            target="_blank"
          >
            <TbBrandLinkedin className="text-base" />
            Linkedin
          </Link>
        </li>
        <li>
          <Link
            to="https://twitter.com/budiset20_"
            className={sidebar}
            target="_blank"
          >
            <TbBrandX className="text-base" />
            Twitter
          </Link>
        </li>
        <li>
          <Link
            to="https://www.instagram.com/buday20_/"
            className={sidebar}
            target="_blank"
          >
            <TbBrandInstagram className="text-base" />
            Instagram
          </Link>
        </li>
      </ul>
    </aside>
  );
}
