import React from "react";
import Hero from "../Hero";
import Body from "../body";
import FloatingImages from "../FloatingImages";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        <Hero />
        <FloatingImages />
        <Body />
      </main>
    </div>
  );
};

export default Home;
