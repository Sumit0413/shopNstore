import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What is GreenLeaf?",
    answer:
      "GreenLeaf is a sustainability platform that helps businesses measure, reduce, and report their carbon footprint.",
  },
  {
    question: "How does the carbon tracking work?",
    answer:
      "We use industry-leading methodologies to track your emissions across scope 1, 2, and 3, providing clear dashboards and insights.",
  },
  {
    question: "Can I integrate GreenLeaf with my existing tools?",
    answer:
      "Yes! GreenLeaf integrates seamlessly with common business tools and APIs to automate your data collection.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Absolutely. You can try GreenLeaf with a free 14-day trial to explore all features before committing.",
  },
    {
    question: "How does the carbon tracking work?",
    answer:
      "We use industry-leading methodologies to track your emissions across scope 1, 2, and 3, providing clear dashboards and insights.",
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
              className="w-full flex justify-between items-center px-4 py-3 text-left text-lg font-medium text-gray-800 hover:bg-gray-50 transition"
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
