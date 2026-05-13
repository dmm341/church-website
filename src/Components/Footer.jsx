import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock
} from 'react-icons/fa'
import { churchInfo } from '../data/churchInfo'
import navLinks from '../data/navigation'

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", icon: <FaFacebook />, url: "https://facebook.com/yourpage" },
    { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com/yourpage" },
    { name: "TikTok", icon: <FaTiktok />, url: "https://tiktok.com/@yourpage" },
    { name: "WhatsApp", icon: <FaWhatsapp />, url: "https://wa.me/254719620443" },
    { name: "YouTube", icon: <FaYoutube />, url: "https://www.youtube.com/@beulahspringsofjoychurch7258" }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 pt-14 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-white tracking-wide">
              {churchInfo.name}
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {churchInfo.tagline}
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h3>

            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="inline-block hover:text-blue-400 hover:translate-x-1 transition-all duration-300"
                  >
                    &rarr; {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1" />
                <div>
                  {churchInfo.shortAddress.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <FaPhone className="text-blue-400" />
                <a
                  href={`tel:${churchInfo.phone.replace(/\s/g, '')}`}
                  className="hover:text-blue-400 transition"
                >
                  {churchInfo.phone}
                </a>
              </div>

              <div className="flex gap-3 items-center">
                <FaEnvelope className="text-blue-400" />
                <a
                  href={`mailto:${churchInfo.email}`}
                  className="hover:text-blue-400 transition"
                >
                  {churchInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* <div>
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-700 pb-2">
              Service Times
            </h3>

            <div className="space-y-4 text-sm">
              {serviceTimes.map((service) => (
                <div key={service.title} className="flex gap-3">
                  <FaClock className="text-blue-400 mt-1" />
                  <div>
                    <p className="text-white">{service.title}</p>
                    <p className="text-gray-400">{service.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {churchInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
