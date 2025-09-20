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
    <div className="px-12">
      <h1 className='text-6xl pt-30  text-center'>Carbon consultants <br /> for savvy SMEs</h1>
      <p className='text-center pt-8'>We help small and growing businesses cut carbon, boost credibility, and <br /> move forward with confidence. Your low-carbon journey starts here.</p>     
     <div className='text-center pt-5'>
       <button className='bg-black text-xl  text-white py-2 px-4 rounded-full '> Get Started </button>
     </div>

     <div className='grid grid-cols-4  gap-4 pt-20 pb-20'>
      <img className='rounded-xl' src="https://framerusercontent.com/images/lOIiZIbZ6z5IuKw8w5L1gAueiQ.png?scale-down-to=1024" alt="hero" />
      <img className='rounded-xl' src="https://framerusercontent.com/images/xmOi3oUEWf9jXx7zkMLeYyPG6G4.png?scale-down-to=1024" alt="" />
      <img className='rounded-xl' src="https://framerusercontent.com/images/uNtTHiBiVKVsv1TG5HTmpSxQ.png?scale-down-to=1024" alt="" />
      <img className='rounded-xl' src="https://framerusercontent.com/images/C1gsYq8L4SNYikf5gEIRtjadD8.png?scale-down-to=1024" alt="" />
     </div>

     {/* //About Us Section */}

     <div className='text-center'>
      <button className='bg-black text-sm pb  text-white py-2 px-4 rounded-full '>About</button>
      <p className='text-4xl pt-4'>We're a small team of passionate <br /> carbon experts helping forward-thinking <br /> companies prepare for the future.</p>
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