import React from 'react'
import { Link } from 'react-router-dom'
import upcomingEvents, { annualEvents } from '../../data/events'
const Events = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-10">
        {/* Events Header */}
        <div className="bg- py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
            <p className="text-xl">
              Join us for worship, fellowship, and spiritual growth
            </p>
          </div>
        </div>
        {/* Events Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Events List */}
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-2xl font-bold text-gray-800">{event.title}</h2>
                    <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                      {event.date}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mt-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-gray-600">{event.time}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span className="text-gray-600">{event.location}</span>
                    </div>
                    
                    <p className="text-gray-700 mt-3">{event.description}</p>
                    
                    <div className="mt-4">
                      <Link
                        to={`/events/${event.id}`}
                        className="flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded transition focus:outline-none focus:ring-2 focus:ring-purple-300"
                        aria-label={`Learn more about ${event.title}`}
                        title={`Learn more about ${event.title}`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
                        </svg>
                        <span className="ml-2">Learn More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Events Message (conditional) */}
          {upcomingEvents.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No upcoming events scheduled</h3>
              <p className="text-gray-500 mt-2">Please check back later for updates</p>
            </div>
          )}

          {/* Annual Events Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Annual Events</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {annualEvents.map((event) => (
                <div key={event.title} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                  <p className="text-purple-500 font-medium mt-2">{event.month}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default Events
