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
    // Tecnologías esenciales para el desarrollo web
    { name: "JavaScript", url: "/images/js.png" },
    { name: "HTML", url: "/images/html.png" },
    { name: "CSS", url: "/images/css.png" },
  
    // Frameworks y bibliotecas frontend
    { name: "React.js", url: "/images/reactjs.png" },
    { name: "Redux", url: "/images/redux.webp" },
  
    // Backend y manejo de datos
    { name: "Node.js", url: "/images/nodejs.png" },
    { name: "Express.js", url: "/images/express.png" },
    { name: "MySQL", url: "/images/mysql.png" },
    { name: "JWT (JSON Web Token)", url: "/images/jwt.png" },
  
    // Comunicación en tiempo real
    { name: "Socket.io", url: "/images/socket.webp" },
  
    // Frameworks y herramientas de estilo
    { name: "Tailwind CSS", url: "/images/tailwindcss.webp" },
    { name: "Bootstrap", url: "/images/bootstrap.png" },
    { name: "Material UI (MUI)", url: "/images/mui.png" },
  
    // Herramientas de desarrollo
    { name: "GitHub", url: "/images/github.png" }
  ];
  

  return (
    <Slider {...settings} className="slider">

{tech.map((t, index) => (
        <div key={index}>
          <img src={`${t.url}`} alt={t.url} />
        </div>
      ))}
      
    </Slider>
  );
}

export default SimpleSlider;