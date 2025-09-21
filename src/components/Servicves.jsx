import React from 'react'
import ReviewSlider from './Review'
import ScrollStack from '../Animate/ScrollStack'
import { motion } from "framer-motion";

const Servicves = () => {


   const cards = [
      {
        id: 1,
        title: "Your guide for the road ahead",
        text: "We help small and mid-sized businesses navigate the path to sustainability. Whether you're setting out or refining your route, we’ll guide you every step of the way",
        img: "https://framerusercontent.com/images/BQPO2uq66eJSeyeiVqdanuk6qSo.png?scale-down-to=1024",
      },
      {
        id: 2,
        title: "Card 2",
           text: "We help small and mid-sized businesses navigate the path to sustainability. Whether you're setting out or refining your route, we’ll guide you every step of the way",
        img: "https://framerusercontent.com/images/bTEdYovAefag9m1zBUQLfUqInA.jpg",
      },
      {
        id: 3,
        title: "Card 3",
          text: "We help small and mid-sized businesses navigate the path to sustainability. Whether you're setting out or refining your route, we’ll guide you every step of the way",
        img: "https://framerusercontent.com/images/Q7vLKFApQGZUxATlPlCl9VU9PvI.png?scale-down-to=1024",
      },
    ];

  return (
    <>
    
 <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className="h-screen flex items-center justify-center snap-start "
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex max-w-5xl w-full items-center gap-10 px-10">
            {/* Left: Text */}
            <div className="flex-1">
              <h2 className="text-4xl  mb-4">{card.title}</h2>
              <p className="text-gray-600 text-lg">{card.text}</p>
            </div>

            {/* Right: Image */}
            <div className="flex-1">
              <img
                src={card.img}
                alt={card.title}
                className="rounded-xl shadow-md object-cover w-full h-80"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    <div className='text-center mt-20'>
        <button className='bg-gray-200 text-sm pb  text-black py-2 px-4 rounded-full mb-10'>
            Benefits
        </button>
        <h1 className='text-6xl pb-5'>Why choose us?</h1>
        <p>Sustainability can be a confusing space. We help you cut through the noise and focus on your business.</p>
    </div>

     <div className="flex flex-col gap-4 max-w-6xl mx-auto ">
      
      {/* Top Row */}
      <div className="flex gap-4 mt-6">
        {/* Left (Get ahead of regulation) */}
        <div className="flex-1 bg-gray-50 shadow-md rounded-3xl p-6 h-120 ">
          <h2 className="text-xl font-semibold">Get ahead of regulation</h2>
          <p className="text-gray-600 mt-2">Random placeholder text...</p>
        </div>

        {/* Right (Win more contracts) */}
        <div className="w-1/3 bg-gray-50 shadow-md rounded-3xl p-6 ">
          <h2 className="text-xl font-semibold">Win more contracts</h2>
          <p className="text-gray-600 mt-2">Random details...</p>
        </div>
      </div>

      {/* Middle Row */}
      <div className="flex gap-4">
        {/* Boost your team (big wide) */}
        <div className="flex-1 bg-gray-50 shadow-md rounded-3xl p-6 h-80">
          <h2 className="text-xl font-semibold">Boost your team</h2>
          <p className="text-gray-600 mt-2">Think of us like your in-house carbon experts...</p>
        </div>

        {/* Create real impact (small square) */}
        <div className="w-1/3 bg-gray-50 shadow-md rounded-3xl p-6">
          <h2 className="text-xl font-semibold">Create real impact</h2>
          <p className="text-gray-600 mt-2">Placeholder...</p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex gap-4">
        {/* Award winning */}
        <div className="flex-1 bg-gray-50 shadow-md rounded-3xl p-6 text-center h-60">
          <h2 className="text-xl font-semibold">Award Winning</h2>
          <p className="text-gray-600 mt-2">🏆 Random award text...</p>
        </div>
      </div>

      <ReviewSlider />

      
    </div>
    <div className='text-center mt-10 mb-20'>

    <button className='bg-black text-sm pb  text-white py-2 px-4 rounded-full '>About</button>
    </div>
    </>
  )
}

export default Servicves