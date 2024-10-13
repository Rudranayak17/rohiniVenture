import React, { useState, useEffect } from 'react';
import './Slider.css'; 
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 
const slides = [
  { id: 1, content: 'Slide 1', image: 'https://via.placeholder.com/800x400' },
  { id: 2, content: 'Slide 2', image: 'https://via.placeholder.com/800x400' },
  { id: 3, content: 'Slide 3', image: 'https://via.placeholder.com/800x400' },
  { id: 4, content: 'Slide 4', image: 'https://via.placeholder.com/800x400' },
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

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Auto-play functionality
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); 
    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="slider">
      <button
        className="arrow left"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <FaArrowLeft size={24} color="white" />
      </button>
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img
              src={slide.image}
              alt={slide.content}
              style={{ width: '100%', height: 'auto' }} 
            />
            <div className="text-center">{slide.content}</div>
          </div>
        ))}
      </div>
      <button
        className="arrow right"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <FaArrowRight size={24} color="white" /> 
      </button>
    </div>
  );
};

export default Slider;
