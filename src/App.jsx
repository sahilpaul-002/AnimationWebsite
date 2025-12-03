import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router'
import Navbar from './assets/components/otherComponents/navbar/Navbar'

function App() {

  return (
    <div className="app-wrapper">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
