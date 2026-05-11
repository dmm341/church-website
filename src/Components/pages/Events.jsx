import React from 'react'
import { Link } from 'react-router-dom'
import { FaClock, FaInfoCircle, FaMapMarkerAlt } from 'react-icons/fa'
import upcomingEvents, { annualEvents } from '../../data/events'

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        <div className="bg-blue-600 py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
            <p className="text-xl">
              Join us for worship, fellowship, and spiritual growth
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {upcomingEvents.length === 0 ? (
            <div className="bg-white border border-blue-100 rounded-lg shadow p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-800">No upcoming events scheduled</h3>
              <p className="text-gray-600 mt-2">Please check back later for updates</p>
            </div>
          ) : (
            <section className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <article
                  key={event.id}
                  className="bg-white border border-blue-100 rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <h2 className="text-2xl font-bold text-gray-800">{event.title}</h2>
                      <span className="self-start bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                        {event.date}
                      </span>
                    </div>

                    <div className="space-y-3 mt-5">
                      <div className="flex items-center text-gray-600">
                        <FaClock className="text-blue-600 mr-3" />
                        <span>{event.time}</span>
                      </div>

                      <div className="flex items-center text-gray-600">
                        <FaMapMarkerAlt className="text-blue-600 mr-3" />
                        <span>{event.location}</span>
                      </div>

                      <p className="text-gray-700 leading-relaxed">{event.description}</p>

                      <Link
                        to={`/events/${event.id}`}
                        className="mt-5 inline-flex w-full items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition focus:outline-none focus:ring-2 focus:ring-blue-300"
                        aria-label={`Learn more about ${event.title}`}
                      >
                        <FaInfoCircle className="mr-2" />
                        Learn More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          )}

          <section className="mt-16 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Annual Events</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {annualEvents.map((event) => (
                <article
                  key={event.title}
                  className="bg-white border border-blue-100 p-6 rounded-lg shadow text-center"
                >
                  <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                  <p className="text-blue-600 font-semibold mt-2">{event.month}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Events
