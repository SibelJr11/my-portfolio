import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Principal from './components/Principal'
import About from './components/About'
import Habilidades from './components/Habilidades'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className='container'>
      <NavBar/>
      <Principal/>
      <About/>
      <Habilidades/>
      <Projects/>
      <Contact/>
      <Footer/>

    </div>
      
  )
}

export default App
