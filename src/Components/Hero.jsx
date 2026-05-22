import React from "react";
import heroBackgroundImage from "../assets/hero.png";

const Hero = () => {
  return (
    <div
      className="relative flex h-56 w-full items-center justify-center overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white sm:h-64 md:h-80 lg:h-96"
      style={{
        backgroundImage: `url(${heroBackgroundImage})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
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
          className="bg-white text-blue-700 font-semibold py-2 px-6 rounded-full shadow hover:shadow-lg hover:bg-blue-100 transition-transform transform hover:scale-105"
        >
          Join Us
        </a>
      </div>
    </div>
  );
};

export default Hero;
