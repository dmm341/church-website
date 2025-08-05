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

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Church Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">Beulah Springs of Joy</h3>
            <p className="text-gray-400">
              A place where everybody is somebody and Jesus is Lord.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebook size={20} />, url: "https://facebook.com/yourpage" },
                { icon: <FaInstagram size={20} />, url: "https://instagram.com/yourpage" },
                { icon: <FaTiktok size={20} />, url: "https://tiktok.com/@yourpage" },
                { icon: <FaWhatsapp size={20} />, url: "https://wa.me/1234567890" },
                { icon: <FaYoutube size={20} />, url: "https://youtube.com/yourchannel" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={`${social.icon.type.name} link`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Prayers", path: "/prayers" },
                { name: "Events", path: "/events" },
                { name: "Contact", path: "/contact" },
                { name: "Location", path: "/location" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <address className="not-italic space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-400" />
                <div>
                  <p className="text-gray-400">Kikuyu Road, Kawangware</p>
                  <p className="text-gray-400">Nairobi, Kenya</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-blue-400" />
                <a href="tel:+254700123456" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +254 700 123456
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-400" />
                <a href="mailto:info@beulahsprings.org" className="text-gray-400 hover:text-white transition-colors duration-300">
                  info@beulahsprings.org
                </a>
              </div>
            </address>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Service Times</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaClock className="mr-3 text-blue-400" />
                <div>
                  <p className="font-medium text-white">Sunday Worship</p>
                  <p className="text-gray-400">9:00 AM - 12:00 PM</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-3 text-blue-400" />
                <div>
                  <p className="font-medium text-white">prayer Day</p>
                  <p className="text-gray-400">teusday 5:00 PM - 6:30 PM</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-3 text-blue-400" />
                <div>
                  <p className="font-medium text-white"> women prayer Day</p>
                  <p className="text-gray-400">Wednesday 8:00 Am - 10:00 AM</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-3 text-blue-400" />
                <div>
                  <p className="font-medium text-white">Prayer and fasting</p>
                  <p className="text-gray-400">thursday 5:00 PM - 6:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Beulah Springs of Joy. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors duration-300">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer