import React from 'react'


const Location = () => {
  // Church location coordinates (replace with your actual location)
  const churchLocation = {
    lat: -1.2812273756336996,  // Example: Nairobi coordinates
    lng: 36.73189762541832,
    address: "Kikuyu Road,next to Havard School, Kawangware, Nairobi, Kenya",
    phone: "+254 700 123456",
    email: "info@beulahsprings.org"
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-10">
        {/* Location Header */}
        <div className="bg-blue-600 py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Location</h1>
            <p className="text-xl">
              Come worship with us at Beulah Springs of Joy
            </p>
          </div>
        </div>

        {/* Location Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Map Section */}
            <div className="md:w-1/2">
              <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden h-96">
                {/* Embedded Google Map - Replace with your actual embed code */}
                <iframe
                  title="Church Location"
                  src={`https://maps.google.com/maps?q=${churchLocation.lat},${churchLocation.lng}&z=15&output=embed`}
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

            {/* Address Section */}
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Visit Us</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-blue-500 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Address</h3>
                      <p className="text-gray-600">{churchLocation.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-blue-500 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">{churchLocation.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-blue-500 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">{churchLocation.email}</p>
                    </div>
                  </div>

                  <div className="pt-4 px-4">
  <h3 className="font-semibold text-gray-800 mb-3 text-lg">Service Times</h3>
  <ul className="space-y-3 text-gray-700 text-sm">
    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <span className="font-medium">Sunday Worship</span>
      <span className="text-gray-600">9:00 AM - 12:00 PM</span>
    </li>
    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <span className="font-medium">Women Prayer</span>
      <span className="text-gray-600">Wednesday 8:00 AM - 10:00 AM</span>
    </li>
    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <span className="font-medium">Prayer Meeting</span>
      <span className="font-bold text-blue-600">Tuesday 5:30 PM - 7:00 PM</span>
    </li>
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