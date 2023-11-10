import React from 'react'
import "./App.css"
import Home from './Components/Home'
import { Route,Routes } from 'react-router-dom'
import Contuct from './Components/Contuct'
import About from './Components/About'

const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contuct" element={<Contuct />} />
      </Routes>
    
    </>
  )
}

export default App