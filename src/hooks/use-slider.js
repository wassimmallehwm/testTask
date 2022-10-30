import { useState } from "react";

const useSlider = (length) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(length);
    }
  };

  const moveDot = (i) => setSlideIndex(i);

  return { slideIndex, nextSlide, prevSlide, moveDot };
};

export default useSlider;
