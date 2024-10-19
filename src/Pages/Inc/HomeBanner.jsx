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
    interval: 1000, // Slide interval
    // pause: 'hover', // Pause on hover
    controls: true, // Show controls if needed
    indicators: true, // Show indicators if needed
  };

  const slides = [
    {
      id: 1,
      img: galleryData.UNDER1,
      text: "we provide highest quality ",
      text1: "Towing Services Mumbai",
      text2: "Fast, courteous and inexpensive towing and emergency towing services in San Diego",
    },
    {
      id: 2,
      img: galleryData.FLATBED1,
      text: "Top-quality towing you can trust",
      text1: "Towing Services Mumbai",
      text2: "We deliver dependable and professional towing services every time",
    },
    {
      id: 3,
      img: galleryData.BIKE3,
      text: "Safe, fast, and premium towing",
      text1: "Towing Services Mumbai",
      text2: "Our team ensures your vehicle is towed swiftly and securely",
    },
    {
      id: 4,
      img: galleryData.FLATBED3,
      text: "Expert towing, when it matters most",
      text1: "Towing Services Mumbai",
      text2: "In emergencies, trust our skilled towing service to get you back on track",
    },
    {
      id: 5,
      img: galleryData.CLOSED5,
      text: "Quick, reliable towing at its best",
      text1: "Towing Services Mumbai",
      text2: "Experience fast, hassle-free towing services whenever you're stuck",
    },
    {
      id: 6,
      img: galleryData.CLOSED6,
      text: "Dependable towing, 24/7",
      text1: "towing services",
      text2: "We’re available round-the-clock to provide you with reliable towing support",
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
              style={{ paddingLeft: 0, paddingRight: 0, borderRadius: 0, justifyContent: 'center' }}
              className="d-block w-100 slider-img"
              src={slide.img}
              alt={`Slide ${slide.id}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Apply dynamic class based on currentSlide */}
      <div
        className={`text-box ${currentSlide === 1 ? "text-box-left" :
          currentSlide === 2 ? "text-box-center" :
            currentSlide === 3 ? "text-box-right" :
              currentSlide === 4 ? "text-box-left" :
                currentSlide === 5 ? "text-box-center" :
                  "text-box-right"
          }`}
      >

        <span style={{ backgroundColor: 'white', color: 'black', padding: 10, fontWeight: 500 }} className="category">
          Modern, <span style={{ color: '#f35525' }}>Towing</span>
        </span>
        <h3 className="txt-h3">{slides[currentSlide].text}</h3>
        <h1 className="txt-h3-2">{slides[currentSlide].text1}</h1>
      </div>
    </div >
  );
};

export default HomeBanner;
