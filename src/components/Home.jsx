import React from "react";
import myImage from "../assets/20241227_111350.jpg";

const Home = () => {
  return (
    <div id="Home" className="text-white bg-black flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center p-1">
          <h1 className="text-xl md:text-4xl font-bold leading-normal tracking-tighter mb-4">
            Hey there, I am Vinay Desai
          </h1>
          <p className="text-sm md:text-lg tracking-tight mb-8 max-w-md">
            I’m a passionate Software Developer with three years of experience
            at SAP. Having a strong enthusiasm for problem-solving, and
            continuous learning.
          </p>
          <p className="text-sm md:text-lg tracking-tight mb-8 max-w-md">
            Outside of work I enjoy hiking the mountains, doing photography, and
            going on bike rides.
          </p>
        </div>
        <div className="w-full flex justify-center items-center mt-8 ">
          <img
            className="w-4/5 sm:w-3/5 md:w-2/6 rounded-lg"
            src={myImage}
            alt="About Me"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
