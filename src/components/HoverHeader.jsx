/* eslint-disable react/prop-types */

const HoverHeader = ({ header }) => {
  return (
    <>
      {header.split("").map((char, index) => {
        return (
          <span key={index} className="hover:animate-ping hover:text-purple-600 hover:cursor-pointer">
            {char}
          </span>
        );
      })}
    </>
  );
};

export default HoverHeader;
