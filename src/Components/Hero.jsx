import React from "react";
import heroBg from "../assets/church.jpg";

const Hero = () => {
  return (
    <div
      className="relative bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800 py-16 md:py-20 text-white overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* decorative overlay to mimic previous opacity */}
      <div aria-hidden className="absolute inset-0 bg-black opacity-20" />

      <div className="relative z-10 text-center px-5 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-3 animate-fade-in">
          Welcome to Beulah Springs of Joy
        </h1>
        <p className="text-base md:text-lg mb-5 opacity-90">A place where everybody is somebody</p>
        <a
          href="/contact"
          className="bg-white text-purple-700 font-semibold py-2 px-6 rounded-full shadow hover:shadow-lg hover:bg-purple-100 transition-transform transform hover:scale-105"
        >
          Join Us
        </a>
      </div>
    </div>
  );
};

export default Hero;
