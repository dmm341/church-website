import React from 'react'

const Body = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Ministries</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We offer various ministries to serve all age groups and help everyone grow in their faith.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Sunday Worship</h3>
          <p className="text-gray-600">
            Join us every Sunday for uplifting worship and powerful messages from God's Word.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Bible Study</h3>
          <p className="text-gray-600">
            Mid-week Bible study groups for deeper understanding and fellowship.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Youth Ministry</h3>
          <p className="text-gray-600">
            Engaging programs for young people to grow in faith and build relationships.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Body