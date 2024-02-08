import HoverHeader from "../components/HoverHeader";
import cv from "../assets/files/cv.pdf";
import { scrollToComponent } from "../helpers/scroll";
import { motion } from "framer-motion";
import { fade_left_animation, fade_right_animation } from "../constants/framer-motion-animations";

const Hero = () => {
  const header = "Hi, I am Software Engineer and a Web Developer";

  return (
    <section
      id="hero"
      className="w-full h-screen bg-gradient-to-b from-slate-950 to-slate-800 snap-center flex justify-center items-center"
    >
      <div className="max-w-[1250px] w-full flex flex-col-reverse sm:flex-row justify-center items-center">
        <motion.div
          {...fade_left_animation}
          className="w-full sm:w-1/2 h-full flex flex-col justify-center pl-5 pr-5 sm:pr-0 sm:pl-14 pt-12 sm:pt-0"
        >
          <h2 className="text-white text-xl sm:text-3xl lg:text-5xl font-bold">
            <HoverHeader header={header} />
          </h2>
          <p className="w-full text-white text-justify text-xs lg:text-base py-5 sm:py-10">
            Welcome to my digital realm, where creativity meets functionality. As a full-stack web developer,
            I thrive on the dynamic synergy of code and design, building intuitive and powerful websites that
            leave a lasting impression.
          </p>
          <div className="flex gap-5">
            <a href={cv} download="cv" target="_blank" rel="noreferrer">
              <button className="px-4 py-2 text-xs lg:text-base bg-purple-600 text-white hover:bg-transparent border-2 border-purple-600">
                Download CV
              </button>
            </a>
            <button
              onClick={() => scrollToComponent("contact")}
              className="px-4 py-2 text-xs lg:text-base border-2 borer-white text-white hover:bg-purple-600 hover:border-purple-600"
            >
              Contact me
            </button>
          </div>
        </motion.div>
        <motion.div
          {...fade_right_animation}
          className="flex w-full sm:w-1/2 h-full justify-center items-center sm:justify-normal sm:items-normal 
                      px-5 min-[365px]:px-20 min-[465px]:px-28 sm:px-20 md:px-20 lg:px-24"
        >
          <img src="/images/heroimage.png" alt="hero image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
