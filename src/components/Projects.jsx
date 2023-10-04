import React from 'react'
import '../styles/Projects.css'

const Projects = () => {
  return (
    <div id='projects' className='projects'>
        <h1>Mis Proyectos</h1>

        <div className='grid-container-project'>

            <div className="grid-item-project">
               <div className="imagen">
                  <img src="/dejandohuellas.png" alt="Proyecto 1"/>
              </div>
                <div className="info-image">
                  <div>
                      <h3>Sitema de Gestion de Clientes, Gasto Cobros Dejando Huellas </h3>
                     
                      <a href="enlace-del-proyecto" className='button'>Ver Codigo</a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="enlace-del-proyecto" className='button'>Ver Proyecto</a>
                    </div>
                </div>
            </div>

            <div className="grid-item-project">
                 <div className="imagen">
                    <img src="/clon-pinterest.png" alt="Proyecto 1"/>
                </div>
                <div className="info-image">
                  <div>
                      <h3>Proyecto Clon Pinterest</h3>
                     
                      <a href="enlace-del-proyecto" className='button'>Ver Codigo</a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="enlace-del-proyecto" className='button'>Ver Proyecto</a>
                    </div>
                </div>
            </div>


            <div className="grid-item-project">
                 <div className="imagen">
                    <img src="/app-clima.png" alt="Proyecto 1"/>
                </div>
                <div className="info-image">
                  <div>
                      <h3>App del Clima </h3>
                     
                      <a href="enlace-del-proyecto" className='button'>Ver Codigo</a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="enlace-del-proyecto" className='button'>Ver Proyecto</a>
                    </div>
                </div>
            </div>

            <div className="grid-item-project">
                 <div className="imagen">
                    <img src="/portafolio.png" alt="Proyecto 1"/>
                </div>
                <div className="info-image">
                  <div>
                      <h3>Mi Portafolio</h3>
                     
                      <a href="enlace-del-proyecto" className='button'>Ver Codigo</a>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="enlace-del-proyecto" className='button'>Ver Proyecto</a>
                    </div>
                </div>
            </div>

            

        </div>
        


    </div>
  )
}

export default Projects