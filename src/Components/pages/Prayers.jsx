import React from 'react'
import emailjs from '@emailjs/browser'
import { useState } from 'react'


const Prayers = () => {
  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_2k1ujxf',      // Replace this
      'template_rts0ul7',     // Replace this
      e.target,
      'GjuPqJxEEWU3HMuHW'       // Replace this
    )
    .then(() => {
      alert('Prayer sent successfully!')
      e.target.reset()
    })
    .catch((error) => {
      alert('Error sending prayer: ' + error.text)
    })
  }
  const [showSupport, setShowSupport] = useState(false)


  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-10">
        {/* Header and other content */}
        <div className="bg-purple-500 py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Prayer Requests</h1>
            <p className="text-xl">
              Submit your prayer needs and join us in prayer
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Submit Prayer Request</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="request">Prayer Request *</label>
                <textarea
                  name="request"
                  id="request"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-lg transition"
              >
                Submit
              </button>
            </form>
          </div>
        
        {/* Assistance Section */}
<div className="mt-10 text-center">
  <button
    onClick={() => setShowSupport(!showSupport)}
    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition"
  >
    {showSupport ? 'Hide Support Options' : 'Need Help? Chat or Call Us'}
  </button>

  {showSupport && (
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* Chat Cards */}
      {[
        { name: 'Mary', phone: '254727556458' },
        { name: 'Peter', phone: '254798112233' },
        { name: 'Grace', phone: '254711224466' },
        { name: 'James', phone: '254790334455' },
      ].map(({ name, phone }) => (
        <a
          key={phone}
          href={`https://wa.me/${phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-green-100 hover:bg-green-200 border border-green-400 p-4 rounded-lg shadow text-left transition"
        >
          <h3 className="font-bold text-lg text-green-800">Chat with {name}</h3>
          <p className="text-sm text-green-700">{phone}</p>
        </a>
      ))}

      {/* Call Cards */}
      {[
        { name: 'Lucy', phone: '254701112233' },
        { name: 'John', phone: '254733445566' },
        { name: 'Esther', phone: '254745667788' },
        { name: 'David', phone: '254756778899' },
      ].map(({ name, phone }) => (
        <a
          key={phone}
          href={`tel:+${phone}`}
          className="block bg-purple-100 hover:bg-purple-200 border border-purple-400 p-4 rounded-lg shadow text-left transition"
        >
          <h3 className="font-bold text-lg text-purple-800">Call {name}</h3>
          <p className="text-sm text-purple-700">{phone}</p>
        </a>
      ))}
    </div>
  )}
</div>
</div>
      </main>
    </div>
    
  )
}

export default Prayers
