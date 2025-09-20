import React from 'react'
import Hero from './pages/Hero'
import Localshops from './pages/Localshops'

import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/localshops' element={<Localshops />} />
      
    </Routes>

    </>
  )
}

export default App