import React from "react";
import myImage from "../assets/20241227_111350.jpg";

const Home = () => {
  return (
    <section
      id="Home"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 py-20">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Hey there, I'm <span className="text-blue-500">Vinay Desai</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-300">
            A passionate Software Developer with three years of experience at
            SAP. Having a strong enthusiasm for problem-solving, and continuous
            learning.
          </p>
          <p className="text-sm sm:text-base text-gray-300">
            Outside of work I enjoy hiking the mountains, doing photography, and
            going on bike rides.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={myImage}
            alt="Vinay Desai"
            className="rounded-2xl w-4/5 md:w-3/4 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
