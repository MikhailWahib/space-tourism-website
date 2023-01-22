import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import data from './data.json'
import Home from './Pages/Home'
import Destination from './Pages/Destination'
import Crew from './Pages/Crew'
import Technology from './Pages/Technology'
import Navbar from './components/Navbar'

function App() {

  const location = useLocation();

  return (
    <>
      <Navbar />

      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination
            data={data.destinations}
          />} />
          <Route path='/crew' element={<Crew
            data={data.crew}
          />} />
          <Route path='/technology' element={<Technology
            data={data.technology}
          />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
