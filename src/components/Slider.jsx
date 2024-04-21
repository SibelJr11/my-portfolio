import React from "react";
import Slider from "react-slick";
import '../styles/Habilidades.css'
const SimpleSlider = () => {

  const settings = {
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true, // Hacer el carrusel automático
      autoplaySpeed: 2000, 
  };

  const tech = [
    
    {url:'html.png'},
    {url:'css.png'},
    {url:'js.png'},
    {url:'reactjs.png'},
    {url:'nodejs.png'},
    {url:'mysql.png'},
    {url:'bootstrap.png'},
    {url:'github.png'},
    {url:'MUI.png'},
    {url:'tailwindcss.webp'},
  
  ];

  return (
    <Slider {...settings} className="slider">

{tech.map((t, index) => (
        <div key={index}>
          <img src={`/${t.url}`} alt={t.url} />
        </div>
      ))}
      
    </Slider>
  );
}

export default SimpleSlider;