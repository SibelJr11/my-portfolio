import React from 'react'
import '../styles/Projects.css'

const Projects = () => {

  const projects=[
    {
     name:"Sistema de Gestión de Clientes, Gastos y Cobros Dejando Huellas",
     link_project:"",
     link_github:"" ,
     img:"/dejandohuellas.png"
    },
    {
      name:"Proyecto Clon Pinterest",
      link_project:"",
      link_github:"" ,
      img:"/clon-pinterest.png"
     },
     {
      name:"App del Clima",
      link_project:"",
      link_github:"",
      img:"/app-clima.png"
     },
     {
      name:"Chat App",
      link_project:"",
      link_github:"",
      img:"https://isenacode.com/wp-content/uploads/2019/08/Imagen-2.png"
     },
      {
     name:"Mi Portafolio",
     link_project:"",
     link_github:"",
     img:'portafolio.png'
    },

  ]
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
                     
                      <a href={`${p.link_github}`} className='button'>Ver Codigo</a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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