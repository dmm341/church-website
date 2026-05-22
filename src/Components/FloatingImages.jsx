import React from "react";
import { motion as Motion } from "framer-motion";

// Import images from your assets folder
import pic1 from "../assets/church.jpg";
import pic2 from "../assets/david.jpg";
import pic3 from "../assets/sarah.jpg";
import pic4 from "../assets/youth.jpg";

const images = [pic1, pic2, pic3, pic4];
const repeatedImages = [...images, ...images];

const FloatingImages = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gray-50 py-10">
      <Motion.div
        className="flex w-max gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...repeatedImages, ...repeatedImages].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="h-80 w-[400px] flex-shrink-0 rounded-xl object-cover shadow-lg"
          />
        ))}
      </Motion.div>
    </div>
  );
};

export default FloatingImages;
