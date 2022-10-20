import React from 'react'
import Header from './components/Header'
import "./App.css"
import Home from './pages/Home'
import DetailProduct from './components/DetailProduct'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="matlador/:productId" element={<DetailProduct />}/>
        </Routes>
    </div>
  )
}

export default App
