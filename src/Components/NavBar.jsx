import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="bg-blue-500 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="text-white font-bold text-lg md:text-xl">
            BEULAH SPRINGS OF JOY
          </span>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-200">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-200">About Us</Link>
            <Link to="/Prayers" className="text-white hover:text-gray-200">Prayers</Link>
            <Link to="/events" className="text-white hover:text-gray-200">Events</Link>
            <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
          <Link to="/Location" className="text-white hover:text-gray-200"> location</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar