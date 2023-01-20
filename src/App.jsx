import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import PageOne from './Pages/PageOne'
import PageTwo from './Pages/PageTwo'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pageone' element={<PageOne />} />
        <Route path='/pagetwo' element={<PageTwo />} />
      </Routes>
    </>
  )
}

export default App
