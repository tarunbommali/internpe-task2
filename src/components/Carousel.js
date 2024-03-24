import React, { useState } from 'react';

const Carousel = ({ carouselList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselList.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselList.length - 1 : prevIndex - 1));
  };

  const activeSlide = carouselList[currentIndex];

  return (
    <div className="flex justify-between items-center h-[200px]">
      <button className="prev" onClick={prevSlide}>
        Prev
      </button>
      <div className="slide">
        <img className='h-[190] w-[100%] bg-cover' src={activeSlide} alt='carousel' />
      </div>
      <button className="next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
