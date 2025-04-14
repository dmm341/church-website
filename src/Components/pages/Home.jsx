import React from 'react'
import NavBar from '../NavBar'
import Hero from '../Hero'
import Body from '../body'
import Footer from '../Footer'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <Body />
      </main>
      <Footer />
    </div>
  )
}

export default Home