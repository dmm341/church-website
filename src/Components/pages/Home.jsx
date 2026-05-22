import React from "react";
import Hero from "../Hero";
import Body from "../body";
import FloatingImages from "../FloatingImages";
import LatestSermon from "../LatestSermon";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        <Hero />
        <LatestSermon />
        <FloatingImages />
        <Body />
      </main>
    </div>
  );
};

export default Home;
