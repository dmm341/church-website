import React from 'react'
import NavBar from '../NavBar'
import Hero from '../Hero'
import Body from '../body'
import Footer from '../Footer'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        <Hero />
        <Body />
      </main>
      
    </div>
  )
}

export default Home