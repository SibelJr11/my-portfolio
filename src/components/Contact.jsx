import React from 'react';
import '../styles/Contact.css'; // Asegúrate de importar tu archivo de estilos si lo tienes

const Contact = () => {
  const socialMediaLinks = [ 
    { 
        name: 'Correo', 
        url: 'mailto:sibeljunior11@gmail.com', 
        icon: 'correo.svg' 
      },
    { name: 'Facebook',url: 'https://www.facebook.com/sibelantonio.olayamestizo', icon: 'facebook.svg' },
    { name: 'Instagram',url: 'Instagram', icon: 'instagram.svg' },
    { name: 'WhatsApp',url: 'https://api.whatsapp.com/send?phone=3228464115', icon: 'whatsapp.svg' },
    { name: 'LinkedIn',url: 'https://www.linkedin.com/in/sibel-antonio-olaya-mestizo-7603871b6', icon: 'linkedin.svg' },
    { name: 'GitHub', url: 'https://github.com/SibelJr11', icon: 'github.svg' },
  ];

  return (
    <div className='contact'>
      <ul className='contact-list'>
        {socialMediaLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank">
              <img src={`/${link.icon}`} title={link.name} className='image' />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;