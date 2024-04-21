import React from 'react'
import '../styles/Principal.css'

const Principal = () => {
    const viewCV = () =>{
       const urlPDF = "/CV_SIBEL ANTONIO OLAYA.pdf";
       window.open(urlPDF, "_blank");
    }
   


  return (
    <div className='principal' id='principal'>
        <div className='text'>
            <h1>Hi, I'm Sibel Olaya</h1>
            <p>Software Developer Jr</p>   
            <button onClick={viewCV}>Ver CV</button> 
       </div>    
            <img src='/iconDev.svg'/>  
    </div>
  )
}

export default Principal;