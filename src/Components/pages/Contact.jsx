import React from 'react'
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { churchInfo } from '../../data/churchInfo'

const Contact = () => {
  const contactDetails = [
    {
      title: "Address",
      icon: <FaMapMarkerAlt />,
      lines: [churchInfo.address],
    },
    {
      title: "Phone",
      icon: <FaPhone />,
      lines: [churchInfo.phone],
    },
    {
      title: "Email",
      icon: <FaEnvelope />,
      lines: [churchInfo.email, "prayer@beulahsprings.org"],
    },
    {
      title: "Office Hours",
      icon: <FaClock />,
      lines: churchInfo.officeHours,
    },
  ]

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <main className="bg-gray-50 dark:bg-gray-900">
        <div className="bg-blue-600 py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">
              We'd love to hear from you
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Contact Details</h2>

                <div className="space-y-6">
                  {contactDetails.map((detail) => (
                    <div key={detail.title} className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-600">
                        {detail.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{detail.title}</h3>
                        {detail.lines.map((line) => (
                          <p key={line} className="text-gray-600 mt-1 first:mt-0">{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact
