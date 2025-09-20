import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
  question: "What is ShopNStore?",
  answer:
    "ShopNStore is a simple digital business card platform that helps local shops create an online presence, connect with customers, and grow their business.",
},
{
  question: "What information can I showcase?",
  answer:
    "You can display your shop name, logo, address with Google Maps link, contact details, opening hours, a photo gallery, and even your top products or services.",
},
{
  question: "Can I manage payments with ShopNStore?",
  answer:
    "Yes! ShopNStore lets you track pending and completed payments, generate UPI QR codes, and even share digital receipts with your customers.",
},
{
  question: "Do I need technical skills to use it?",
  answer:
    "Not at all. ShopNStore is designed for simplicity. If you can use WhatsApp, you can easily manage your digital card.",
},
{
  question: "Is ShopNStore free to use?",
  answer:
    "Yes, there is a free version with essential features. Premium plans unlock advanced tools like analytics, promotional posters, and custom branding.",
},

];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto p-6 mb-10">
      <h2 className="text-6xl text-center mb-8">Frequently Asked Questions</h2>
      <p className="text-center pb-20">Here are the top questions our clients ask before getting started.</p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=""
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full cursor-pointer flex justify-between items-center px-4 py-3 text-left text-lg font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              {faq.question}
              <span>
                {openIndex === index ? (
                  <FaMinus className="text-black" />
                ) : (
                  <FaPlus className="text-black" />
                )}
              </span>
            </button>

            {/* Answer with animation */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-40 px-4 py-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
