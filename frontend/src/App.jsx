import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
