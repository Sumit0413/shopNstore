import React from 'react'
import Hero from './pages/Hero'
import Localshops from './pages/Localshops'
import ShopDetails from './components/ShopDetails'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/localshops' element={<Localshops />} />
      <Route path="/localshops/:id" element={<ShopDetails />} />
      
    </Routes>

    </>
  )
}

export default App