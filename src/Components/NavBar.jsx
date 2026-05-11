import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  FaBars,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTimes,
  FaYoutube,
} from 'react-icons/fa'
import navLinks from '../data/navigation'
import { churchInfo } from '../data/churchInfo'
import logo from '../assets/beulah logo.png'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const leftLinks = navLinks.slice(0, 4)
  const rightLinks = navLinks.slice(4)

  const linkClass = ({ isActive }) =>
    `px-5 py-3 rounded-full text-lg font-semibold transition ${
      isActive
        ? 'bg-white text-blue-700'
        : 'text-white hover:bg-blue-500'
    }`

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <div className="hidden md:block bg-blue-900 text-white">
          <div className="container mx-auto flex h-12 items-center justify-between px-4 text-base font-semibold">
            <div className="flex items-center gap-5">
              <a href="https://facebook.com/yourpage" aria-label="Facebook" className="hover:text-blue-200">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com/yourpage" aria-label="Instagram" className="hover:text-blue-200">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/@beulahspringsofjoychurch7258" aria-label="YouTube" className="hover:text-blue-200">
                <FaYoutube />
              </a>
            </div>

            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-200" />
                {churchInfo.shortAddress[1]}
              </span>
              <a href={`tel:${churchInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-blue-200">
                <FaPhoneAlt className="text-blue-200" />
                {churchInfo.phone}
              </a>
            </div>

            <div className="flex items-center gap-6">
              <Link to="/contact" className="hover:text-blue-200">Partner With Us</Link>
              <Link to="/contact" className="hover:text-blue-200">Become a Volunteer</Link>
            </div>
          </div>
        </div>

        <nav className="bg-blue-700/95 shadow-md md:bg-transparent md:pt-4 md:shadow-none">
          <div className="container mx-auto px-4">
            <div className="relative flex h-20 items-center justify-between md:h-24 md:rounded-full md:bg-blue-600 md:px-8 md:shadow-lg">
              <div className="hidden flex-1 items-center gap-1 md:flex">
                {leftLinks.map((link) => (
                  <NavLink key={link.path} to={link.path} className={linkClass} end={link.path === '/'}>
                    {link.name}
                  </NavLink>
                ))}
              </div>

              <Link
                to="/"
                className="flex items-center gap-3 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
              >
                <img
                  src={logo}
                  alt="Beulah Springs of Joy logo"
                  className="h-14 w-14 rounded-full bg-white object-cover ring-2 ring-white md:h-32 md:w-32 md:ring-4 md:ring-blue-600"
                />
                <span className="text-white font-bold text-lg sm:text-xl md:hidden">
                  BEULAH SPRINGS OF JOY
                </span>
              </Link>

              <div className="hidden flex-1 items-center justify-end gap-1 md:flex">
                {rightLinks.map((link) => (
                  <NavLink key={link.path} to={link.path} className={linkClass}>
                    {link.name}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  className="ml-3 rounded-full bg-white px-9 py-4 text-lg font-bold text-blue-700 transition hover:bg-blue-50"
                >
                  Give
                </Link>
              </div>

              <button
                className="text-white focus:outline-none md:hidden"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden bg-blue-800 px-4 pb-4 pt-2 shadow-lg">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block rounded px-4 py-3 text-lg font-semibold ${
                        isActive ? 'bg-white text-blue-700' : 'text-white hover:bg-blue-700'
                      }`
                    }
                    end={link.path === '/'}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}

export default NavBar
