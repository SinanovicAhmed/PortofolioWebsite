import { useState } from "react";
import HamburgerSVG from "../assets/svgs/hamburgerSVG";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const toggleMenu = () => setShowMenu((prevState) => !prevState);

  return (
    <>
      <div
        className="absolute top-0 h-10 w-screen flex justify-between items-center px-5 xs:px-12 sm:px-14
                 bg-opacity-30 p-6 backdrop-filter backdrop-blur-md"
      >
        <h2 className="text-white text-2xl font-bold">
          Dev<span className="text-purple-400">AS</span>
        </h2>

        <div className="hidden sm:flex gap-5 text-white">
          <a
            href="#"
            className="transition-all duration-100 hover:font-bold"
            onClick={() => scrollToComponent("hero")}
          >
            Hero
          </a>
          <a
            href="#"
            className="transition-all duration-100 hover:font-bold"
            onClick={() => scrollToComponent("about")}
          >
            About
          </a>
          <a
            href="#"
            className="transition-all duration-100 hover:font-bold"
            onClick={() => scrollToComponent("skills")}
          >
            Skills
          </a>
          <a
            href="#"
            className="transition-all duration-100 hover:font-bold"
            onClick={() => scrollToComponent("projects")}
          >
            Projects
          </a>
          <a
            href="#"
            className="transition-all duration-100 hover:font-bold"
            onClick={() => scrollToComponent("contact")}
          >
            Contact
          </a>
        </div>

        <div className="sm:hidden">
          <span onClick={toggleMenu}>
            <HamburgerSVG />
          </span>
        </div>
      </div>
      {showMenu && (
        <div
          className="absolute left-0 top-12 h-full flex flex-col sm:hidden gap-3 text-white pr-12 px-5 xs:px-12 sm:px-14 
                     bg-opacity-30 backdrop-filter backdrop-blur-md"
        >
          <a
            href="#"
            className="transition-all duration-100 hover:font-bold"
            onClick={() => scrollToComponent("hero")}
          >
            Hero
          </a>
          <a
            href="#"
            className="transition-all duration-100 hover:font-bold"
            onClick={() => scrollToComponent("about")}
          >
            About
          </a>
          <a
            href="#"
            className="transition-all duration-100 hover:font-bold"
            onClick={() => scrollToComponent("skills")}
          >
            Skills
          </a>
          <a
            href="#"
            className="transition-all duration-100 hover:font-bold"
            onClick={() => scrollToComponent("projects")}
          >
            Projects
          </a>
          <a
            href="#"
            className="transition-all duration-100 hover:font-bold"
            onClick={() => scrollToComponent("contact")}
          >
            Contact
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
