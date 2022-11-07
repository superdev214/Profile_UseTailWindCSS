import React from "react";
import Nav from "../component/Nav";
const Home = () => {
  return (
    <div className="container 2xl:w-[1140px]">
      <h1 className="font-[Poppins,sans-serif] text-5xl font-bold text-white">
        Song Juan Juan
      </h1>
      <h2 className="text-white/[.8] text-[24px] mt-[20px] font-[Raleway,sans-serif]">
        I am a senior{" "}
        <span className="text-white pb-[6px] border-b-[2px] border-[#18d26e]">
          Full stack engineer
        </span>
      </h2>

      {/* Navigation bar place */}

      <Nav />
      {/* Picture Button */}
    </div>
  );
};

export default Home;
