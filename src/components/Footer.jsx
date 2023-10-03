import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const fecha = new Date();
    const añoActual = fecha.getFullYear();

    return (
        <footer className='footer'>
            <div>
                <p>Desarrollado por  <b>Sibel Jr 11</b></p>
            </div>
           
            <p>Hecho con 💚 Colombia</p>
            <p> {añoActual} </p>
        </footer>
    );
}

export default Footer;