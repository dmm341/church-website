import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-blue-500 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="text-white font-bold text-lg md:text-xl">
            BEULAH SPRINGS OF JOY
          </span>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-200">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-200">About Us</Link>
            <Link to="/prayers" className="text-white hover:text-gray-200">Prayers</Link>
            <Link to="/events" className="text-white hover:text-gray-200">Events</Link>
            <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
            <Link to="/location" className="text-white hover:text-gray-200">Location</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-blue-600 px-4 py-2 space-y-2">
            <Link to="/" className="block text-white hover:bg-blue-500 px-2 py-1 rounded">Home</Link>
            <Link to="/about" className="block text-white hover:bg-blue-500 px-2 py-1 rounded">About Us</Link>
            <Link to="/prayers" className="block text-white hover:bg-blue-500 px-2 py-1 rounded">Prayers</Link>
            <Link to="/events" className="block text-white hover:bg-blue-500 px-2 py-1 rounded">Events</Link>
            <Link to="/contact" className="block text-white hover:bg-blue-500 px-2 py-1 rounded">Contact</Link>
            <Link to="/location" className="block text-white hover:bg-blue-500 px-2 py-1 rounded">Location</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar