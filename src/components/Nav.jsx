import React from 'react'

const Nav = () => {
  return (
    <>
    <div className="flex justify-between items-center text-xl px-30 font-poppins">
        <div className='text-4xl py-5'>shopNstore</div>
        <div className='space-x-10 py-5 '>
            <button className='cursor-pointer text-gray-400'>Local Shop</button>
            <button className='cursor-pointer text-gray-400'>About</button>
            <button className='cursor-pointer text-gray-400'>Profile</button>

        </div>
    </div>
    </>
  )
}

export default Nav