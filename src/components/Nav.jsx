import React from 'react'

const Nav = () => {
  return (
    <>
    <div className="flex justify-center items-center text-xl gap-96  ">
        <div className='text-4xl py-5'>shopNstore</div>
        <div className='space-x-4 py-5 '>
            <button>Login</button>
            <button>SignUp</button>
            <button>Logout</button>
            <button>Profile</button>
          
        </div>
    </div>
    </>
  )
}

export default Nav