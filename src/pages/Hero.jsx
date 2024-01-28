import ComputerSVG from "../assets/svgs/computerSVG";
import HoverHeader from "../components/HoverHeader";

const Hero = () => {
  const header = "Hi, I am Fullstack Web Developer";
  return (
    <div
      id="hero"
      className="w-full h-screen bg-gradient-to-b from-slate-950 to-slate-800 snap-center flex flex-col sm:flex-row"
    >
      <div className="w-full sm:w-1/2 h-full flex flex-col justify-center px-5 xs:px-12 sm:px-14 pt-12 sm:pt-0">
        <h2 className="text-white text-xl sm:text-3xl lg:text-5xl font-bold">
          <HoverHeader header={header} />
        </h2>
        <p className="text-white text-xs lg:text-sm pt-5 sm:pt-10">
          Welcome to my digital realm, where creativity meets functionality. As a full-stack web developer, I
          thrive on the dynamic synergy of code and design, building intuitive and powerful websites that
          leave a lasting impression.
        </p>
      </div>
      <div
        className="flex w-full sm:w-1/2 h-full justify-center items-center sm:justify-normal sm:items-normal 
                      px-5 min-[365px]:px-20 min-[465px]:px-28 sm:px-20 md:px-20 lg:px-24"
      >
        <ComputerSVG />
      </div>
    </div>
  );
};

export default Hero;
