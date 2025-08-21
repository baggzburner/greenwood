import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'



function App() {
  return (
    <div>
    <Navbar /> 
    <Hero /> 


    <Routes>
      <Route path='/' element={<Home />} />
      

    </Routes>
    </div>
  )
}

export default App
