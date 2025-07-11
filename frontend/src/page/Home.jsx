import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Hero1 from '../components/Hero1'
import Feature from '../components/Feature'
import Feature1 from '../components/Feature1'
import Feature2 from '../components/Feature2'

const Home = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <Header />
        <Hero />
        <Hero1 />
        <Feature />
        <Feature1 />
        <Feature2/>
        {/* Future sections can be added here */}

      </main>
    </div>
  )
}

export default Home
