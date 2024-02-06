import DisplayProjects from "../components/DisplayProjects";
import SlidingSkills from "../components/SlidingSkills";
import { motion } from "framer-motion";
import { fade_down_animation } from "../constants/framer-motion-animations";

const Portofolio = () => {
  return (
    <section
      id="projects"
      className="w-full h-screen bg-gradient-to-b from-slate-950 to-slate-800 snap-center flex justify-center"
    >
      <div className="relative w-full max-w-[1250px] h-full flex flex-col justify-between px-5 sm:px-14 pt-20 pb-5">
        <motion.div {...fade_down_animation}>
          <h2 className="text-white text-2xl md:text-3xl font-bold">&lt; Portofolio /&gt;</h2>
        </motion.div>
        <DisplayProjects />
        <SlidingSkills />
      </div>
    </section>
  );
};

export default Portofolio;
