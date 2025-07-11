import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Hero1 from '../components/Hero1'
import Feature from '../components/Feature'

const Home = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <Header />
        <Hero />
        <Hero1 />
        <Feature />
        {/* Future sections can be added here */}

      </main>
    </div>
  )
}

export default Home
