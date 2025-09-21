import React from 'react'
import Nav from '../components/Nav'
import Servicves from '../components/Servicves'
import FAQSection from '../components/Faqs'
import Resources from '../components/Resourses'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import ScrollReveal from '../Animate/ScrollReveal'
import SplitText from "../Animate/Splittext"; 
import CurvedLoop from '../Animate/Curvedloop'
import { ScrollVelocity } from '../Animate/ScrollFast'






const Hero = () => {

  


   const handleAnimationComplete = () => {
  console.log('All letters have animated!');
}; 

  return (
    <>


    <Nav />

    <div className='flex flex-col text-center'>
<SplitText
  text="Digital Business"
  className="  text-6xl pt-12   text-center"
  delay={100}
  duration={0.6}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>

<SplitText
  text="Cards for Local Shops"
  className="  text-6xl pt-2   text-center"
  delay={120}
  duration={0.5}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>
</div>

    <div className="px-30 font-poppins">
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

   
  
<ScrollVelocity
  texts={['BizCards +', 'Bazaar']} 
  velocity={40} 
  className="custom-scroll-text"
/>


     <Resources />
     <FAQSection />


     <Banner />
     

   
    </div>
   <Footer />
    </>
  )
}

export default Hero