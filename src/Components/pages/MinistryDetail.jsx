import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ministries from '../../data/ministries'

const MinistryDetail = () => {
  const { slug } = useParams()
  const ministry = ministries.find((m) => m.slug === slug)

  if (!ministry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-6">
          <h2 className="text-2xl font-bold">Ministry not found</h2>
          <p className="mt-4">We couldn't find that ministry. Return to the <Link to="/ministries" className="text-blue-600 underline">ministries list</Link>.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-10">
        <div className="bg-blue-600 py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-2">{ministry.title}</h1>
            <p className="max-w-2xl mx-auto">{ministry.description}</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
            {ministry.events.length === 0 ? (
              <p className="text-gray-600">No upcoming events. Check back later or contact us to get involved.</p>
            ) : (
              <div className="space-y-4">
                {ministry.events.map((e) => (
                  <div key={e.id} className="p-4 bg-white rounded shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{e.title}</h3>
                        <p className="text-sm text-gray-600">{e.date}</p>
                      </div>
                      <div className="text-sm text-gray-700">{e.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-bold mb-2">Get involved</h2>
            <p className="text-gray-700 mb-4">To join or learn more, visit the <Link to="/contact" className="text-blue-600 underline">Contact</Link> page or speak with a leader after service.</p>
            <Link to="/ministries" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">Back to ministries</Link>
          </section>
        </div>
      </main>
    </div>
  )
}

export default MinistryDetail
