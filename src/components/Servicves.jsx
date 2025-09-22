import React from 'react'
import ReviewSlider from './Review'
import ScrollStack from '../Animate/ScrollStack'
import { motion } from "framer-motion";

const Servicves = () => {
  const advantages = [
  {
    id: 1,
    title: "Get ahead of regulation",
    text: "Environmental rules and standards are changing fast. Businesses that delay often struggle with last-minute compliance, leading to higher costs and unnecessary risks. By working with us, you’ll stay ahead of the curve—anticipating new policies before they arrive. We break down complex legislation into clear, actionable steps so your company is always ready, compliant, and seen as a responsible leader in your industry.",
  },
  {
    id: 2,
    title: "Win more contracts",
    text: "Clients, investors, and partners now look for sustainability credentials before signing deals. Companies that can demonstrate credible environmental responsibility enjoy a significant edge in competitive bids and tenders. We help you build that credibility, showcasing your green achievements in a way that wins trust and opens doors to larger projects, stronger partnerships, and long-term growth opportunities.",
  },
  {
    id: 3,
    title: "Boost your team",
    text: "Sustainability isn’t just about strategy—it’s about people. We work alongside your employees like an extension of your team, providing practical training, hands-on workshops, and expert mentoring. This builds in-house skills, confidence, and awareness, empowering your workforce to make smarter day-to-day decisions. Over time, sustainability becomes part of your company culture rather than just a policy on paper.",
  },
  {
    id: 4,
    title: "Create real impact",
    text: "Going green isn’t only good for the planet—it’s good for your business. From reducing waste and energy costs to building brand loyalty and attracting eco-conscious customers, the benefits of measurable sustainability efforts are wide-reaching. We focus on delivering results you can track—so you’ll not only reduce your carbon footprint but also see clear improvements in efficiency, savings, and reputation.",
  },
  {
    id: 5,
    title: "Award Winning",
    text: "🏆 Our expertise has been recognized with multiple awards and certifications in sustainability consulting. But what matters most is the success of our clients. From small businesses to growing enterprises, we’ve helped organizations achieve ambitious sustainability goals, improve their market standing, and gain recognition as leaders in their fields. Our proven track record ensures you’re in trusted hands.",
  },
];



   const cards = [
      {
        id: 1,
        title: "Your guide for the road ahead",
        text: "We help small and mid-sized businesses navigate the path to sustainability. Whether you're setting out or refining your route, we’ll guide you every step of the way",
        img: "https://framerusercontent.com/images/BQPO2uq66eJSeyeiVqdanuk6qSo.png?scale-down-to=1024",
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
          <div className="flex  w-full items-center px-10">
            {/* Left: Text */}
            <div className="flex-1">
              <h2 className="text-6xl  mb-4">{card.title}</h2>
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

    <div className="text-center mt-20">
      <button className="bg-gray-200 text-sm text-black py-2 px-4 rounded-full mb-10">
        Benefits
      </button>
      <h1 className="text-6xl pb-5">Why choose us?</h1>
      <p>
        Sustainability can be a confusing space. We help you cut through the
        noise and focus on your business.
      </p>

      <div className="flex flex-col gap-4 max-w-6xl mx-auto">
        {/* Top Row */}
        <div className="flex gap-4 mt-6">
          {advantages.slice(0, 2).map((adv) => (
            <div
              key={adv.id}
              className={`${
                adv.id === 1 ? "flex-1" : "w-1/3"
              } bg-gray-50 shadow-md rounded-3xl p-6 h-120`}
            >
              <h2 className="text-xl font-semibold">{adv.title}</h2>
              <p className="text-gray-600 mt-2">{adv.text}</p>
            </div>
          ))}
        </div>

        {/* Middle Row */}
        <div className="flex gap-4">
          {advantages.slice(2, 4).map((adv) => (
            <div
              key={adv.id}
              className={`${
                adv.id === 3 ? "flex-1 h-80" : "w-1/3"
              } bg-gray-50 shadow-md rounded-3xl p-6`}
            >
              <h2 className="text-xl font-semibold">{adv.title}</h2>
              <p className="text-gray-600 mt-2">{adv.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex gap-4">
          <div className="flex-1 bg-gray-50 shadow-md rounded-3xl p-6 text-start h-60">
            <h2 className="text-xl font-semibold">{advantages[4].title}</h2>
            <p className="text-gray-600 mt-2">{advantages[4].text}</p>
          </div>
        </div>
      </div>
    </div>

      <ReviewSlider />

      
    
    <div className='text-center mt-10 mb-20'>

    <button className='bg-black text-sm pb  text-white py-2 px-4 rounded-full '>About</button>
    </div>
    </>
  )
}

export default Servicves