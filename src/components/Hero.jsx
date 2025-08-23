import React, { useState, useEffect } from "react";
import { slides } from "../data/Slides"



function Hero() {
  
  const [current, setCurrent] = useState(0);

  // Autoplay effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 4 seconds per slide

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden text-white" id="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-20 text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {slide.title}
            </h1>
            <p className="max-w-xl mb-6 text-lg">{slide.description}</p>
            <div className="space-x-4">
              <button onClick={() => (window.location.href = slide.href1)} className="bg-yellow-500 hover:bg-yellow-600 hover:cursor-pointer px-6 py-2 rounded-lg font-semibold transition">
                {slide.btn1}
              </button>
              <button onClick={() => (window.location.href = slide.href2)} className="bg-white text-black hover:bg-gray-200 hover:cursor-pointer px-6 py-2 rounded-lg font-semibold transition">
                {slide.btn2}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-yellow-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Hero;
