import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaArrowLeft, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import upcomingEvents from '../../data/events'

const EventDetail = () => {
  const { id } = useParams()
  const event = upcomingEvents.find((e) => String(e.id) === String(id))

  if (!event) {
    return (
      <div className="min-h-screen container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Event not found</h2>
        <p className="text-gray-600 mt-2">We couldn't find the event you're looking for.</p>
        <Link to="/events" className="mt-4 inline-flex items-center justify-center text-blue-600 hover:underline">
          <FaArrowLeft className="mr-2" />
          Back to Events
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        <div className="bg-blue-600 py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-3">{event.title}</h1>
            <p className="text-xl">Event details and information</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <article className="bg-white rounded-lg shadow-md p-8 border border-blue-100">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
                  {event.date}
                </span>
                <div className="mt-5 space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <FaClock className="mr-3 text-blue-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-3 text-blue-600" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              <Link to="/events" className="inline-flex items-center text-blue-600 hover:underline">
                <FaArrowLeft className="mr-2" />
                Back to Events
              </Link>
            </div>

            <p className="text-gray-700 leading-relaxed mt-8">{event.description}</p>
          </article>
        </div>
      </main>
    </div>
  )
}

export default EventDetail
