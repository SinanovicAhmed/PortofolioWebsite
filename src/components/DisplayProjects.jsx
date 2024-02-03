import { useState } from "react";
import { projects } from "../constants/projectList";
const DisplayProjects = () => {
  const [projectIndex, setProjectIndex] = useState(0);

  const goNext = () => {
    if (projectIndex < projects.length - 1) {
      setProjectIndex((prevIndex) => prevIndex + 1);
    } else {
      setProjectIndex(0);
    }
  };

  const goPrevious = () => {
    if (projectIndex > 0) {
      setProjectIndex((prevIndex) => prevIndex - 1);
    } else {
      setProjectIndex(projects.length - 1);
    }
  };

  return (
    <section>
      <div className="flex flex-col-reverse lg:flex-row w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col justify-between w-full lg:w-1/2 pt-6 lg:pt-0 lg:pr-5">
          <span className="lg:block">
            <h2 className="text-white text-md md:text-xl font-bold pb-2">{projects[projectIndex].name}</h2>
            <p className="text-white text-xs md:text-sm">{projects[projectIndex].description}</p>
          </span>
          <span className="w-full flex gap-4 mt-4 lg:mt-0">
            <button className="px-4 py-2 text-[10px] lg:text-base border-2 text-white hover:bg-purple-600 hover:border-purple-600">
              Demo
            </button>
            <button className="px-4 py-2 text-[10px] lg:text-base border-2 text-white hover:bg-purple-600 hover:border-purple-600">
              View Code
            </button>
          </span>
        </div>
        <div className="max-w-[600px] lg:w-1/2 lg:pl-5 mx-auto">
          <img className="object-cover" src={projects[projectIndex].image} />
        </div>
      </div>
      <span className="flex justify-center items-center gap-3 pt-10">
        <button onClick={goPrevious} className="text-white text-xl p-2 font-extrabold hover:text-purple-500">
          &lt;
        </button>
        {projects.map((project) =>
          project.id === projectIndex + 1 ? (
            <button
              key={project.id}
              onClick={() => setProjectIndex(project.id - 1)}
              className="text-purple-500 font-bold hover:cursor-pointer"
            >
              o
            </button>
          ) : (
            <button
              key={project.id}
              onClick={() => setProjectIndex(project.id - 1)}
              className="text-white font-bold hover:cursor-pointer"
            >
              o
            </button>
          )
        )}
        <button onClick={goNext} className="text-white text-xl p-2 font-extrabold hover:text-purple-500">
          &gt;
        </button>
      </span>
    </section>
  );
};

export default DisplayProjects;
