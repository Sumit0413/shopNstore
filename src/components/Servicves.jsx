import React from 'react'
import ReviewSlider from './Review'

const Servicves = () => {
  return (
    <>
    <div>
    <div className='flex  justify-center gap-40 mt-20'>
        <div>
              <button className='bg-gray-200 text-sm pb  text-black py-2 px-4 rounded-full mb-10'>Services</button>
              <p className='text-6xl'>Your guide for <br /> the road ahead</p>
              <p className='pt-6 text-gray-400 text-sm'>We help small and mid-sized businesses navigate the <br /> path to sustainability. Whether you're setting out or <br /> refining your route, we’ll guide you every step of the way</p>
        </div>
        <div>
            <img src="https://framerusercontent.com/images/BQPO2uq66eJSeyeiVqdanuk6qSo.png?scale-down-to=1024"
            className='rounded-xl w-120 '
            alt="" />
        </div>
    </div>

        <div className='flex  justify-center gap-40 mt-30'>
        <div>
             
              <p className='text-6xl'>Your guide for <br /> the road ahead</p>
              <p className='pt-6 text-gray-400 text-sm'>We help small and mid-sized businesses navigate the <br /> path to sustainability. Whether you're setting out or <br /> refining your route, we’ll guide you every step of the way</p>
        </div>
        <div>
            <img src="https://framerusercontent.com/images/BQPO2uq66eJSeyeiVqdanuk6qSo.png?scale-down-to=1024"
            className='rounded-xl w-120 '
            alt="" />
        </div>
    </div>


        <div className='flex  justify-center gap-40 mt-30'>
        <div>
             
              <p className='text-6xl'>Your guide for <br /> the road ahead</p>
              <p className='pt-6 text-gray-400 text-sm'>We help small and mid-sized businesses navigate the <br /> path to sustainability. Whether you're setting out or <br /> refining your route, we’ll guide you every step of the way</p>
        </div>
        <div>
            <img src="https://framerusercontent.com/images/BQPO2uq66eJSeyeiVqdanuk6qSo.png?scale-down-to=1024"
            className='rounded-xl w-120 '
            alt="" />
        </div>
    </div>


        <div className='flex  justify-center gap-40 mt-30'>
        <div>
             
              <p className='text-6xl'>Your guide for <br /> the road ahead</p>
              <p className='pt-6 text-gray-400 text-sm'>We help small and mid-sized businesses navigate the <br /> path to sustainability. Whether you're setting out or <br /> refining your route, we’ll guide you every step of the way</p>
        </div>
        <div>
            <img src="https://framerusercontent.com/images/BQPO2uq66eJSeyeiVqdanuk6qSo.png?scale-down-to=1024"
            className='rounded-xl w-120 '
            alt="" />
        </div>
    </div>
    </div>

    <div className='text-center mt-20'>
        <button className='bg-gray-200 text-sm pb  text-black py-2 px-4 rounded-full mb-10'>
            Benefits
        </button>
        <h1 className='text-6xl pb-5'>Why choose us?</h1>
        <p>Sustainability can be a confusing space. We help you cut through the noise and focus on your business.</p>
    </div>

     <div className="flex flex-col gap-4 max-w-6xl mx-auto ">
      
      {/* Top Row */}
      <div className="flex gap-4 mt-6">
        {/* Left (Get ahead of regulation) */}
        <div className="flex-1 bg-gray-50 shadow-md rounded-3xl p-6 h-120 ">
          <h2 className="text-xl font-semibold">Get ahead of regulation</h2>
          <p className="text-gray-600 mt-2">Random placeholder text...</p>
        </div>

        {/* Right (Win more contracts) */}
        <div className="w-1/3 bg-gray-50 shadow-md rounded-3xl p-6 ">
          <h2 className="text-xl font-semibold">Win more contracts</h2>
          <p className="text-gray-600 mt-2">Random details...</p>
        </div>
      </div>

      {/* Middle Row */}
      <div className="flex gap-4">
        {/* Boost your team (big wide) */}
        <div className="flex-1 bg-gray-50 shadow-md rounded-3xl p-6 h-80">
          <h2 className="text-xl font-semibold">Boost your team</h2>
          <p className="text-gray-600 mt-2">Think of us like your in-house carbon experts...</p>
        </div>

        {/* Create real impact (small square) */}
        <div className="w-1/3 bg-gray-50 shadow-md rounded-3xl p-6">
          <h2 className="text-xl font-semibold">Create real impact</h2>
          <p className="text-gray-600 mt-2">Placeholder...</p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex gap-4">
        {/* Award winning */}
        <div className="flex-1 bg-gray-50 shadow-md rounded-3xl p-6 text-center h-60">
          <h2 className="text-xl font-semibold">Award Winning</h2>
          <p className="text-gray-600 mt-2">🏆 Random award text...</p>
        </div>
      </div>

      <ReviewSlider />

      
    </div>
    <div className='text-center mt-10 mb-20'>

    <button className='bg-black text-sm pb  text-white py-2 px-4 rounded-full '>About</button>
    </div>
    </>
  )
}

export default Servicves