import aboutImage from "/images/about.webp";
import HoverHeader from "../components/HoverHeader";
import { motion } from "framer-motion";
import { fade_left_animation, fade_right_animation } from "../constants/framer-motion-animations";

const About = () => {
  const header = "About me";

  return (
    <section
      id="about"
      className="w-full flex justify-center items-center h-screen bg-gradient-to-b from-slate-800 to-slate-950 snap-always snap-center px-5 xs:px-12 sm:px-14"
    >
      <div className="w-full max-w-[1250px] flex flex-col sm:flex-row items-center">
        <motion.div {...fade_left_animation} className="relative w-[80%] sm:w-[45%]">
          <h2 className="absolute bottom-2 sm:top-2 right-[-20px] sm:right-[-30%] text-start text-white text-4xl sm:text-6xl lg:text-8xl font-sans font-bold drop-shadow-2xl">
            <HoverHeader header={header} />
          </h2>
          <img src={aboutImage} alt="about image" className="object-cover rounded-full" />
        </motion.div>
        <motion.div
          {...fade_right_animation}
          className="w-full sm:w-1/2 text-justify text-xs lg:text-base sm:pl-10 pt-14 text-gray-200"
        >
          I am Ahmed Sinanović, a dedicated Software Engineer and Web Developer. Holding a Bachelors degree in
          Software Engineering, my expertise lies in crafting innovative and user-oriented web applications.
          For a closer look at my work, feel free to explore my projects on{" "}
          <a
            className="font-medium text-purple-600 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-[1px] before:origin-right before:transition-transform 
                     before:duration-300 before:scale-x-0 before:bg-purple-500 before:absolute before:left-0 before:bottom-0 cursor-pointer"
            href="https://github.com/SinanovicAhmed"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          . I am driven by a passion for continuous learning and ongoing exploration in the ever-evolving
          world of web development.
        </motion.div>
      </div>
    </section>
  );
};

export default About;
