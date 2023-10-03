import React from 'react'
import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <div className='header'>
        <h2>Sibel Jr .</h2>
        <ul className='list'>
            <li><a href='#about'>About</a></li>
            <li><a href='#habilidades'>Tech</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
    </div>
  )
}

export default NavBar