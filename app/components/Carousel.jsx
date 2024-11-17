// Carousel.js
import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Navigate to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Jump to a specific image when a dot is clicked
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Swipeable handlers
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide, // Swipe left to go to the next slide
    onSwipedRight: prevSlide, // Swipe right to go to the previous slide
    trackMouse: true, // Enable mouse swiping for desktops
  });

  return (
    <div
      {...handlers} // Spread swipe handlers into the main div
      className="relative w-full max-w-2xl mx-auto"
    >
      {/* Image display */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-[50vh] object-cover"
        />
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 min-h-36 bg-gray-800/30 text-white px-3 py-2"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 min-h-36 bg-gray-800/30 text-white px-3 py-2"
      >
        Next
      </button>

      {/* Dots (tabs) */}
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-12 h-1 ${
              index === currentIndex ? "bg-konbini" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
