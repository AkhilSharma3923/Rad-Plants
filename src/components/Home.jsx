import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between max-w-[90%] md:max-w-[1400px] mx-auto p-4">
      {/* Left */}
      <div className="w-full md:w-1/2 mt-16 md:mt-32">
        <h1 className="text-[32px] md:text-[56px] text-[#030303ff] transition-transform duration-300 hover:translate-x-2 hover:translate-y-2 hover:font-bold">
          Find perfect plants <br />
          for your home
        </h1>
        <p className="text-xl md:text-2xl font-medium mt-4 mb-6 transition-opacity duration-300 hover:opacity-80 hover:translate-x-1 hover:translate-y-1">
          Beautiful plants that encourage <br /> you to get creative
        </p>
        <button className="w-[150px] md:w-[211px] h-[50px] md:h-[56px] bg-black text-white mt-2 transition-transform duration-300 transform hover:scale-105">
          SHOP NOW
        </button>
      </div>
      {/* Right */}
      <div className="w-full md:w-[500px] h-[400px] md:h-[600px] mt-10 md:mt-20 relative group">
        <img
          className="w-full h-full bg-cover transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
          src="https://assets.api.uizard.io/api/cdn/stream/c8515796-8789-48b2-9884-dec4cd6778f4.jpg"
          alt="Decorative plants"
        />
      </div>
    </div>
  );
};

export default Home;
