import React from 'react'
import Nav from '../components/Nav'
import Shops from '../components/Shops'

const Localshops = () => {
  return (
    <>
    <Nav />

    <div className='text-center'>
         <div className=" pt-20 pl-25 pb-10"  >
      <button className='bg-gray-200 text-sm   text-black py-2 px-4 rounded-full mb-3'>Nearby Shops</button>
      <h1 className="text-5xl pt-8">Your Shop, Online and Growing</h1>
      <p className='text-gray-600 pt-3 text-lg'>Meet the team and learn about our mission.</p>
    </div>
        
    </div>
    <Shops />
    </>
  )
}

export default Localshops