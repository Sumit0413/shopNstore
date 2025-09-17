import React from "react";

const Hero = () => {
  return (
    <>
      <div className="px-20 pt-6">

        <div className="flex justify-between items-center">
        <div className="w-1/2 space-y-2 font-bold">
          <h1 className="text-5xl"> Smart Dukaan </h1>
          <h1 className="text-6xl">Community Connect</h1>
        </div>

      <div className="w-1/4 space-y-4 ">
          <p className="text-2xl">
            Connecting local businesses with their community through beautiful
            digital storefronts. Discover, connect, and support your
            neighborhood shops.
          </p>
          
          <button className=" border-2 text-3xl ml-8 py-2 px-4 ">
           Explore Now
          </button>
        </div>
        </div>
        
         <div className="w-full mt-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Image 1 */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1754245646334-f11fce69d822?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvY2FsJTIwc2hvcHMlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-full  h-120 object-cover"
          />
        </div>

        {/* Image 2 */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1536514888772-a269c6a8a198?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9jYWwlMjBzaG9wcyUyMGluZGlhfGVufDB8fDB8fHww"
            alt=""
            className="w-full mt-15 h-120 object-cover"
          />
        </div>

        {/* Image 3 */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1723155928463-1dd3aca53bab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvY2FsJTIwc2hvcHMlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-full  h-120 object-cover"
          />
        </div>

        {/* Image 4 */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1739066598279-1297113f5c6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvY2FsJTIwc2hvcHMlMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-ful mt-10  h-120 object-cover"
          />
        </div>
      </div>
    </div>

      </div>
    </>
  );
};

export default Hero;
