import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { churchInfo, serviceTimes } from '../../data/churchInfo'

const Location = () => {
  const { lat, lng } = churchInfo.coordinates

  const visitDetails = [
    { title: "Address", icon: <FaMapMarkerAlt />, text: churchInfo.address },
    { title: "Phone", icon: <FaPhone />, text: churchInfo.phone },
    { title: "Email", icon: <FaEnvelope />, text: churchInfo.email },
  ]

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <main className="bg-gray-50 dark:bg-gray-900">
        <div className="bg-blue-600 py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Location</h1>
            <p className="text-xl">
              Come worship with us at Beulah Springs of Joy
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden h-96">
                <iframe
                  title="Church Location"
                  src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Visit Us</h2>

                <div className="space-y-4">
                  {visitDetails.map((detail) => (
                    <div key={detail.title} className="flex items-start">
                      <div className="text-blue-600 mr-3 mt-1">
                        {detail.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{detail.title}</h3>
                        <p className="text-gray-600">{detail.text}</p>
                      </div>
                    </div>
                  ))}

                  <div className="pt-4 px-4">
                    <h3 className="font-semibold text-gray-800 mb-3 text-lg">Service Times</h3>
                    <ul className="space-y-3 text-gray-700 text-sm">
                      {serviceTimes.slice(0, 3).map((service) => (
                        <li key={service.title} className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                          <span className="font-medium">{service.title}</span>
                          <span className="text-gray-600">{service.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Location
