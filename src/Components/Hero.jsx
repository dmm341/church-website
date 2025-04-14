import React from 'react'

const Hero = () => {
  return (
    <div className="bg-purple-500 py-16 flex items-center justify-center">
      <div className="text-center text-white p-5 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Beulah Springs of Joy</h1>
        <p className="text-xl mb-8">A place where everybody is somebody and Jesus is Lord</p>
        <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-purple-100 transition">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Hero