import React from 'react'

const Banner = () => {
  return (
   <>
   <div>
    <div className="bg-gray-100 h-120 w-full rounded-3xl flex justify-center items-center mb-10 pl-20">
        <div>
            <h1 className='text-6xl bold'>Ready to take your shop online?</h1>
            <p className='text-xl text-gray-700 mt-5 w-[50vw]'>Add your business to ShopNStore today and create your own digital business card. Let’s build a smarter, connected future for your shop</p>
            <button className='bg-black mt-10 text-white p-5 text-2xl rounded-2xl'>Register Now</button>
        </div>

        <div>
            <img 
            className='h-120 rounded-2xl'
            src="https://images.unsplash.com/photo-1603834305747-b0fb6f8bbfd6?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    </div>
   </div>
   </>
  )
}

export default Banner