import React from 'react'
import PastorJohn from '../../assets/david.jpg'
import ElderGrace from '../../assets/sarah.jpg'
import Church from '../../assets/church.jpg'


const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-10">
        {/* Hero Section */}
        <div className="bg-blue-600 py-12 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">About Beulah Springs of Joy</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Our journey of faith, community, and service
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Our Story Section */}
          <section className="mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <img 
                  src={Church}
                  alt="Church gathering"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our history</h2>
                <p className="text-gray-600 mb-2">
                  Beulah Springs of Joy was founded in 2005 with a small group of believers gathering in a home. 
                  Through faith and perseverance, we've grown into a vibrant community serving Kawangware and beyond.
                </p>
                <p className="text-gray-600">
                  Our name comes from Isaiah 62:4 - "You shall no longer be termed Forsaken, nor shall your land any more 
                  be termed Desolate; but you shall be called Hephzibah, and your land Beulah; for the Lord delights in you."
                </p>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="mb-16 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Mission</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 text-lg text-center">
                "To proclaim the Gospel of Jesus Christ, make disciples, and demonstrate God's love through 
                compassionate service to our community."
              </p>
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {[
                  "Evangelism & Outreach",
                  "Discipleship & Growth",
                  "Community Service"
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded shadow text-center">
                    <p className="font-semibold text-blue-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="mb-16 bg-purple-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Vision</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 text-lg text-center">
                "To see individuals and families transformed by the power of God, living purposeful lives 
                that glorify Him in Kawangware and beyond."
              </p>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                {[
                  "A thriving church impacting the community",
                  "Transformed lives through Christ"
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded shadow text-center">
                    <p className="font-semibold text-purple-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Leadership Section - Now with Direct Image Imports */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Leadership</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Pastor 1 */}
              <div className="text-center">
                <img 
                  src={PastorJohn} 
                  alt="BISHOP DAVID MWAURA"
                  className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-blue-500 mb-4"
                />
                <h3 className="text-xl font-bold">BISHOP DAVID MWAURA</h3>
                <p className="text-blue-600 font-medium">SENIOR BISHOP</p>
                <p className="text-gray-600 mt-2">
                  With 20+ years of ministry experience, provides spiritual guidance and vision.
                </p>
              </div>

              {/* Pastor 2 */}
              <div className="text-center">
                <img 
                  src={ElderGrace} 
                  alt="PASTOR SARAH MWAURA"
                  className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-blue-500 mb-4"
                />
                <h3 className="text-xl font-bold">REV SARAH MWAURA</h3>
                <p className="text-blue-600 font-medium">Women's Ministry</p>
                <p className="text-gray-600 mt-2">
                  Leads our women's fellowship and Children ministry.
                </p>
              </div>


            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default AboutUs