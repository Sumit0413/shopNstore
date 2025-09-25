import React, { useState, useEffect } from "react";
import { FaStar, FaRegStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
{
  id: 1,
  name: "Ravi K.",
  role: "General Store Owner",
  text: "ShopNStore made it so easy for me to create a digital business card. My customers can now find my shop on Google Maps and contact me directly.",
  stars: 5,
  img: "blob:https://web.whatsapp.com/4df2c046-f1cf-4483-840d-3db22bde479d",
},
{
  id: 2,
  name: "Neha S.",
  role: "Boutique Owner",
  text: "I love how ShopNStore lets me showcase my products and share offers instantly. My WhatsApp inquiries have doubled since I started using it.",
  stars: 5,
  img: "https://randomuser.me/api/portraits/women/65.jpg",
},
{
  id: 3,
  name: "Arjun M.",
  role: "Electronics Shop",
  text: "Managing payments has never been easier. With ShopNStore, I can track pending dues and send digital receipts to my customers in one click.",
  stars: 4,
  img: "https://randomuser.me/api/portraits/men/18.jpg",
},
{
  id: 4,
  name: "Pooja R.",
  role: "Bakery Owner",
  text: "The photo gallery and menu section helped me attract new customers. ShopNStore gave my small bakery a professional digital identity.",
  stars: 5,
  img: "https://randomuser.me/api/portraits/women/24.jpg",
},
{
  id: 5,
  name: "Imran H.",
  role: "Mobile Accessories Shop",
  text: "ShopNStore gave me a shareable digital card link and QR code. Now my customers can easily access my shop details and connect with me online.",
  stars: 5,
  img: "https://randomuser.me/api/portraits/men/41.jpg",
},

];

const ReviewSlider = () => {
  const [current, setCurrent] = useState(0);

  const itemsPerPage = 3; // desktop shows 3
  const totalSlides = reviews.length - itemsPerPage + 1;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1));
  };

  // Auto-slide effect (every 3s)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, [current]); // re-run interval when current changes

  return (
    <>
    <h2 className="text-6xl text-center mb-8 pt-10">Frequently Asked Questions</h2>
      <p className="text-center pb-20">Here are the top questions our clients ask before getting started.</p>
    
    <div className="relative w-full max-w-6xl mx-auto p-6">
      {/* Slider container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * (100 / itemsPerPage)}%)` }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
            >
              <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 h-full flex flex-col justify-between hover:shadow-xl transition duration-300">
                {/* Stars */}
                <div className="flex space-x-1 text-green-600 mb-4">
                  {Array.from({ length: 5 }).map((_, i) =>
                    i < review.stars ? (
                      <FaStar key={i} />
                    ) : (
                      <FaRegStar key={i} />
                    )
                  )}
                </div>

                {/* Review text */}
                <p className="text-gray-700 italic mb-6 flex-grow">
                  “{review.text}”
                </p>

                {/* Reviewer */}
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover shadow-md border"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <p className="text-gray-500 text-sm">{review.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 hover:bg-gray-100 p-3 rounded-full shadow-md transition"
      >
        <FaChevronLeft className="text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 hover:bg-gray-100 p-3 rounded-full shadow-md transition"
      >
        <FaChevronRight className="text-gray-700" />
      </button>

      
    </div>
    </>
  );
};

export default ReviewSlider;
