import React from 'react'
import Hero from './pages/Hero'
import Localshops from './pages/Localshops'
import ShopDetails from './components/ShopDetails'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Vendor from './pages/Vendor'
import ShopVendor from './pages/ShopVendor'
const App = () => {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/localshops' element={<Localshops />} />
      <Route path="/localshops/:id" element={<ShopDetails />} />
      <Route path="/shop-details/:id" element={<ShopDetails />} />
      <Route path="/shop-vendor/:shopId" element={<ShopVendor />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/vendor' element={<Vendor />} />

    </Routes>

    </>
  )
}

export default App