import { useState, useEffect } from "react";
export function useButtons(images, loading, userOnPage) {
  const [slideIndex, setSlideIndex] = useState(1);

  const showClickSlide = (index) => {
    setSlideIndex(index);
  };

  const nextSlide = () => {
    if (slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(images.length);
    }
  };

  useEffect(() => {
    if (userOnPage === "visible") {
      const slideAutoSwitch = setInterval(() => {
        if (slideIndex !== images.length) {
          setSlideIndex(slideIndex + 1);
        } else if (slideIndex === images.length) {
          setSlideIndex(1);
        }
      }, 5000);
      return () => clearInterval(slideAutoSwitch);
    }
  }, [loading, slideIndex, images.length, userOnPage]);

  return {
    slideIndex: slideIndex,
    showClickSlide: showClickSlide,
    nextSlide: nextSlide,
    prevSlide: prevSlide,
  };
}
