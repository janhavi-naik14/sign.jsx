import React, { useState, useEffect } from 'react';
import './slider.css'; // Import your CSS file

function ImageSlider() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 2000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  function currentSlide(n) {
    showSlides(n);
  }

  function showSlides(n) {
    let newIndex = n;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      newIndex = 1;
    }    
    if (n < 1) {
      newIndex = slides.length;
    }

    setSlideIndex(newIndex);

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[newIndex - 1].style.display = "block";
    dots[newIndex - 1].className += " active";
  }

  return (
    <div className="slider-container">
      <div className="slider">
        <img className="slide" src="./assets/slider.png" alt="Slide 1" />
        <img className="slide" src="./assets/slider.png" alt="Slide 2" />
        <img className="slide" src="./assets/slider.png" alt="Slide 3" />
      </div>
      <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
      <button className="next" onClick={() => plusSlides(1)}>&#10095;</button>

      <div className="dots">
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
}

export default ImageSlider;
