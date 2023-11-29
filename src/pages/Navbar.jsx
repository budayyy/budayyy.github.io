import { TbMenu2 } from "react-icons/tb";
import { TypeAnimation } from "react-type-animation";

export default function Navbar({ navbarOpen, setNavbarOpen }) {
  return (
    <nav className="w-full bg-white border-b p-4 block lg:hidden">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-2">
          <img
            src="./buday.jpg"
            className="h-10 w-10 rounded-full grayscale hover:grayscale-0 duration-200 transition-all"
            alt="Budi Setiawan"
          />
          <div>
            <p className="text-base font-bold text-gray-950">Budi Setiawan</p>
            <p className="text-sm font-normal bg-clip-text text-transparent bg-gradient-to-r from-gray-950 to-gray-900">
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
        <div>
          <button
            className="p-2 rounded bg-gray-200"
            onClick={() => {
              setNavbarOpen(!navbarOpen);
            }}
          >
            <TbMenu2 className="text-gray-950 text-lg" />
          </button>
        </div>
      </div>
    </nav>
  );
}
