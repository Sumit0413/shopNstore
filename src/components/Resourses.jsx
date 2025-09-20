import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Resources = () => {
  return (
    <>
    <div className=" pt-20 pl-25 pb-10"  >
      <button className='bg-gray-200 text-sm pb  text-black py-2 px-4 rounded-full mb-3'>Join Us</button>
      <h1 className="text-5xl">Connecting local shops <br /> with their community</h1>
    </div>
    
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      <div className="max-w-6xl w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left card */}
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
              Strategy
            </span>
            <span className="text-gray-500 text-sm">May 11, 2025</span>
          </div>

          <h2 className="text-4xl mb-3">
           Building a trusted online identity for your shop
          </h2>

          <p className="text-gray-600 mb-4">
           Every shop can go digital, but only a few create a presence that truly connects with customers.
          </p>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1662923449070-2de3396e867d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGxvY2FsJTIwc2hvcHMlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Net zero strategy"
              className="rounded-2xl w-full h-96 object-cover"
            />
            <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow hover:bg-green-50 transition">
              <FaArrowRight className="text-green-700" />
            </button>
          </div>
        </div>

        {/* Right card */}
        <div className="flex flex-col pt-12">
          <div className="relative mb-4">
            <img
              src="https://images.unsplash.com/photo-1612703769284-0103b1e5ef70?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Carbon reporting checklist"
              className="rounded-2xl w-full h-96 object-cover"
            />
          </div>

          <div className="flex items-center gap-3 mb-3">
            <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
              Reporting
            </span>
            <span className="text-gray-500 text-sm">May 4, 2025</span>
          </div>

          <h2 className="text-2xl md:text-3xl mb-3">
           Is Your Shop Online-Ready?
          </h2>

          <p className="text-gray-600">
            The future is digital—here’s your simple checklist to get started with ShopNStore.
          </p>
        </div>
      </div>

       <div className="flex justify-center items-center gap-10 pb-20 pl-20 mt-10">
        <img src="https://images.unsplash.com/photo-1667557055212-ec7ec6822661?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9jYWwlMjBzaG9wcyUyMGluZGlhfGVufDB8fDB8fHww" 
        alt="" className=" object-center w-96 h-96 object-cover rounded-2xl" />

        <img src="https://plus.unsplash.com/premium_photo-1661868773745-1c6dfe0ef6fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bG9jYWwlMjBzaG9wcyUyMGluZGlhfGVufDB8fDB8fHww"
         alt="" className="object-center w-96 h-96 object-cover rounded-2xl" />
         <img src="https://images.unsplash.com/photo-1754245646334-f11fce69d822?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvY2FsJTIwc2hvcHMlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D" 
         alt="" className="  w-96 h-96 object-cover rounded-2xl" />
    </div>
    </div>

   
    </>
  );
};

export default Resources;
