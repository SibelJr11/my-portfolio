import React from 'react'
import '../styles/Principal.css'

const Principal = () => {
  return (
    <div className='principal'>
       <div className='grid-container-principal'>
       <div className="grid-item-principal">
        <div className='text'>
            <h1>Hi, I'm Sibel Olaya</h1>
            <p>Software Developer Jr</p>   
            <button>Ver CV</button> 
         </div> 
       </div>
         <div className="grid-item-principal">
            <img src='/public/iconDev.svg'/>  
        </div>
     </div>      
    </div>
  )
}

export default Principal;