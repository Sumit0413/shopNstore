import React from 'react'

const Banner = () => {
  return (
   <>
   <div>
    <div className="bg-gray-200 h-120 w-full rounded-3xl flex justify-between items-center mb-10 p-10">
        <div>
            <h1 className='text-6xl bold'>Ready to take climate action?</h1>
            <p className='text-xl text-gray-700 mt-5 w-[50vw]'>Book a free consultation to speak with a carbon export and discuss your goals. Let’s build a smarter, greener future for your business.</p>
            <button className='bg-black mt-10 text-white p-5 rounded-full'>Book a free consultation</button>
        </div>

        <div>
            <img 
            className='h-120 rounded-2xl'
            src="https://framerusercontent.com/images/SrCyBaFxoK99REvYkytv2P440.png?scale-down-to=1024" alt="" />
        </div>
    </div>
   </div>
   </>
  )
}

export default Banner