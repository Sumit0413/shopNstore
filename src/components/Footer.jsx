import React from 'react'

const Footer = () => {
  return (
   <>
    <div className="bg-[#13261B] text-gray-300 py-12 px-4 md:px-8 rounded-t-2xl h-96">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* Brand section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-6xl  text-green-400 mb-2">shopNstore</h3>
            <p className="text-gray-400 max-w-xs">Carbon consultants for savvy SMEs.</p>
            <div className="flex mt-4 space-x-2">
              <span className="text-green-500">Instagram</span>
              <span className="text-green-500">LinkedIn</span>
              <span className="text-green-500">Twitter</span>
            </div>
          </div>

          {/* Links section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-xl">
            {/* Pages column */}
            <div>
              <h4 className="text-gray-400 font-semibold uppercase tracking-wider mb-4">Pages</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Information column */}
            <div>
              <h4 className="text-gray-400 font-semibold uppercase tracking-wider mb-4">Information</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Privacy policy</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">404</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© 2025 shopNstore All rights reserved</p>
          </div>
          <div className="flex items-center">
            <p className="text-gray-400">Built by our Team</p>
            <span className="mx-2 text-gray-600">•</span>
            <p className="text-gray-400">Made in MERN</p>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Footer