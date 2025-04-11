// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Announcement from './components/Announcement';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ServiceHero from './components/Service';
import AppointmentBooking from './components/AppointmentBooking';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Announcement />
      <Header></Header>
      <Navigation />
      <Hero />
      <ServiceHero/>
      <AppointmentBooking />
      <Outlet />
    </>
  )
}

export default App
