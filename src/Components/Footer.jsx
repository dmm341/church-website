import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FaFacebook, 
  FaInstagram, 
  FaTiktok, 
  FaWhatsapp, 
  FaYoutube 
} from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
        <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/about" >About Us</Link></li>
              <li><Link to="/Prayers" >Prayers</Link></li>
              <li><Link to="/events" >Events</Link></li>
              <li><Link to="/contact" >Contact</Link></li>
              <li><Link to="/location" >Location</Link></li>
            </ul>
          </div>
          <div >
            <h3 className="text-xl font-bold mb-4">social media</h3>
            <div className="space-x-4 ">
            <a 
                href="https://facebook.com/yourpage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-white transition"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />facebook
              </a>
              <a 
                href="https://instagram.com/yourpage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white-700 hover:text-white transition"
                aria-label="Instagram"
              >
                <FaInstagram size={24}  />instagram               
              </a>
              <a 
                href="https://tiktok.com/@yourpage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black-700  border-white-500 hover:text-white transition"
                aria-label="TikTok"
              >
                <FaTiktok size={24}  /> TikTok
              </a>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-700 hover:text-white transition"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} /> WhatsApp
              </a>
              <a 
                href="https://youtube.com/yourchannel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-700 hover:text-white transition"
                aria-label="YouTube"
              >
                <FaYoutube size={24} /> YouTube
              </a>           
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="text-gray-400 not-italic">
              <p>kawangware</p>
              <p>kikuyu road</p>
              <p>Phone: </p>
              <p>Email:beulahsprings@gmail.com</p>
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-5 pt-4 text-center text-gray-400 h-3">
          <p>&copy; {new Date().getFullYear()} Beulah Springs of Joy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer