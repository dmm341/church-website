import React from 'react'
import { useParams, Link } from 'react-router-dom'
import upcomingEvents from '../../data/events'



const EventDetail = () => {
  const { id } = useParams()
  const event = upcomingEvents.find((e) => String(e.id) === String(id))

  if (!event) {
    return (
      <div className="min-h-screen pt-10 container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Event not found</h2>
        <p className="text-gray-600 mt-2">We couldn't find the event you're looking for.</p>
        <Link to="/events" className="mt-4 inline-block text-purple-500 hover:underline">
          Back to Events
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-10">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{event.title}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div className="text-gray-600">
                <div className="font-medium">{event.date}</div>
                <div className="mt-1">{event.time} • {event.location}</div>
              </div>
              <div className="mt-4 sm:mt-0 flex space-x-3">
                <div className="flex space-x-3">
                  <Link to="/events" className="text-purple-500 hover:underline">
                    ← Back to Events
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-gray-700">{event.description}</p>

            {/* Add more event details here: schedule, speakers, notes, RSVP, etc. */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default EventDetail
