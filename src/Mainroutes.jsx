import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Details from './pages/Details'
import Counter from './pages/Counter'

const Mainroutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/menu" element={ <Menu /> } />
            <Route path="/details" element={ <Details /> } />
            <Route path="/counter" element={ <Counter /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default Mainroutes