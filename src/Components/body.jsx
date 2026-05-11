import React from "react";
import { motion as Motion } from "framer-motion";
import {
  BuildingLibraryIcon,
  HandRaisedIcon,
  UserGroupIcon,
  TvIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "Sunday Worship",
    description:
      "Every Sunday from 9:00 AM, we come together for a time of worship, prayer, and the Word—gathering as one family to encounter God and be strengthened for the week ahead",
    icon: BuildingLibraryIcon,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Prayer Meeting",
    description:
      "We have church prayers every Tuesday from 5:30–7:00 PM, women's prayers on Wednesday from 8:00–10:00 AM, and on Thursdays we fast from 6:00 AM to 6:00 PM followed by prayers from 5:30–7:00 PM.",
    icon: HandRaisedIcon,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Youth Ministry",
    description:
      "After the service, the youth come together for fellowship — a time to talk openly about life and faith, support each other, and share tea and snacks",
    icon: UserGroupIcon,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "TV Programs",
    description:
      "We air our Kingdom TV program twice every week—on Saturdays from 6:30 to 7:00 PM, and on Sundays from 7:45 to 8:00 PM—sharing sermons from our previous services.",
    icon: TvIcon,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
];

const Body = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-br from-gray-50 to-white">
      <Motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We offer various services to serve all age groups and help everyone
          grow in their faith.
        </p>
      </Motion.div>

      <Motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <Motion.div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${service.bgColor} hover:bg-white`}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`w-16 h-16 ${service.color} mb-4 mx-auto bg-gray-100 rounded-full flex items-center justify-center`}>
                <IconComponent className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </Motion.div>
          );
        })}
      </Motion.div>
    </div>
  );
};

export default Body;
