import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Banner.css";
import car from '../../Components/Assets/porsche.jpg'
import galleryData from "../../Components/Assets/galleryData";

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    interval: 2000, // Slide interval
    pause: 'hover', // Pause on hover
    controls: true, // Show controls if needed
    indicators: true, // Show indicators if needed
  };

  const slides = [
    {
      id: 1,
      img: car,
      text: "we provide highest quality ",
      text1: "towing services",
      text2: "Fast, courteous and inexpensive towing and roadside assistance in San Diego.",
    },
    {
      id: 2,
      img: galleryData.CAR7,
      text: "we provide highest quality",
      text1: "towing services",
      text2: "Fast, courteous and inexpensive towing and roadside assistance in San Diego.",
    },
    {
      id: 3,
      img: galleryData.BIKE4,
      text: "we provide highest quality ",
      text1: "towing services",
      text2: "Fast, courteous and inexpensive towing and roadside assistance in San Diego.",
    }
  ];

  return (
    <div style={{ paddingLeft: 0, paddingRight: 0, borderRadius: 0 }} className="carousel-container">
      <Carousel
        data-bs-theme="dark"
        onSelect={(selectedIndex) => setCurrentSlide(selectedIndex)}
        interval={settings.interval}
        pause={settings.pause}
        controls={settings.controls}
        indicators={settings.indicators}
      >
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img
              style={{ paddingLeft: 0, paddingRight: 0, borderRadius: 0 }}
              className="d-block w-100 slider-img"
              src={slide.img}
              alt={`Slide ${slide.id}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Apply dynamic class based on currentSlide */}
      <div
        className={`text-box ${
          currentSlide === 1
            ? "text-box-left": 
            currentSlide === 2?
             "text-box-center"
             :"text-box-right"
        }`}
      >
        <span style={{ backgroundColor: 'white', color: 'black', padding: 10, fontWeight: 500 }} className="category">
          Mordern, <span style={{ color: '#f35525' }}>Towing</span>
        </span>
        <h3 className="txt-h3">{slides[currentSlide].text}</h3>
        <h3 className="txt-h3-2">{slides[currentSlide].text1}</h3>
      </div>
    </div>
  );
};

export default HomeBanner;
