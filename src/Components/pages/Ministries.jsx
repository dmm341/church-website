import React from 'react'
import { Link } from 'react-router-dom'
import ministries from '../../data/ministries'

const Ministries = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-10">
        <div className="bg-blue-600 py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Ministries</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Learn about the ministries that serve our church and community.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">What we do</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {ministries.map((m) => (
                <Link
                  key={m.slug}
                  to={`/ministries/${m.slug}`}
                  className="block bg-white p-6 rounded shadow text-center hover:shadow-lg transition"
                >
                  <h3 className="font-semibold text-blue-600 mb-2">{m.title}</h3>
                  <p className="text-gray-600 text-sm">{m.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-8 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Get involved</h2>
            <p className="text-gray-700 text-center">
              To join a ministry, visit the Contact page or speak with one of our leaders after service.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Ministries
