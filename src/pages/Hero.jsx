import React from 'react'
import Nav from '../components/Nav'
import Servicves from '../components/Servicves'
import FAQSection from '../components/Faqs'
import Resources from '../components/Resourses'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Hero = () => {
  return (
    <>
    <Nav />
    <div className="px-30 font-poppins">
      <h1 className='text-6xl pt-30   text-center'>Digital Business  <br />Cards for Local Shops</h1>
      <p className='text-center pt-8'>We enable local businesses to create a digital identity, <br />manage payments, and engage with customers in a simple, reliable way. </p>     
     <div className='text-center pt-5'>
       <button className='bg-black text-xl  text-white py-2 px-4 rounded-full '> Get Started </button>
     </div>

     <div className='grid grid-cols-4  gap-4 pt-20 pb-20'>
      <img className='rounded-xl' src="https://images.unsplash.com/photo-1641048174454-5c48dc0baafc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU2fHx8ZW58MHx8fHx8" alt="hero" />
      <img className='rounded-xl' src="https://images.unsplash.com/photo-1654626950649-9761a8bff71a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="" />
      <img className='rounded-xl' src="https://images.unsplash.com/photo-1665072750074-f708730eab23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8" alt="" />
      <img className='rounded-xl' src="https://images.unsplash.com/photo-1707300863816-4315dcd3ad3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8" alt="" />
     </div>

     {/* //About Us Section */}

     <div className='text-center'>
      <button className=' text-sm pb  bg-gray-200 py-2 px-4 rounded-full '>About</button>
      <p className='text-5xl pt-4'>We are a team dedicated to empowering small and<br /> growing businesses with simple digital tools for visibility,<br /> payments, and customer engagement.</p>
     <button className='bg-black text-xl  text-white py-2 px-4 rounded-full mt-7 '> Get Started </button>
     </div>


     <Servicves />
     <Resources />
     <FAQSection />
     <Banner />
     
   
   
    </div>
   <Footer />
    </>
  )
}

export default Hero