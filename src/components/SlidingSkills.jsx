import { skills } from "../constants/skills";
const SlidingSkills = () => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {skills.map((image) => (
          <li key={image}>
            <img width={60} height={60} src={image.image} alt={image.name} />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {skills.map((image) => (
          <li key={image}>
            <img width={60} height={60} src={image.image} alt={image.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlidingSkills;
