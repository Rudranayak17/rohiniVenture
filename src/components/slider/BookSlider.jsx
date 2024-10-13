import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  { id: 1, content: "Slide 1", image: "https://via.placeholder.com/300x450" },
  { id: 2, content: "Slide 2", image: "https://via.placeholder.com/300x450" },
  { id: 3, content: "Slide 3", image: "https://via.placeholder.com/300x450" },
  { id: 4, content: "Slide 4", image: "https://via.placeholder.com/300x450" },
];

const BookSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative max-w-md h-3/4 overflow-hidden mx-auto mb-4">
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 rounded-full p-2 text-white z-10"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <FaArrowLeft size={24} />
      </button>
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="flex-none w-full h-full book-card">
            <img
              src={slide.image}
              alt={slide.content}
              className="w-full h-auto object-cover" 
            />
          </div>
        ))}
      </div>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 rounded-full p-2 text-white z-10"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <FaArrowRight size={24} />
      </button>
    </div>
  );
};

export default BookSlider;
