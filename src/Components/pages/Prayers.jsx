import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'


const Prayers = () => {
  const [showSupport, setShowSupport] = useState(false)
  const [sending, setSending] = useState(false)

  // Read IDs from environment variables (Vite uses VITE_ prefix)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_nxr1cqn'
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_rts0ul7'
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'GjuPqJxEEWU3HMuHW'

  useEffect(() => {
    if (PUBLIC_KEY) {
      try {
        emailjs.init(PUBLIC_KEY)
      } catch (err) {
        console.warn('EmailJS init error:', err)
      }
    } else {
      console.warn('No EmailJS public key set (VITE_EMAILJS_PUBLIC_KEY)')
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)

    // Debug: log form entries to console so you can verify template variables
    const fd = new FormData(e.target)
    for (const [k, v] of fd.entries()) {
      console.log('form', k, v)
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log('EmailJS result:', result)
        alert('Prayer sent successfully!')
        e.target.reset()
      })
      .catch((error) => {
        console.error('EmailJS error:', error)
        const msg = error?.text || error?.status || JSON.stringify(error)
        alert('Error sending prayer: ' + msg)
      })
      .finally(() => setSending(false))
  }


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
                <label className="block text-gray-700 mb-2" htmlFor="email">Your Email (optional)</label>
                <input
                  type="email"
                  name="reply_to"
                  id="email"
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
                disabled={sending}
                className={`bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-lg transition ${sending ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {sending ? 'Sending...' : 'Submit'}
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
