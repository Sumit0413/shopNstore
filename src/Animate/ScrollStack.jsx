import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Lenis from "@studio-freight/lenis";

const ScrollStack = () => {
  const scrollRef = useRef();

  const cards = [
    {
      id: 1,
      title: "Card 1",
      text: "This is the first card in the stack",
      img: "https://via.placeholder.com/400x300.png?text=Shop+1",
    },
    {
      id: 2,
      title: "Card 2",
      text: "This is the second card in the stack",
      img: "https://via.placeholder.com/400x300.png?text=Shop+2",
    },
    {
      id: 3,
      title: "Card 3",
      text: "This is the third card in the stack",
      img: "https://via.placeholder.com/400x300.png?text=Shop+3",
    },
  ];

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      wrapper: scrollRef.current,
      content: scrollRef.current.firstChild,
      smooth: true,
      lerp: 0.08, // smaller = smoother
      smoothWheel: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div ref={scrollRef} className="h-screen overflow-hidden">
      <div className="scroll-container">
        {cards.map((card) => {
          const controls = useAnimation();
          const cardRef = useRef();

          useEffect(() => {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  controls.start({ opacity: 1, y: 0 });
                }
              },
              { threshold: 0.2 } // fade in when 20% visible
            );

            if (cardRef.current) observer.observe(cardRef.current);

            return () => observer.disconnect();
          }, [controls]);

          return (
            <motion.div
              key={card.id}
              ref={cardRef}
              className="h-screen flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="flex max-w-5xl w-full items-center gap-10 px-10">
                {/* Left: Text */}
                <div className="flex-1">
                  <h2 className="text-4xl font-bold mb-4">{card.title}</h2>
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
          );
        })}
      </div>
    </div>
  );
};

export default ScrollStack;
