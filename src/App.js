import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Featured from './pages/Featured'
import Blog from './pages/Blog'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/featured" element={<Featured/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App