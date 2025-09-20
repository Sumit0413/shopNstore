import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Resources = () => {
  return (
    <>
    
    
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

          <h2 className="text-2xl md:text-3xl mb-3">
            How to create a credible net-zero strategy
          </h2>

          <p className="text-gray-600 mb-4">
            More and more businesses are announcing net-zero goals—but not all of
            them hold up to scrutiny.
          </p>

          <div className="relative">
            <img
              src="https://framerusercontent.com/images/PlhjsMxQAdqG8RtqxoKK4Gi0A.png?scale-down-to=1024"
              alt="Net zero strategy"
              className="rounded-2xl w-full h-96 object-cover"
            />
            <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow hover:bg-green-50 transition">
              <FaArrowRight className="text-green-700" />
            </button>
          </div>
        </div>

        {/* Right card */}
        <div className="flex flex-col">
          <div className="relative mb-4">
            <img
              src="https://framerusercontent.com/images/bTEdYovAefag9m1zBUQLfUqInA.jpg"
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
            Your 2025 carbon reporting checklist
          </h2>

          <p className="text-gray-600">
            The rules are changing—and smart businesses are preparing now. Get
            started with our new checklist.
          </p>
        </div>
      </div>

       <div className="flex justify-center items-center gap-10 pb-20 pl-20 mt-10">
        <img src="https://framerusercontent.com/images/Q7vLKFApQGZUxATlPlCl9VU9PvI.png?scale-down-to=1024" 
        alt="" className="w-96 h-80 object-cover rounded-2xl" />

        <img src="https://framerusercontent.com/images/ORzEXyTCYnxwx5AKREdco3xZRVk.png?scale-down-to=1024"
         alt="" className="w-96 h-80 object-cover rounded-2xl" />
         <img src="https://framerusercontent.com/images/ROcLy1u1ubPuwV8A6rRtJeS8SO8.png?scale-down-to=512" 
         alt="" className="w-96 h-80 object-cover rounded-2xl" />
    </div>
    </div>

   
    </>
  );
};

export default Resources;
