import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import EventsSection from './components/EventsSection'
import WhySection from './components/WhySection'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <Header />
    <HeroSection />
    <EventsSection />
    <WhySection />
    <Footer />
    </>
  )
}

export default App
