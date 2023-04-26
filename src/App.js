import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App