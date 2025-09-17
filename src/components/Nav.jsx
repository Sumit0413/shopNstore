import React from 'react'

const Nav = () => {
  return (
   <>
      <nav className="bg-gray-800 p-4 flex justify-between items-center px-10">
      {/* Logo/Name on the left */}
      <div className="text-white text-xl font-bold">
        shopNstore
      </div>

      {/* Navigation links on the right */}
      <ul className="flex space-x-8">
        <li>
          <a
            href="/"
            className="text-white hover:text-green-400 transition-colors duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="text-white hover:text-green-400 transition-colors duration-300"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="/services"
            className="text-white hover:text-green-400 transition-colors duration-300"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="/locations"
            className="text-white hover:text-green-400 transition-colors duration-300"
          >
            Locations
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="text-white hover:text-green-400 transition-colors duration-300"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
   </>
  )
}

export default Nav