import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";
import image3 from "../../assets/image3.jpeg";
import image4 from "../../assets/image4.jpeg";
import image5 from "../../assets/image5.jpeg";
import image6 from "../../assets/image6.jpeg";

const slides = [
  { id: 1, content: "Slide 1", image: image3 },

  { id: 2, content: "Slide 2", image: image1 },
  { id: 3, content: "Slide 3", image: image4 },
  { id: 4, content: "Slide 4", image: image5 },
  { id: 5, content: "Slide 5", image: image6 },
];

const Slider = () => {
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
    <div className="relative overflow-hidden mx-auto w-full">
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10 cursor-pointer"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <FaArrowLeft size={24} />
      </button>
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full flex-shrink-0 text-center bg-gray-100">
            <div className="h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
              <img
                src={slide.image}
                alt={slide.content}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-4 text-xl">{slide.content}</div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10 cursor-pointer"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <FaArrowRight size={24} />
      </button>
    </div>
  );
};

export default Slider;
