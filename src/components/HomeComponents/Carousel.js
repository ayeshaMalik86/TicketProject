import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const navigate = useNavigate();

  const images = [
    '/assets/images/show-events-01.jpg',
    '/assets/images/show-events-02.jpg',
    '/assets/images/show-events-03.jpg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,  // To make it center aligned
    focusOnSelect: true,  // To focus on the selected image
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: (
      <button type="button" className="slick-prev">
        <span>←</span> 
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-next">
        <span >→</span> 
      </button>
    ),
  };

  const handleImageClick = () => {
    navigate('/');
  };

  return (
    <div className="carousel-container" style={{ 
      width: '100%', 
      margin: '0 auto', 
      gap:'10px'
    }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} onClick={handleImageClick} style={{ padding: '0 3rem' }}>
            <img 
              src={img} 
              alt={`Event ${index + 1}`} 
              className="carousel-image" 
              style={{
                width: '90%',
                height: 'auto', 
                objectFit: 'cover',         
              }} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

