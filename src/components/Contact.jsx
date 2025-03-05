import React from 'react';
import '../styles/Contact.css'; // Asegúrate de importar tu archivo de estilos si lo tienes

const Contact = () => {
  const socialMediaLinks = [ 
    { name: 'Correo', url: 'mailto:sibeljunior11@gmail.com', icon: '/images/correo.svg' },
    { name: 'Facebook', url: 'https://www.facebook.com/sibelantonio.olayamestizo', icon: '/images/facebook.svg' },
    { name: 'Instagram', url: 'https://www.instagram.com/tu_usuario', icon: '/images/instagram.svg' }, 
    { name: 'WhatsApp', url: 'https://api.whatsapp.com/send?phone=+573228464115', icon: '/images/whatsapp.svg' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sibel-antonio-olaya-mestizo-7603871b6', icon: '/images/linkedin.svg' },
    { name: 'GitHub', url: 'https://github.com/SibelJr11', icon: '/images/github.svg' },
];
   return(

<div  id='contact' className='contact'>
  <ul className='contact-list'>
    {socialMediaLinks.map((link, index) => (
      <li key={index}>
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          <img src={link.icon} title={link.name} className='image' />
        </a>
      </li>
    ))}
  </ul>
</div>
);

}

export default Contact;