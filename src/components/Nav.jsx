import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <>

    <div className="flex justify-between items-center text-xl px-30 font-poppins">
        <Link to='/'><div className='text-4xl py-5'>Bizcard+</div></Link>
        <div className='space-x-10 py-5 '>
          <Link to='/localshops'>
            <button className='cursor-pointer text-gray-400'>Local Shop</button>
          </Link>
          <Link to='/about'>
            <button className='cursor-pointer text-gray-400'>About</button>
          </Link>
          <Link to='/profile'>    
            <button className='cursor-pointer text-gray-400'>Profile</button>
          </Link>
        </div>
    </div>
    </>
  )
}

export default Nav