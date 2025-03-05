import React from 'react'
import '../styles/Projects.css'

const Projects = () => {

  const projects = [
    {
      name: "Sistema de Gestión Dejando Huellas",
      link_project: "https://contrato.dejandohuellas.com.co",
      img: "/images/dejandohuellas.png"
    },
    {
      name: "GestCafé",
      link_project: "https://gestcafe.netlify.app",
      img: "/images/gestcafe.png"
    },
    {
      name: "Clon Pinterest",
      link_project: "https://clon-pinterest-sjr11.netlify.app",
      img: "/images/pinterest.png"
    },
    {
      name: "App del Clima",
      link_project: "https://app-clima-sjr.netlify.app",
      img: "/images/clima.png"
    },
    {
      name: "Mi Portafolio",
      link_project: "https://sibel-antonio-olaya-m.netlify.app",
      img: "/images/portafolio.png"
    }
  ];
  
  return (
    <div id='projects' className='projects'>
        <h1>Mis Proyectos</h1>

        <div className='grid-container-project'>


     {projects.map((p,index)=>(
            <div className="grid-item-project" key={index}>
               <div className="imagen">
                  <img src={`${p.img}`} alt={`${p.name}`}/>
              </div>
                <div className="info-image">
                  <div>
                      <h3>{`${p.name}`}</h3>
                      <a href={`${p.link_project}`} className='button'>Ver Proyecto</a>
                    </div>
                </div>
            </div>
     ))}
        </div>
        


    </div>
  )
}

export default Projects