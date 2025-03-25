import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Slider.css'

function ImageSlider() {
    const settings = {
      dots: true,            // Show navigation dots
      infinite: false,        // Infinite loop scrolling
      speed: 500,           // Slide transition speed
      slidesToShow: 3,       // Show 1 slide at a time
      slidesToScroll: 1,     // Scroll 1 slide at a time
      autoplay: false,        // Auto-scroll images
      autoplaySpeed: 3000,
      arrows:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],   // Slide every 3 seconds
    };
  
    const cards = [
      { id: 1, title: "Offers", description: "Book Flights with Voice Chat! Use code: RASHMI" },
      { id: 2, title: "Offers", description: "Planning to book an international flight?Use code:INTERNATIONAL" },
      { id: 3, title: "Offers", description: "Celebrate Holi with your family Use code:HOLI " },
      { id: 4, title: "Offers", description: "Travel light, leave your worries behind with General Insurance" },
      { id: 5, title: "Offers", description: "Finding Indian Food just got easier! Use Zomato during International travel" },
    ];
    return (
      <div className="container">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </Slider>
    </div>
    );
  }
  
  export default ImageSlider;