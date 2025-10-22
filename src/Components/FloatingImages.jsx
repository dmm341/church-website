import React from "react";
import { motion } from "framer-motion";

// Import images from your assets folder
import pic1 from "../assets/church.jpg";
import pic2 from "../assets/david.jpg";
import pic3 from "../assets/sarah.jpg";
import pic4 from "../assets/youth.jpg";

const images = [pic1, pic2, pic3, pic4];

const FloatingImages = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gray-50 py-10">
      <motion.div
        className="flex space-x-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 50, // speed of one full scroll
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Duplicate images for smooth infinite scroll */}
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-100 h-80 object-cover rounded-xl shadow-lg"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default FloatingImages;
