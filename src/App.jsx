import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Footer from './sections/Footer'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
const App = () => {
  return (
    <main className='max-w-7xl mx-auto '>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </main>
  )
}

export default App
