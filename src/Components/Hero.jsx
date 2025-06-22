import React from 'react'

const Hero = () => {
  return (
    <div className="relative bg-purple-700 mt-4 py-20 text-white overflow-hidden">
      <img 
        src="/hero-bg.jpg" 
        alt="Church gathering" 
        className="absolute inset-0 w-full h-full object-cover opacity-20" 
      />
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          Welcome to Beulah Springs of Joy
        </h1>
        <p className="text-xl mb-6">
          A place where everybody is somebody and Jesus is Lord
        </p>
        <a 
          href="/contact" 
          className="bg-white text-purple-700 font-semibold py-2 px-6 rounded-full hover:bg-purple-100 transition"
        >
          Join Us
        </a>
      </div>
    </div>
  )
}

export default Hero
