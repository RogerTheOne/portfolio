import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experiences from './components/Experiences'

import Footer from './components/Footer'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar/>
      <Hero />
      <About />
      <Projects />
      <Experiences />

      <Contact />
      <Footer />


    
    </div>
    

  )
}

export default App