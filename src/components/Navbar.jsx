import { useState } from "react";
import HamburgerSVG from "../assets/svgs/hamburgerSVG";
import { scrollToComponent } from "../helpers/scroll";
import { motion } from "framer-motion";
import { fade_down_animation, fade_in_animation_noscale } from "../constants/framer-motion-animations";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prevState) => !prevState);

  return (
    <>
      <motion.div
        {...fade_down_animation}
        className="absolute z-10 top-0 h-10 w-screen flex justify-center items-center
                   bg-opacity-30 py-6 backdrop-filter backdrop-blur-md"
      >
        <div className="w-full max-w-[1250px] flex justify-between px-5 sm:px-14">
          <h2 className="text-white text-2xl font-bold">
            Dev<span className="text-purple-600">SA</span>
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
              onClick={() => scrollToComponent("projects")}
            >
              Portofolio
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
      </motion.div>
      {showMenu && (
        <motion.div
          {...fade_in_animation_noscale}
          className="z-10 absolute top-12 h-full flex flex-col sm:hidden gap-3 text-white pr-12 px-5 xs:px-12 sm:px-14 
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
            onClick={() => scrollToComponent("projects")}
          >
            Portofolio
          </a>
          <a
            href="#"
            className="transition-all duration-100 hover:font-bold"
            onClick={() => scrollToComponent("contact")}
          >
            Contact
          </a>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
