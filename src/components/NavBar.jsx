import React, { useState } from 'react'
import '../styles/NavBar.css'

const NavBar = () => {
  const [menuOpen,setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`header ${menuOpen ? 'menu-open' : ''}`}>
    
        <h2>{"< Sibel Jr . />"}</h2>
        <button className="menu-button" onClick={toggleMenu}>
            <i className="icono fi fi-br-menu-burger"></i>
         </button>
        <ul className={`list ${menuOpen ? 'menu-list' : ''}`}>
             <li><a href='#principal'>Inicio</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#habilidades'>Habilidades</a></li>
            <li><a href='#projects'>Proyectos</a></li>
            <li><a href='#contact'>Contacto</a></li>
        </ul>
    </div>
  )
}

export default NavBar