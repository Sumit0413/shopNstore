import React from 'react'
import Hero from './pages/Hero'
import Localshops from './pages/Localshops'
import ShopDetails from './components/ShopDetails'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
const App = () => {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/localshops' element={<Localshops />} />
      <Route path="/localshops/:id" element={<ShopDetails />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
      
    </Routes>

    </>
  )
}

export default App