import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-blue-500 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="text-white font-bold text-lg md:text-xl">
            BEULAH SPRINGS OF JOY
          </span>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-blue-200">Home</a>
            <a href="#" className="text-white hover:text-blue-200">About</a>
            <a href="#" className="text-white hover:text-blue-200">Ministries</a>
            <a href="#" className="text-white hover:text-blue-200">Events</a>
            <a href="#" className="text-white hover:text-blue-200">Contact</a>
          </div>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar