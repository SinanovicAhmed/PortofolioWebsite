import DisplayProjects from "../components/DisplayProjects";
import SlidingSkills from "../components/SlidingSkills";

const Portofolio = () => {
  return (
    <section
      id="projects"
      className="w-full h-screen bg-gradient-to-b from-slate-950 to-slate-800 snap-center flex justify-center"
    >
      <div className="relative w-full max-w-[1250px] h-full flex flex-col justify-around px-5 sm:px-14 pt-20 pb-10">
        <DisplayProjects />
        <SlidingSkills />
      </div>
    </section>
  );
};

export default Portofolio;
